/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "civixstudio"
 *
 * @asset(civixstudio/*)
 * @asset(qx/icon/${qx.icontheme}/*)
 */
qx.Class.define("civixstudio.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
      
    // UI Components
    __header : null,
    __toolbar : null,
    __maximized : false,
    __maximizedCodeEditor : false,
    __ast : null,

    
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
        
      importScript('resource/civixstudio/parser/init');
             
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

       //unknow qooxdoo loader bug
       qx.theme.indigo.Appearance;
       qx.theme.indigo.Decoration;
       qx.theme.indigo.Font;
       
       
      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // register error handler
      qx.event.GlobalError.setErrorHandler(this.__onGlobalError, this);

      // container layout
      var layout = new qx.ui.layout.VBox();

      // main container
      var mainContainer = new qx.ui.container.Composite(layout);
      this.getRoot().add(mainContainer, { edge : 0 });

      // qooxdoo header
      this.__header = new civixstudio.view.Header();
      mainContainer.add(this.__header, { flex : 0 });
      
      // toolbar
      this.__toolbar = new civixstudio.view.Toolbar();
      mainContainer.add(this.__toolbar, { flex : 0 });

      // toolbar listener
      this.__toolbar.addListener("run", this.generateCode, this);

      // mainsplit, contains the editor splitpane and the info splitpane
      this.__mainsplit = new qx.ui.splitpane.Pane("horizontal");
      mainContainer.add(this.__mainsplit, { flex : 1 });
      this.__mainsplit.setAppearance("app-splitpane");

      // editor split (left side of main split)
      this.__editorsplit = new qx.ui.splitpane.Pane("horizontal");
      this.__editorsplit.setDecorator(null); // get rid of the 3px broder
      
      // info split (right side of the main split)
      this.__infosplit = new qx.ui.splitpane.Pane("vertical");
      this.__infosplit.setDecorator(null);

      // need to split up the creation process
      this.__editor = new civixstudio.view.Editor();
      this.__editor.addListener("codeChange", this._onCodeChange, this);
      this.__editor.addListener("toggleMaximize", this._onToggleMaximizeCodeEditor, this);      
      
      civixstudio.view.Editor.loadAce(function() {
        this.init();
      }, this);
      
      //this.__editorsplit.add(this.__samplesPane, 1);
      this.__editorsplit.add(this.__editor, 4);
      this.__mainsplit.add(this.__editorsplit, 4);
      this.__mainsplit.add(this.__infosplit, 4);


      this.__diagramEditor = new civixstudio.view.DiagramEditor();
      this.__diagramEditor.addListener("toggleMaximize", this._onToggleMaximize, this);
      this.__infosplit.add(this.__diagramEditor, 4);

      this.__mainsplit.getChildControl("splitter").addListener("pointerdown", function() {
        this.__editor.block();
      }, this);

      this.__mainsplit.addListener("losecapture", function() {
        this.__editor.unblock();
      }, this);
      
      
    }
    
    /**
     * Initialization after the external editor has been loaded.
     */
    ,init: function() {
      this.__editor.init();
      this.__diagramEditor.codeEditor = this.__editor;
    }
    
    /**
     * Helper to toggle the editors split pane which means togglinge the
     * visibility of the editor.
     */
    ,_onToggleMaximize : function() {
      this.__maximized = !this.__maximized;
      if (this.__maximized) {
        this.__editorsplit.exclude();
        this.__header.exclude();
        this.__toolbar.exclude();
      } else {
        this.__editorsplit.show();
        this.__header.show();
        this.__toolbar.show();
      }
    }
    
    /**
     * Helper to toggle the editors split pane which means togglinge the
     * visibility of the editor.
     */
    ,_onToggleMaximizeCodeEditor : function() {
      this.__maximizedCodeEditor = !this.__maximizedCodeEditor;
      if (this.__maximizedCodeEditor) {
        this.__infosplit.exclude();
        this.__header.exclude();
        this.__toolbar.exclude();
      } else {
        this.__infosplit.show();
        this.__header.show();
        this.__toolbar.show();
      }

    }
    
    /**
     * Helper to monitor editor text change
     *
     */
    ,_onCodeChange : function(evt) {
        
        var code = this.__editor.getCode();
        this.parseCode(code);
        
    }
    
    ,parseCode: function(input){
        

        var chars = new antlr4.InputStream(input);

        var err = 0;
        var annotations = [];
        var errListener = new CivixDDLErrorListener(function(line, column, msg){
            err++;
            
            annotations.push({
                    row: line - 1,
                    column: column,
                    text: msg,
                    type: "error"
            });
            
        });


        var lexer = new CivixDDLLexer(chars);
        lexer.removeErrorListeners();
        lexer.addErrorListener(errListener);

        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new CivixDDLParser(tokens);
        //parser.setErrorHandler(new antlr4.error.BailErrorStrategy());

        parser.buildParseTrees = true;

        parser.removeErrorListeners();
        parser.addErrorListener(errListener);
        var listener = new CivixDDLListener();
            
        try {
            
            var tree = parser.compilationUnit();
            antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
            
        } catch(e){
            //console.log(e);
        }


        if(errListener.errNumber == 0){
            this.__editor.setError('');
            //console.log(JSON.stringify(CivixDDLListener.ast, null, '\t'));
            ASTHelper.ast = listener.ast;
            this.__ast = listener.ast;
            this.__diagramEditor.render(listener.ast);
            //console.log(listener.ast);
        } else {
            this.__ast = {};
            ASTHelper.ast = this.__ast;
            this.__editor.setError(annotations[0].text);
            this.__editor.displayErrors(annotations);
        }
        
              
    }
    
    ,generateCode: function(){
        alert('Look AST in javascript console');
        console.log(this.__ast);
    }
    
    
  }
});
