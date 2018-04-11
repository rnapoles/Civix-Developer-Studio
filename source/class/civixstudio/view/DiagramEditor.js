/**
 * The GUI definition of the DiagramEditor.
 */
qx.Class.define("civixstudio.view.DiagramEditor",
{
  extend : qx.ui.container.Composite,


  construct : function()
  {
    

    var layout = new qx.ui.layout.VBox();
    layout.setSeparator("separator-vertical");
    this.base(arguments, layout);
    this.setDecorator("main");

    // caption
    this._caption = new qx.ui.container.Composite();
    this._caption.setBackgroundColor("white");
    this._caption.setLayout(new qx.ui.layout.HBox());

    var dec = new qx.ui.decoration.Decorator().set({
        widthBottom : 1,
        colorBottom : "border-separator"
    });
      
    // caption label
    this.__captionLabel = new qx.ui.basic.Label("Diagram editor").set({
      font       : "bold",
      padding    : 7,
      allowGrowX : true,
      allowGrowY : true,
      decorator : dec
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
    }, this);
    
    
    var zoomInButtom = new qx.ui.form.Button(null, "resource/civixstudio/icon/actions/zoom_in.png");   
    zoomInButtom.setAppearance("toolbar-button");
    zoomInButtom.setMargin(6);
    zoomInButtom.setMinHeight(21);
    zoomInButtom.setToolTipText(this.tr("Maximize"));
    zoomInButtom.addListener("execute", function() {
        this.graph.zoomIn();
    }, this)

    var zoomOutButtom = new qx.ui.form.Button(null, "resource/civixstudio/icon/actions/zoom_out.png");   
    zoomOutButtom.setAppearance("toolbar-button");
    zoomOutButtom.setMargin(6);
    zoomOutButtom.setMinHeight(21);
    zoomOutButtom.setToolTipText(this.tr("Maximize"));
    zoomOutButtom.addListener("execute", function() {
        this.graph.zoomOut();
    }, this);
    
    var zoomResetButtom = new qx.ui.form.Button(null, "resource/civixstudio/icon/actions/zoom.png");   
    zoomResetButtom.setAppearance("toolbar-button");
    zoomResetButtom.setMargin(6);
    zoomResetButtom.setMinHeight(21);
    zoomResetButtom.setToolTipText(this.tr("Maximize"));
    zoomResetButtom.addListener("execute", function() {
        this.graph.zoomActual();
    }, this);

    // combine all parts for the caption
    this._caption.add(this.__captionLabel);
    this._caption.add(zoomResetButtom);
    this._caption.add(zoomInButtom);
    this._caption.add(zoomOutButtom);
    this._caption.add(new qx.ui.core.Spacer(), {flex: 1});
    this._caption.add(maxButton);
    this.add(this._caption);
    this._caption.set({
      minHeight: 32,
      maxHeight: 32
    });

    // playfield
    this.__scrollContainer = new qx.ui.container.Scroll();
    this.__scrollContainer.getChildControl("scrollbar-x");
    this.__scrollContainer.getChildControl("scrollbar-y");
    this.__scrollContainer.getChildControl("corner");

    this.createContainer();
    
    //this._dummy = new qx.ui.core.Widget();
    //this.__scrollContainer.add(this._dummy);
    //this._dummy.setBackgroundColor("white");

    this.add(this.__scrollContainer, {flex : 1});
    this.addListener('appear',this._onShow,this);
    
    
  },


  events : {
    /** Event to signal the the fields should be maximized / restored. */
    "toggleMaximize" : "qx.event.type.Event"  
  },


  members :
  {
    _caption : null
    ,__captionLabel : null
    ,__scrollContainer : null
    ,_dummy : null
    ,_diagramRoot : null
    ,_playApp : null
    ,_initialized : false


    ,_onShow: function(){
        this.initMxGraph();
    }
    
    ,createContainer: function(){

        this.graphContainer = null;
        var innerHTML = "<div id=\"graphToolbar\"  style=\"background:url(resource/js/mxgraph/toolbar.gif);top:0px;height:30px;width:100%;;left:0px;right:0px;\">";
        innerHTML += "</div>";
        innerHTML += "<div id=\"graphContainer\"";
        innerHTML += " style=\"overflow:auto;width:100%;height:100%;background:url('resource/js/mxgraph/grid.gif');\">";
        innerHTML += "</div>";
        
        var embedGraph = new qx.ui.embed.Html(innerHTML);
        //var htmlContainer = new qx.ui.core.scroll.ScrollPane();
        var htmlContainer = new qx.ui.container.Composite();
        htmlContainer.setLayout(new qx.ui.layout.VBox());
        htmlContainer.add(embedGraph);

        htmlContainer.addListener("appear", function(e) {
            this.graphContainer = document.getElementById('graphContainer');
            var canvas = this.graphContainer.parentNode;
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            //canvas.style.overflow = 'auto';
            canvas.style.backgroundColor = 'white';
                            
        }, this);
        
        this.__scrollContainer.add(htmlContainer, {
            flex: 1
        });

    
    }    
    
    ,initGlobalStyles: function(){

            var selColor = '#3399FF'//'#00a8ff';
            mxConstants.HANDLE_FILLCOLOR = '#99ccff';
            mxConstants.HANDLE_STROKECOLOR = '#0088cf';
            mxConstants.VERTEX_SELECTION_COLOR = selColor;
            mxConstants.OUTLINE_COLOR = selColor;
            mxConstants.VALID_COLOR = '#99ccff';
            mxConstants.OUTLINE_HANDLE_FILLCOLOR = '#99ccff';
            mxConstants.OUTLINE_HANDLE_STROKECOLOR = selColor;
            mxConstants.CONNECT_HANDLE_FILLCOLOR = '#cee7ff';
            mxConstants.EDGE_SELECTION_COLOR = selColor;
            mxConstants.DEFAULT_VALID_COLOR = selColor;
            mxConstants.LABEL_HANDLE_FILLCOLOR = '#cee7ff';
            mxConstants.GUIDE_COLOR = '#0088cf';
            //mxConstants.HIGHLIGHT_OPACITY = 30;
            mxConstants.HIGHLIGHT_SIZE = 8;    
            
            this.fieldStyle = 'text;html=1;strokeColor=#B0B0B0;fillColor=#F2F2FF;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0';
            this.entityStyle = 'table';
            this.relStyle1 = 'endArrow=classic;startArrow=classic;html=1;';
            this.relStyle2 = 'endArrow=classic;html=1;';
    
    }
    
    ,initGraphStyles: function(){
    
            var graph = this.graph;
            
            var style = new Object();
            style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
            style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
            style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_LEFT;
            style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
            style[mxConstants.STYLE_FONTCOLOR] = '#000000';
            style[mxConstants.STYLE_FONTSIZE] = '11';
            style[mxConstants.STYLE_FONTSTYLE] = 0;
            style[mxConstants.STYLE_SPACING_LEFT] = '4';
            style[mxConstants.STYLE_IMAGE_WIDTH] = '48';
            style[mxConstants.STYLE_IMAGE_HEIGHT] = '48';
            graph.getStylesheet().putDefaultVertexStyle(style);

            style = new Object();
            style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_SWIMLANE;
            style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
            style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
            style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_TOP;
            style[mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
            //style[mxConstants.STYLE_GRADIENTCOLOR] = '#41B9F5';
            style[mxConstants.STYLE_FILLCOLOR] = '#BCD47C';
            style[mxConstants.STYLE_SWIMLANE_FILLCOLOR] = '#ffffff';
            style[mxConstants.STYLE_STROKECOLOR] = '#B0B0B0';
            style[mxConstants.STYLE_FONTCOLOR] = '#000000';
            style[mxConstants.STYLE_STROKEWIDTH] = '1';
            style[mxConstants.STYLE_STARTSIZE] = '28';
            style[mxConstants.STYLE_FONTSIZE] = '12';
            style[mxConstants.STYLE_FONTSTYLE] = 1;
            style[mxConstants.STYLE_IMAGE] = 'resource/civixstudio/icon/domain/entity.png';
            style[mxConstants.STYLE_IMAGE_ALIGN] = mxConstants.ALIGN_RIGHT;
            // Looks better without opacity if shadow is enabled
            //style[mxConstants.STYLE_OPACITY] = '80';
            style[mxConstants.STYLE_SHADOW] = 0;
            graph.getStylesheet().putCellStyle('table', style);

            style = graph.stylesheet.getDefaultEdgeStyle();
            style[mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = '#FFFFFF';
            style[mxConstants.STYLE_STROKEWIDTH] = '1';
            style[mxConstants.STYLE_ROUNDED] = true;
            style[mxConstants.STYLE_EDGE] = mxEdgeStyle.EntityRelation;
            style[mxConstants.STYLE_IMAGE_ALIGN] = mxConstants.ALIGN_RIGHT;
            style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
            
            var node = mxUtils.load('resource/js/mxgraph/styles/graph.xml').getDocumentElement();
            if (node != null)
            {
                var dec = new mxCodec(node.ownerDocument);
                dec.decode(node, graph.getStylesheet());
            }
    
    }
    
    ,configureSwimlane: function(){
        
        var editor = this.editor;
        
        // Table icon dimensions and position
        mxSwimlane.prototype.imageSize = 16;
        mxSwimlane.prototype.imageDx = 16;
        mxSwimlane.prototype.imageDy = 4;
        
        // Changes swimlane icon bounds
        mxSwimlane.prototype.getImageBounds = function(x, y, w, h)
        {
            return new mxRectangle(x + this.imageDx, y + this.imageDy, this.imageSize, this.imageSize);
        };        
        
        // Configures the automatic layout for the table columns
        editor.layoutSwimlanes = true;
        editor.createSwimlaneLayout = function ()
        {
            var layout = new mxStackLayout(this.graph, false);
            layout.fill = true;
            layout.resizeParent = true;
            
            // Overrides the function to always return true
            layout.isVertexMovable = function(cell)
            {
                return true;
            };
            
            return layout;
        };            
        
    }
    
    ,installEventHandlers: function(){
        
        var me = this;
        var graph = this.graph;
        
        graph.addListener(mxEvent.CELLS_ADDED, function (sender, evt) {

            if(me.isInserting){
                return;
            }
            
            var cells = evt.getProperty('cells'); // cell may be null            
            var e = evt.getProperty('event'); // mouse event

            if (cells != null) {
                var cell = cells[0];

                if (cell.value != null && cell.value.name != null) {
                    if (!cell.parent.value) {

                        var model = graph.model;
                        model.beginUpdate();
                        try {
                            //var cells = graph.getSelectionCells();
                            //console.dir(cells);
                            graph.removeCells(cells, true);
                        } finally {
                            // Updates the display
                            model.endUpdate();
                        }

                    }
                    
                }
            }
        },this);
        
    }
    
    ,addEditorFunctions: function(){
        
        var editor = this.editor;
        
        // Configures the automatic layout for the table columns
        editor.layoutSwimlanes = true;
        editor.createSwimlaneLayout = function ()
        {
            var layout = new mxStackLayout(this.graph, false);
            layout.fill = true;
            layout.resizeParent = true;
            
            // Overrides the function to always return true
            layout.isVertexMovable = function(cell)
            {
                return true;
            };
            
            return layout;
        };            
        
    }
    
    ,initSatelliteView: function(){
        
        var outline = document.getElementById('mapContainer');
        if(!outline){
            return;
        }
        
        this.outline = new mxOutline(this.graph, outline);
        this.outline.updateOnPan = true;            
        
    }
    
    ,initResizeHandler: function(){
        
        var mainHandle = new mxImage('resource/js/mxgraph/images/handle-main.png', 16, 16);
        mxEdgeHandler.prototype.handleImage = mainHandle;
        //mxEdgeHandler.prototype.snapToTerminals = true;
        mxVertexHandler.prototype.handleImage = mainHandle;
        mxOutline.prototype.sizerImage = mainHandle;            
        
    }
    
    
    ,addGraphFunctions: function(){
            
        var graph = this.graph;
        var me = this;
        
        // Returns the name field of the user object for the label
        graph.convertValueToString = function (cell) {
            if (cell.value != null && cell.value.name != null) {
                return cell.value.name;
            }

            return mxGraph.prototype.convertValueToString.apply(this, arguments); // "supercall"
        };

        // Columns are dynamically created HTML labels
        graph.isHtmlLabel = function(cell)
        {
            return !graph.isSwimlane(cell) &&
                !graph.model.isEdge(cell);
        };
        
        graph.getLabel = function(cell){

            if (cell.value != null) {


                if (this.isHtmlLabel(cell)){

                    var node = cell.value;
                    var img = '';
                    var lbl = node.name;

                    //console.log(node);
                    if(node.relationType.length == 0){
                        img = '<img style="float:left;margin-top: 3px;" src="resource/civixstudio/icon/domain/field.png" width="16" height="16" style="margin-top: 4px;">&nbsp;&nbsp;&nbsp;';
                    } else {

                        var relType = node.relationType;
                        if(node.unidirectional){

                            if(relType == '1 .. 1'){
                                img = '<img style="float:left;margin-top: 3px;" src="resource/civixstudio/icon/domain/rel/uoto.png" width="23" height="16">&nbsp;';
                            } else if(relType == '1 .. N'){                                                 
                                img = '<img style="float:left;margin-top: 3px;" src="resource/civixstudio/icon/domain/rel/uotm.png" width="23" height="16">&nbsp;';
                            } else if(relType == 'N .. 1'){                                                  
                                img = '<img style="float:left;margin-top: 3px;" src="resource/civixstudio/icon/domain/rel/umto.png" width="23" height="16">&nbsp;';                                
                            } else {                                                                        
                                img = '<img style="float:left;margin-top: 3px;" src="resource/civixstudio/icon/domain/rel/umtm.png" width="23" height="16">&nbsp;';                                
                            }
                            
                        } else {
                        
                            if(relType == '1 .. 1'){
                                img = '<img style="float:left;margin-top: 3px;" src="resource/civixstudio/icon/domain/rel/boto.png" width="23" height="16">&nbsp;';
                            } else if(relType == '1 .. N'){
                                img = '<img style="float:left;margin-top: 3px;" src="resource/civixstudio/icon/domain/rel/botm.png" width="23" height="16">&nbsp;';
                            } else if(relType == 'N .. 1'){
                                img = '<img style="float:left;margin-top: 3px;" src="resource/civixstudio/icon/domain/rel/bmto.png" width="23" height="16">&nbsp;';                                
                            } else {
                                //console.log(relType);
                                img = '<img style="float:left;margin-top: 3px;" src="resource/civixstudio/icon/domain/rel/bmtm.png" width="23" height="16">&nbsp;';                                
                            }
                        }
                        
                    }
                
                        
                    return img + '<span style="float:left;margin-top: 4px;">&nbsp;' + lbl + '</span>';

                }                

            }

            return mxGraph.prototype.getLabel.apply(this, arguments); // "supercall"
        };


        // Only tables are resizable
        graph.isCellResizable = function (cell) {
            return graph.isSwimlane(cell);
        };
        
        graph.selectCellForEvent = function(cell)
        {
            
            if(cell.value != null){
                
                var node = cell.value;
                if(node){
                    //me.setSelection(new qx.data.Array([cell.value]));
                    //console.log(node);
                    
                    if(node.start){
                        me.codeEditor.setSelectionRange(node.start.x, node.start.y, node.end.x, node.end.y);
                    }
                    
                    
                } else {
                    //console.log(cell.value);
                }
                
                
            }
            //console.log('---------------');
            //console.log('graph.selectCellForEvent');
            
            mxGraph.prototype.selectCellForEvent.apply(this, arguments);
        };                

        graph.isValidDropTarget = function (cell, cells, evt) {
            return graph.isSwimlane(cell);
        };

        // Adds child columns for new connections between tables
        graph.addEdge = function(edge, parent, source, target, index)
        {
        
            /*
            // Finds the primary key child of the target table
            var primaryKey = null;
            var childCount = this.model.getChildCount(target);
            
            for (var i=0; i < childCount; i++)
            {
                var child = this.model.getChildAt(target, i);
                
                if (child.value.primaryKey)
                {
                    primaryKey = child;
                    break;
                }
            }
            
            if (primaryKey == null)
            {
                mxUtils.alert('Target table must have a primary key');
                return;
            }
            */
        
            //console.log(edge, parent, source, target, index);
            
            me.isInserting = true;
            this.model.beginUpdate();
            try
            {
            
                /*
                var col1 = this.model.cloneCell(column);
                col1.value.name = primaryKey.value.name;
                col1.value.type = primaryKey.value.type;
            
                this.addCell(col1, source);
                source = col1;              
                target = primaryKey;
                */
                
                
                try {
                    
                    if(graph.isSwimlane(source)){
                        if(graph.isSwimlane(target)){

                            console.log(source.value.name,'->',target.value.name);
                            
                            var srcParentNode = source.value;
                            var targetParentNode = target.value;
                            
                            if(srcParentNode != null){

                                var isUni = true;
                                var relationType = '1 .. 1';
                                
                                if(me.curRelType != null){
                                    isUni = me.curRelType.unidirectional;
                                    relationType = me.curRelType.relationType;
                                }
                                
                                if(isUni){

                                    //codeEditor.setSelection([srcParentNode]);
                                    var name = target.value.name.lcfirst();
                                    var lbl = source.value.generateName(name,source.value.treeItem);
                                    if(!source.value.hasChild(name,source.value.treeItem)){
                                        lbl = name;
                                    }
                                    
                                    
                                    if(relationType[5] == 'N'){
                                        var nameP = inflection.pluralize(name);
                                        lbl = source.value.generateName(nameP,source.value.treeItem);
                                        if(!source.value.hasChild(nameP,source.value.treeItem)){
                                            lbl = nameP;
                                        }
                                    }                                    
                                    
                                    var data = new civixstudio.domain.Field({
                                        name:lbl
                                        ,targetEntity: target.value
                                        ,relationType: relationType
                                        //,inversedBy: 'field'
                                        ,unidirectional:true
                                    });
                                    srcParentNode.add(data);
                                    
                                    var fieldNode = data;                
                                    //srcParentNode.add(fieldNode);
                                    //codeEditor.setSelection([fieldNode]); 
                                            
                                    var newCell = graph.insertVertex(source,data,data.name, 0, 0, 100, 25,me.fieldStyle);
                                    newCell.setId(data.name);
                                    newCell.setValue(fieldNode);                
                                    newCell.setConnectable(false); 
                                    fieldNode.cell = newCell;
                                    
                                    var edge = graph.insertEdge(parent, null,data.relationType, newCell, target,me.relStyle2);            
                                    
                                    
                                    return edge;
                                    
                                } else {
                                
                                    var name1 = target.value.name.lcfirst();
                                    var lbl1 = source.value.generateName(name1,source.value.treeItem);
                                    if(!source.value.hasChild(name1,source.value.treeItem)){
                                        lbl1 = name1;
                                    }
                                    
                                    var name2 = source.value.getLabel().lcfirst();
                                    var lbl2 = target.value.generateName(name2,target.value.treeItem);
                                    if(!target.value.hasChild(name2,target.value.treeItem)){
                                        lbl2 = name2;
                                    }
                                    
                                    var name1P = inflection.pluralize(name1);
                                    var name2P = inflection.pluralize(name2);
                                        
                                    if(relationType[5] == 'N'){
                                            
                                        if(relationType == '1 .. N'){
                                            lbl1 = name1P;
                                            if(source.value.hasChild(lbl1,source.value.treeItem)){
                                              lbl1 = source.value.generateName(lbl1,source.value.treeItem);
                                            }
                                        } else if(relationType == 'N .. N'){

                                            lbl1 = source.value.generateName(name1P,source.value.treeItem);
                                            if(!source.value.hasChild(name1P,source.value.treeItem)){
                                              lbl1 = name1P;
                                            }
                                            
                                            lbl2 = target.value.generateName(name2P,target.value.treeItem);
                                            if(!target.value.hasChild(name2P,target.value.treeItem)){
                                              lbl2 = name2P;
                                            }

                                        
                                        } 
                                    } else if(relationType[0] == 'N'){
                                        
                                        lbl2 = name2P;
                                        if(source.value.hasChild(lbl2,source.value.treeItem)){
                                          lbl2 = source.value.generateName(lbl2,source.value.treeItem);
                                        }
                                        
                                    }
                                    
                                    var data1 = new civixstudio.domain.Field({
                                        name:lbl1
                                        ,targetEntity: target.value
                                        ,relationType: relationType
                                        ,unidirectional: false
                                    });

                                    var data2 = new civixstudio.domain.Field({
                                        name:lbl2
                                        ,targetEntity: source.value
                                        ,relationType: relationType
                                        ,unidirectional: false
                                    });

                                    
                                    if(relationType == '1 .. 1'){
                                        data1.inversedBy = data2;
                                        data2.mappedBy = data1;
                                    } else if(relationType == '1 .. N'){
                                        data1.mappedBy = data2;
                                        data2.inversedBy = data1;                                
                                        data2.relationType = 'N .. 1';
                                    } else if(relationType == 'N .. 1'){
                                        data1.inversedBy = data2;
                                        data2.mappedBy = data1;                                
                                        data2.relationType = '1 .. N';
                                    } else {
                                        data1.inversedBy = data2;
                                        data2.mappedBy = data1;
                                    }
                                    
                                    var fieldNode1 = data1;                
                                    //srcParentNode.add(fieldNode1);
                                    //codeEditor.setSelection([fieldNode1]);                                 

                                    var fieldNode2 = data2;                
                                    //targetParentNode.add(fieldNode2);

                                    var newCell = graph.insertVertex(source,data1,data1.name, 0, 0, 100, 25,me.fieldStyle);
                                    newCell.setId(data1.name);
                                    newCell.setValue(fieldNode1);                
                                    newCell.setConnectable(true);
                                    fieldNode1.cell = newCell;
                                    srcParentNode.add(data1);

                                    var newCell2 = graph.insertVertex(target,data2,data2.name, 0, 0, 100, 25,me.fieldStyle);
                                    newCell2.setId(data2.name);
                                    newCell2.setValue(fieldNode2);                
                                    newCell2.setConnectable(true);
                                    fieldNode2.cell = newCell2;
                                    targetParentNode.add(data2);
                                    
                                    me.curRelType = null
                                    
                                    var lbl = data1.relationType;
                                    if(data1.inversedBy == ''){
                                        lbl = data2.relationType;
                                    }
                                    
                                    if(relationType == 'N .. 1'){
                                        lbl = '1 .. N';
                                    } else if(relationType == '1 .. N'){
                                        lbl = 'N .. 1';
                                    } 
                                    
                                    var edge = graph.insertEdge(parent, null,lbl, newCell, newCell2,me.relStyle1);
                                    edge.setStyle(me.relStyle1); 
                                    
                                    return edge;
                                }

                            }
                        
                        }
                    }               
                
                } catch(e){
                    console.log(e);
                }                
                
                return mxGraph.prototype.addEdge.apply(this, arguments); // "supercall"
            }
            finally
            {
                me.isInserting = false;
                this.model.endUpdate();
            }
            
            return null;
        };            
    
    }
    
    ,initToolbar: function(){

        var graph = this.graph;
        var tbContainer = document.getElementById('graphToolbar');
        
        // Creates new toolbar without event processing
        var toolbar = new mxToolbar(tbContainer);
        toolbar.enabled = false;
        
        this.toolbar = toolbar;
        
        this.addVertex('resource/civixstudio/icon/actions/entity_add.png', 150, 200,this.entityStyle);
        this.addVertex('resource/civixstudio/icon/domain/field.png', 100, 25,this.fieldStyle);

        
    }
    
    ,initMxGraph: function(){
        
        // Checks if the browser is supported
        if (!mxClient.isBrowserSupported()) {
            mxUtils.error('Browser is not supported!', 200, false);
        } else {
            
            var diagramRootEl = this.graphContainer;
            //console.log(diagramRootEl);
      
            this.initGlobalStyles();
            
            // Creates the graph inside the given container
            var editor = new mxEditor();
            var graph = editor.graph;
            //var graph = new Graph();
            //var graph = new mxGraph();
            this.editor = editor;
            this.graph = graph;
            
            var rubberband = new mxRubberband(graph);
 

            this.initGraphStyles();               
            this.configureSwimlane();
            this.initSatelliteView();
            this.initToolbar();

            //var graph = mxGraph(container);
            graph.init(diagramRootEl);

            this.installEventHandlers();
            this.addEditorFunctions();
            this.addGraphFunctions();
            this.initResizeHandler();
            
            // Disables some global features
            graph.setConnectable(true);
            graph.setCellsDisconnectable(false);
            graph.setCellsCloneable(false);
            graph.swimlaneNesting = false;
            graph.dropEnabled = true;

            // Does not allow dangling edges
            graph.setAllowDanglingEdges(false);
            
            // Forces use of default edge in mxConnectionHandler
            graph.connectionHandler.factoryMethod = null;

            /*
             graph.setCellsDisconnectable(false);
             */
            /* 
            graph.setCellsCloneable(true);
            graph.swimlaneNesting = false;
            graph.allowLoops = true;
            graph.dropEnabled = true;
            graph.cellsDeletable = true;
            // Does not allow dangling edges
            graph.setAllowDanglingEdges(false);
            graph.setDropEnabled(true);
            */
            
            //graph.setCloneInvalidEdges(false);
            /*
            graph.setConnectable(true);
            graph.connectionHandler.setCreateTarget(true);
            */
            graph.enterStopsCellEditing = true;
            
            var layout = new mxCircleLayout(graph,2);
            //var layout = new mxFastOrganicLayout(graph);
            //layout.forceConstant = 80;
            this.layout = layout;                
            
        }            
        
    }
    
    ,render: function(ast){
        
        this.ast = ast;
        
        // Adds cells to the model in a single step
        var graph = this.graph;
        var defaultGraphParent = graph.getDefaultParent();
        //graph.getModel().clear();    
        
            this.isInserting = true;
            
            graph.getModel().beginUpdate();
            try {
                
                graph.removeCells(graph.getChildCells(defaultGraphParent, true, true));
                        
                var entitiesMap = new Map();
                var relField = [];
                var fieldsMap = new Map();
                var relFieldMap = new Map();
                
                var entities = ast.entities;
                entities.forEach(function(entity){
                    
                    var fields = entity.fields;
                    
                    var entityCell = graph.insertVertex(defaultGraphParent,entity,entity, 0, 0, 150, 200,this.entityStyle);
                    entityCell.setId(entity.name);
                    entityCell.setValue(entity);
                    entitiesMap.set(entity.name,entityCell);
                    entity.onRename = function(){
                        graph.labelChanged(entityCell,entity.name);
                    };
                                      
                    
                    fields.forEach(function(field){
                        
                        //var cellField = new mxCell(field, new mxGeometry(0, 0, 100, 25),this.fieldStyle);
                        var cellField = graph.insertVertex(defaultGraphParent,field,field.name, 0, 0, 100, 25,this.fieldStyle);
                        cellField.setValue(field);
                        
                        var key = entity.name + '-' + field.name;
                        cellField.vertex = true;
                        //console.log(field);
                        
                        if(field.relationType.length > 0){
                            cellField.setConnectable(true);
                            fieldsMap.set(key,cellField);
                            //console.log(field.value);
                        } else {
                            cellField.setConnectable(false);
                        }                
                        
                        if(field.relationType.length > 0){
                            
                            try {
                            
                                var targetEntity = field.targetEntity;
                                if(!targetEntity){
                                    //Notify invalid field.
                                    graph.removeCells([cellField], true);
                                    return;
                                } 

                                if(field.inversedBy){
                                    
                                    
                                    if(field.unidirectional){
                                    
                                        var obj = {
                                            field:field
                                            ,cellField:cellField
                                            ,entity:entity.name
                                        }
                                        relField.push(obj); 
                                        
                                        var key = entity.name + '-' + field.name + '-' + targetEntity.name;
                                        relFieldMap.set(key,obj);
                                        //console.log(relFieldMap);
                                        
                                        //rels += '['+ eName +']' + '->' + '['+  +']' + "\n";
                                        //console.log('['+ eName +']' + '->' + '['+ fields[k].targetEntity +']' + "\n");
                                    } else {
                                    
                                        var obj = {
                                            field:field
                                            ,cellField:cellField
                                            ,entity:entity.name
                                        }
                                        relField.push(obj); 
                                        //console.log(relFieldMap);
                                        
                                        var key = entity.name + '-' + field.name + '-' + targetEntity.name;
                                        relFieldMap.set(key,obj);
                                        
                                        //rels += '['+ eName +']' + '<->' + '['+ fields[k].targetEntity +']' + "\n";
                                        //console.log('['+ eName +']' + '<->' + '['+ fields[k].targetEntity +']' + "\n");
                                    }
                                } else {
                                
                                    if(field.unidirectional){

                                        var obj = {
                                            field:field
                                            ,cellField:cellField
                                            ,entity:entity.name
                                        }
                                        relField.push(obj); 
                                        
                                        var key = entity.name + '-' + field.name + '-' + targetEntity.name;
                                        relFieldMap.set(key,obj);
                                        
                                    }
                                
                                }                    
                            
                            
                            } catch(e){
                                console.log(e);
                            }
                        
                        }

                        cellField.setId(key);
                        field.cell = cellField;                        
                        entityCell.insert(cellField);                
                        
                    },this);
                    
                    this.layout.execute(defaultGraphParent); 
                    
                },this);
                
                relFieldMap.forEach(function(value, key) {

                    var field = value.field;
                    var f1 = value.cellField;
                    
                    if(field.unidirectional){
                        
                        var e1 = entitiesMap.get(field.targetEntity.name);
                        if(!e1){
                            return;
                        }
                        var edge = graph.insertEdge(defaultGraphParent, null,field.relationType, f1, e1,this.relStyle2);

                    } else {

                        var relationType = field.relationType;
                        if(relationType == 'N .. 1'){
                            relationType = '1 .. N';
                        } else if(relationType == '1 .. N'){
                            relationType = 'N .. 1';
                        } 
                                            
                        var key = field.targetEntity.name + '-' + field.inversedBy;
                        var f2 = fieldsMap.get(key);
                        var edge = graph.insertEdge(defaultGraphParent,null,relationType, f1, f2,this.relStyle1);
                        
                    }
                    
                    // var entity = value.entity;

                    // e1.setConnectable(true);
                    // var e2 = entitiesMap.get(entity);
                    // e2.setConnectable(true);
                    
                    // var v1 = graph.insertVertex(defaultGraphParent, null, field.targetEntity, 20, 20, 150, 200,'table');
                    // var v2 = graph.insertVertex(defaultGraphParent, null, relField[i].entity, 200, 150,150, 200,'table');
                    // graph.insertEdge(defaultGraphParent, null, '', v1, v2);
                    
                    /*

                    
                    //var edge = graph.insertEdge(defaultGraphParent, null,field.relationType, e1, e2);
                    //graph.importCells([edge], 0, 0, defaultGraphParent);
                    */
                    
                    //break;
                    //console.log(edge);        
                
                }, this);                
                
                
            } finally {
                // Updates the display
                graph.getModel().endUpdate();
            }

            this.isInserting = false;          
        
    }
    
    /**
     * Initializes the editor.
     */
    ,init : function()
    {

      if (this._initialized) {
        return;
      }
      
      qx.ui.core.queue.Manager.flush();

      var diagramRootEl = this._dummy.getContentElement().getDomElement();
      console.log(diagramRootEl);
      
      this._diagramRoot = new qx.ui.root.Inline(diagramRootEl);
      this._diagramRoot._setLayout(new qx.ui.layout.Canvas());

      this._diagramRoot.addListener("resize", function(e) {
        var data = e.getData();
        this._dummy.setMinWidth(data.width);
        this._dummy.setMinHeight(data.height);
      }, this);

      this._initialized = true;
    }

    ,addToolbarItem: function(prototype, image)
    {
        
        var me = this;
        var graph = this.graph;
        var toolbar = this.toolbar;
        
        // Function that is executed when the image is dropped on
        // the graph. The cell argument points to the cell under
        // the mousepointer if there is one.
        var funct = function(graph, evt, cell)
        {
        
            if(!me.ast){
                return;
            }
            me.isInserting = true;
            me.ignoreValidator = true;
            
            graph.stopEditing(false);

            var defaultGraphParent = graph.getDefaultParent();
            var model = graph.getModel();
            var pt = graph.getPointForEvent(evt);
            
            var isTable = graph.isSwimlane(prototype);
            var name = null;
            var connectable = isTable;
            
            var obj = null;
            var data = null;
            var parentNode = me.ast;
            var style = me.entityStyle;
            var w = 150;
            var h = 200;
            
            if (!isTable)
            {
                defaultGraphParent = cell;
                var pstate = graph.getView().getState(defaultGraphParent);
                
                if (defaultGraphParent == null || pstate == null || !graph.isSwimlane(defaultGraphParent))
                {
                    mxUtils.alert('Drop target must be a entity');
                    return;
                }
                
                
                pt.x -= pstate.x;
                pt.y -= pstate.y;
                
                //var columnCount = graph.model.getChildCount(defaultGraphParent)+1;
                //name = mxUtils.prompt('Enter name for new column', 'COLUMN'+columnCount);
                
                var entities = me.ast.entities;
                var parentNodeIndex = entities.indexOf(defaultGraphParent.value);
                if(parentNodeIndex != -1){
                    parentNode = entities[parentNodeIndex];
                }

                //var parentNode = cell.value;
                if(parentNode != null){
                
                    w = 25;
                    h = 25;                    
                    //console.log(parentNode.getLabel());
                    ASTHelper.currentObject = parentNode;
                    var name = ASTHelper.generateName('field');
                    data = new civixstudio.domain.Field({name:name});
                    //parentNode.add(fieldNode);
                    style = me.fieldStyle;
                    ASTHelper.push(data);
                    
                }
                
                
            } else {
            
                ASTHelper.currentObject = parentNode;
                var name = ASTHelper.generateName('Entity');
                data = new civixstudio.domain.Entity({name:name});
                ASTHelper.push(data);

            }

            
            if(!data) return;
            
            //graph.setSelectionCells(graph.importCells([vertex], 0, 0, cell));
            //var entityCell = graph.insertVertex(defaultGraphParent,entity,entity, 0, 0, 150, 200,this.entityStyle);
            var newCell = graph.insertVertex(defaultGraphParent,data,data, pt.x, pt.y, w, h,style);
            newCell.setId(data.name);              
            newCell.setValue(data);              
            newCell.setConnectable(connectable);
            data.cell = newCell;
            
            if(!isTable){
                var g = cell.getGeometry();
                g.x -= 5;
                g.y -= 5;
                g.width = 150;
                g.height = 200;
                cell.setGeometry(g);
            }
            
            me.isInserting = false;
        }

        // Creates the image which is used as the drag icon (preview)
        var img = toolbar.addMode(null, image, funct);
        mxUtils.makeDraggable(img, graph, funct);
    }
    
    ,addVertex: function(icon, w, h, style)
    {
        var vertex = new mxCell(null, new mxGeometry(0, 0, w, h), style);
        vertex.setVertex(true);
    
        this.addToolbarItem(vertex, icon);
    }


    /**
     * Sets the caption of the playarea to the given text.
     * @param text {String} The new text of the caption.
     */
    ,updateCaption : function(text) {
      this.__captionLabel.setValue(text);
    }


  },



  /*
   *****************************************************************************
      DESTRUCTOR
   *****************************************************************************
   */

  destruct : function()
  {
    this._disposeObjects(
      "__captionLabel", "__scrollContainer", "_dummy", "_diagramRoot", "_playApp"
    );
  }
});
