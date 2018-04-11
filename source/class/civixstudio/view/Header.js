/**
 * Application header widget.
 */
qx.Class.define("civixstudio.view.Header",
{
  extend : qx.ui.container.Composite,

  construct : function()
  {
    this.base(arguments, new qx.ui.layout.HBox());
    this.setAppearance("app-header");

    // EVIL HACK
    this.addListener("appear", function() {
      var el = this.getContentElement();
      el.setStyle("top", (parseInt(el.getStyle("top")) + 1) + "px");
    }, this);
    // /////////

    var version = new qx.ui.basic.Label('');
    version.setFont("default");

    this.add(new qx.ui.basic.Label('Civix Developer Studio'));
    this.add(new qx.ui.core.Spacer(30));
    this.add(new qx.ui.core.Spacer(), { flex : 1 });
    this.add(version);
  },


  properties : {

  },


  members : {

  }
});
