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

Extension.prototype.hasChild = function(name){
    return this.entities.filter(item => item.name == name).length > 0;
};

Extension.prototype.generateName = function(name){
    
    var IdNum = 1;
    var text = name + IdNum;

    var c = this.entities.length;
    
    for (var i = 0; i < c; i++) {

        var lbl = this.entities[i].name;
        if(lbl == text){
            i = 0;
            IdNum++;
            text = name + IdNum;
        }

    }

    return text;
    
    
}

exports.Extension = Extension;