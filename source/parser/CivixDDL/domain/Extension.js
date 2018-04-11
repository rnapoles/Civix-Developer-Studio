function Extension(conf) {

    conf = conf || {};
    
    var _name = (conf.name != undefined) ? conf.name : '';

    Object.defineProperty(this, 'name', {

        get: function() {
          return _name;
        }

        ,set: function(value) {
          _name = value;
        }
        ,enumerable:true
        ,configurable:true
    });
    
    this.annotations = [];
    this.entities = [];

}

exports.Extension = Extension;