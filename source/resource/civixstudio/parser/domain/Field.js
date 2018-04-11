function Field(conf){
    
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
    this.type = (conf.type != undefined) ? conf.type : '';
    this.unique = (conf.unique != undefined) ? conf.unique : false;
    this.nullable = (conf.nullable != undefined) ? conf.nullable : false;
    this.value = (conf.value != undefined) ? conf.value : '';
    this.relationType = (conf.relationType != undefined) ? conf.relationType : '';
    this.unidirectional = (conf.unidirectional != undefined) ? conf.unidirectional : true;
       
    
}

exports.Field = Field;