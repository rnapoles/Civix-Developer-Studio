function Entity(conf){
    
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
    this.fields = [];
    
    this.parentClass = '';    
    this.interfaces = [];


    
}

Entity.prototype.hasChild = function(name){
    return this.fields.filter(item => item.name == name).length > 0;
};

Entity.prototype.add = function(field){
    return this.fields.push(field);
};

Entity.prototype.generateName = function(name){
    
    var IdNum = 1;
    var text = name + IdNum;

    var c = this.fields.length;
    
    for (var i = 0; i < c; i++) {

        var lbl = this.fields[i].name;
        if(lbl == text){
            i = 0;
            IdNum++;
            text = name + IdNum;
        }
        console.log(text);
    }

    return text;
    
    
}

exports.Entity = Entity;
