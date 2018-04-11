/**
 * The civixstudio toolbar containing all buttons and menus.
 *
 * @asset(civixstudio/images/*)
 */
qx.Class.define("civixstudio.view.Toolbar",
{
  extend : qx.ui.toolbar.ToolBar,


  construct : function()
  {
    this.base(arguments);

    // run button
    var runButton = new qx.ui.toolbar.Button(
      this.tr("Generate extension"), "icon/22/actions/system-run.png"
    );

    this.add(runButton);
    runButton.setToolTipText(this.tr("Generate extension"));
    runButton.addListener("execute", function() {
      this.fireEvent("run");
    }, this);

  },


  events :
  {
    /**
     * Fired if the run button is pressed.
     */
    "run" : "qx.event.type.Event"
    
  },


  members :
  {
    _visible:true
  }

});
