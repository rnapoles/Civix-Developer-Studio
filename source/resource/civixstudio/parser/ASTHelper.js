ASTHelper = {};
ASTHelper.ast = null;
ASTHelper.currentObject = null;
ASTHelper.generateName = function(name){
    
    var IdNum = 1;
    var text = name + IdNum;

    if(!ASTHelper.ast){
        return text;
    }
    
    if(!ASTHelper.currentObject){
        ASTHelper.currentObject = ASTHelper.ast;
    }
    
    var currentObject = ASTHelper.currentObject;
    var children = null;
    
    if(currentObject.entities){
        children = currentObject.entities;
    } else {
        children = currentObject.fields;
    }
    

    var c = children.length;
    
    for (var i = 0; i < c; i++) {

        var lbl = children[i].name;
        if(lbl == text){
            i = 0;
            IdNum++;
            text = name + IdNum;
        }

    }

    return text;
    
    
}

ASTHelper.push = function(node){
    
    if(!ASTHelper.currentObject){
        return;
    }

    var currentObject = ASTHelper.currentObject;
    var children = null;
    
    if(currentObject.entities){
        children = currentObject.entities;
    } else {
        children = currentObject.fields;
    }
    
    children.push(node);
    
}

exports.ASTHelper = ASTHelper;