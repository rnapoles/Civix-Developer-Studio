/**
 * Container for the source code editor.
 * @asset(civixstudio/*)
 * @asset(js/*)
 * @ignore(ace.*, require)
 */
qx.Class.define("civixstudio.view.Editor",
{
  extend : qx.ui.container.Composite,
  include : qx.ui.core.MBlocker,

  statics : {
    loadAce : function(clb, ctx) {
      
      var resource = [
        "civixstudio/editor/ace.js",
        "civixstudio/editor/theme-eclipse.js",
        "civixstudio/editor/ext-language_tools.js",
        "civixstudio/editor/mode-java.js"
      ];
      
      var load = function(list) {
          
        if (list.length == 0) {
          clb.call(ctx);
          return;
        }
        
        var res = list.shift();
        var uri = qx.util.ResourceManager.getInstance().toUri(res);
        var loader = new qx.bom.request.Script();
        loader.onload = function() {
          load(list);
        };
        
        loader.open("GET", uri);
        loader.send();
      }
      load(resource);
    }
  },


  construct : function()
  {
        this.base(arguments);
    
        this.setBackgroundColor("white");

        // layout stuff
        var layout = new qx.ui.layout.VBox();
        this.setLayout(layout);
        this.setDecorator("main");

        // caption
        var dec = new qx.ui.decoration.Decorator().set({
            widthBottom : 1,
            colorBottom : "border-separator"
        });

        var decLab = new qx.ui.decoration.Decorator().set({
            widthTop : 1,
            colorTop : "border-separator"
        });

        this._caption = new qx.ui.container.Composite();
        this._caption.setBackgroundColor("white");
        this._caption.setLayout(new qx.ui.layout.HBox());

        // caption label
        this.__captionLabel = new qx.ui.basic.Label("Code editor").set({
          font       : "bold",
          padding    : 7,
          allowGrowX : true,
          allowGrowY : true
        });
        
        this.__errorLabel = new qx.ui.basic.Label().set({
            decorator    : decLab,
            padding    : 2,
            allowGrowX : true,
            allowGrowY : true,               
            textColor: "red"
        });
        

        // button for max / min the play area
        var maxIcon = "decoration/window/maximize.gif";
        var restoreIcon = "decoration/window/restore.gif";
        var maxButton = new qx.ui.form.Button(null, maxIcon);
        
        maxButton.setAppearance("toolbar-button");
        maxButton.setMargin(6);
        maxButton.setMinHeight(21);
        maxButton.setToolTipText(this.tr("Maximize"));
        maxButton.addListener("execute", function() {
          // toggle the icons
          if (maxButton.getIcon() == maxIcon) {
            maxButton.setIcon(restoreIcon);
            maxButton.setToolTipText(this.tr("Restore"));
          } else {
            maxButton.setIcon(maxIcon);
            maxButton.setToolTipText(this.tr("Maximize"));
          }
          this.fireEvent("toggleMaximize");
        }, this)

        // combine all parts for the caption
        this._caption.add(this.__captionLabel);
        this._caption.add(new qx.ui.core.Spacer(), {flex: 1});
        this._caption.add(maxButton);
        this.add(this._caption);
        this._caption.set({
          minHeight: 32,
          maxHeight: 32,
          decorator : dec
        });

      // plain text area
      this.__textarea = new qx.ui.form.TextArea().set({
        wrap      : false,
        font      : qx.bom.Font.fromString("14px monospace"),
        backgroundColor: "white",
        padding   : [0,0,0,5],
        decorator : null
      });
      this.add(this.__textarea, { flex : 1 });

  },


  events :
  {
    /**
     * Event for signaling that the highlighting could not be done by the editor.
     */
    "disableHighlighting" : "qx.event.type.Event",
    
    /** Event to signal the the fields should be maximized / restored. */
    "toggleMaximize" : "qx.event.type.Event",
    
    /** Change event which signals the change of text.*/
    "codeChange" : "qx.event.type.Data"  
  },


  members :
  {
    __textarea : null,
    __highlighted : null,
    __editor : null,
    __ace : null,
    __errorLabel : null,

    /**
     * The constructor was spit up to make the included mixin available during
     * the init process.
     */
    init: function()
    {
    
        // If widgets are added to the container, the zIndex of the editor blocker
        // is set to 100. This makes possible to resize the splitpanes
        this.addListener("addChildWidget", function() {
            this.getBlocker().getBlockerElement().setStyles({ "zIndex" : 100 });
        }, this);

      this.__editor = new qx.ui.core.Widget();
      var highlightDisabled = false;
      var badIE = qx.core.Environment.get("engine.name") == "mshtml";
      if (badIE) {
        badIE = parseFloat(qx.core.Environment.get("browser.version")) <= 8 ||
          qx.core.Environment.get("browser.documentmode") <= 8;
      }

      var opera = qx.core.Environment.get("engine.name") == "opera";

      // FF2 does not have that...
      if (!document.createElement("div").getBoundingClientRect || badIE || opera || !window.ace) {
        this.fireEvent("disableHighlighting");
        highlightDisabled = true;
      } else {
        this.__editor.addListenerOnce("appear", function() {
          this.__onEditorAppear();
        }, this);
      }
      this.__editor.setVisibility("excluded");
      this.add(this.__editor, { flex : 1 });

      // override the focus border CSS of the editor
      qx.bom.Stylesheet.createElement(
        ".ace_editor {border: 0px solid #9F9F9F !important;}"
      );

      // chech the initial highlight state
      var shouldHighligth = qx.bom.Cookie.get("playgroundHighlight") !== "false";
      this.useHighlight(!highlightDisabled && shouldHighligth);
      
      this.add(this.__errorLabel);
    },


    /**
     * This code part uses the ajax.org code editor library to add a
     * syntax-highlighting editor as an textarea replacement
     *
     * @ignore(ace.edit, require)
     */
    __onEditorAppear : function() {
        
        // timout needed for chrome to not get the ACE layout wrong and show the
        // text on top of the gutter
        qx.event.Timer.once(function() {
            var container = this.__editor.getContentElement().getDomElement();

            // create the editor
            var editor = this.__ace = ace.edit(container);

            var langTools = ace.require("ace/ext/language_tools"); 
            
            var civiCrmCompleter = {
                getCompletions: function(editor, session, pos, prefix, callback) {
                   
                    var reqCivixDomain = new qx.bom.request.Xhr();
                    reqCivixDomain.onload = function() {

                        // Handle data received
                        var classes = reqCivixDomain.responseText.split("\n").sort();
                        classes.forEach(function(item){
                            callback(null, [{name: 'Entity ' + item, value: item, score: 1, meta: 'Civicrm'}])
                        });

                    }
                    
                    reqCivixDomain.open("GET",'resource/civixstudio/editor/snippets/CivicrmDomain.txt');
                    reqCivixDomain.send();

                }
            }
            langTools.addCompleter(civiCrmCompleter);

            var annotationsCompleter = {
                getCompletions: function(editor, session, pos, prefix, callback) {
                   
                    var reqCivixDomain = new qx.bom.request.Xhr();
                    reqCivixDomain.onload = function() {

                        // Handle data received
                        var classes = reqCivixDomain.responseText.split("\n").sort();
                        classes.forEach(function(item){
                            callback(null, [{name: 'Anotation ' + item, value: item, score: 1, meta: 'Anotation'}])
                        });

                    }
                    
                    reqCivixDomain.open("GET",'resource/civixstudio/editor/snippets/annotations.txt');
                    reqCivixDomain.send();

                }
            }
            langTools.addCompleter(annotationsCompleter);


            
            //editor.getSession().setMode(new JavaScriptMode());
            editor.getSession().setMode("ace/mode/java");;
            editor.setOptions({
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
            });

            // configure the editor
            var session = editor.getSession();
            session.setUseSoftTabs(true);
            session.setTabSize(2);

            var me = this;
            editor.getSession().on('change', function(evt){
                session.clearAnnotations();
                me.fireDataEvent("codeChange",{
                    editor:editor
                    ,evt:evt
                }); 
            });
            
            window.xSel = editor;         

            // copy the inital value
            session.setValue(this.__textarea.getValue() || "");

            var self = this;
            // append resize listener
            this.__editor.addListener("resize", function() {
              // use a timeout to let the layout queue apply its changes to the dom
              window.setTimeout(function() {
                self.__ace.resize();
              }, 0);
            });
            
        }, this, 500);
      
     
      
      
        var req = new qx.io.request.Xhr("resource/civixstudio/parser/demo.civ");

        req.addListener("success", function(e) {
            var req = e.getTarget();
            this.setCode(req.getResponse());
        }, this);

        // Send request
        req.send();
      
    },


    /**
     * Returns the current set code of the editor.
     * @return {String} The current set text.
     */
    getCode : function() {
      if (this.__highlighted && this.__ace) {
        return this.__ace.getSession().getValue();
      } else {
        return this.__textarea.getValue();
      }
    },


    /**
     * Sets the given code to the editor.
     * @param code {String} The new code.
     */
    setCode : function(code) {
      if (this.__ace) {
        this.__ace.getSession().setValue(code);

        // move cursor to start to prevent scrolling to the bottom
        this.__ace.renderer.scrollToX(0);
        this.__ace.renderer.scrollToY(0);
        this.__ace.selection.moveCursorFileStart();
      }
      this.__textarea.setValue(code);
    },

    /**
     * Display errors in editor.
     * @param errors {Array}.
     */
    displayErrors : function(errors) {
        
      if (this.__ace) {
        var session = this.__ace.getSession();
        session.clearAnnotations();
        session.setAnnotations(errors);
      }

    },
    
    /**
     * Display errors in editor.
     * @param errors {Array}.
     */
    setSelectionRange : function(startRow, startColumn, endRow, endColumn) {
        
      if (this.__ace) {
          
        var session = this.__ace.getSession();
        //var range = new ace.Range(startRow, startColumn, endRow, endColumn);
        session.selection.clearSelection();
        session.selection.moveCursorTo(startColumn-1,startRow,false);
        this.__ace.scrollToLine(startColumn-1,true,true);
        session.selection.selectTo(endColumn-1,endRow+1);

        
        // doc = session.selection.doc
        // startrange = doc.indexToPosition(startColumn);
        // endrange = doc.indexToPosition(endColumn);
        // myrange = {start:startrange, end:endrange}
        // session.selection.setSelectionRange(myrange, false);
        //range = new ace.Range(0,5,0,10);
        //session.selection.setSelectionRange(range,true);
        //session.renderer.scrollSelectionIntoView(range.start, range.end); 
        
        
      }

    },


    /**
     * Displays the given error in the caption bar.
     * @param ex {Exception} The exception to display.
     */
    setError : function(ex) {
      
      ex = ex || '';
      
      if(ex.length == 0){
          this.__errorLabel.exclude();
      } else {
          this.__errorLabel.show();
      }
      this.__errorLabel.setValue(ex ? ex.toString() : "");
    },


    /**
     * Switches between the ajax code editor editor and a plain textarea.
     * @param value {Boolean} True, if the code editor should be used.
     */
    useHighlight : function(value) {
      this.__highlighted = value;

      if (value) {
        // change the visibility
        this.__editor.setVisibility("visible");
        this.__textarea.setVisibility("excluded");

        // copy the value, if the editor already availabe
        if (this.__ace) {
          this.__ace.getSession().setValue(this.__textarea.getValue());
        }
      } else {
        // change the visibility
        this.__editor.setVisibility("excluded");
        this.__textarea.setVisibility("visible");

        // copy the value, if the editor already availabe
        if (this.__ace) {
          this.__textarea.setValue(this.__ace.getSession().getValue());
        }
      }
    }
  },



  /*
   *****************************************************************************
      DESTRUCTOR
   *****************************************************************************
   */

  destruct : function()
  {
    this._disposeObjects("__textarea");
    this.__ace = null;
  }
});
