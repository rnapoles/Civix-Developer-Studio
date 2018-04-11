// Generated from CivixDDL.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = importScript('./antlr4/index');
var TypeNameContext = importScript('./CivixDDLParser').TypeNameContext;

var Annotation = importScript('./domain/Annotation').Annotation;
var Extension = importScript('./domain/Extension').Extension;
var Entity = importScript('./domain/Entity').Entity;
var Field = importScript('./domain/Field').Field;


AST = null;

// This class defines a complete listener for a parse tree produced by CivixDDLParser.
function CivixDDLListener() {
    
    AST = new Extension();
    currentObject = AST;
    currentEntity = AST; 
    this.ast = AST;    
    
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CivixDDLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CivixDDLListener.prototype.constructor = CivixDDLListener;

// Enter a parse tree produced by CivixDDLParser#compilationUnit.
CivixDDLListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#compilationUnit.
CivixDDLListener.prototype.exitCompilationUnit = function(ctx) {
    
    AST.entities.forEach(function(entity){
        let fields = entity.fields.filter(field => field.targetEntity != '');
        fields.forEach(function(field){
           var e1 = AST.entities.filter(e => e.name == field.targetEntity);
           if(e1.length){
               field.targetEntity = e1[0];
           }
        });
    });
    //
    
};


// Enter a parse tree produced by CivixDDLParser#extensionDeclaration.
CivixDDLListener.prototype.enterExtensionDeclaration = function(ctx) {
    //
    //let node = ctx.children.filter(child => child.constructor.name == 'QualifiedNameContext');
    //AST.name = node[0].getText();
    AST.name = ctx.qualifiedName().getText();
    
    // let i = 0;
    // ctx.children.forEach(function(child){
        //// console.log(i,child.getText(),child.constructor.name);
        // console.log(i,child.constructor.name);
        // i++;
    // });
    
    //console.log(ctx.qualifiedName().getText());
    
    //let annotations = ctx.annotation();//es un array;
    // annotations.forEach(function(ann){
        ////console.log(i,child.getText(),child.constructor.name);
        // console.log(ann.getText());
    // });
    
    //console.log(ctx.annotation());
};

// Exit a parse tree produced by CivixDDLParser#extensionDeclaration.
CivixDDLListener.prototype.exitExtensionDeclaration = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#extensionBody.
CivixDDLListener.prototype.enterExtensionBody = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#extensionBody.
CivixDDLListener.prototype.exitExtensionBody = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#entityDeclaration.
CivixDDLListener.prototype.enterEntityDeclaration = function(ctx) {
    
    //let typeNameNode = ctx.children.filter(child => child.constructor.name == 'TypeNameContext')[0];
    //let parentClassNode = ctx.children.filter(child => child.constructor.name == 'ParentClassContext');
    //let parentClassNode = ctx.children.filter(child => child.constructor.name == 'ImplementsTypeListContext');

    //let identifier = ctx.Identifier();
    let identifier = ctx.children.filter(child => child.constructor.name == 'TerminalNodeImpl')[0];
    let typeName = ctx.typeName();
        
    currentEntity = new Entity({name:typeName.getText()});
    currentObject = currentEntity;
    currentObject.start = {y:identifier.symbol.line,x:identifier.symbol.column};
    currentObject.end = {y:ctx.stop.line,x:ctx.stop.column};    
    
    let parentClassNode = ctx.parentClass();
    if(parentClassNode){
        currentObject.parentClass = parentClassNode.getText();
    }
    
    AST.entities.push(currentObject);
    
    //console.dir(node[0]);
};

// Exit a parse tree produced by CivixDDLParser#entityDeclaration.
CivixDDLListener.prototype.exitEntityDeclaration = function(ctx) {

    //AST.name = ctx.children[1].getText();
    //console.log(ctx.children.length);
    //console.log(ctx.children[1].getText());
    //console.log(ctx.children[0].constructor.name);
    
    /*
    
        0 'AnnotationContext'
        1 'AnnotationContext'
        2 'AnnotationContext'
        3 'TerminalNodeImpl'
        4 'TypeNameContext'
        5 'TerminalNodeImpl'
        6 'ParentClassContext'
        7 'EntityBodyContext'    
    
    */
    
    // let i = 0;
    // ctx.children.forEach(function(child){
        // console.log(i,child.getText(),child.constructor.name);
        ////console.log(i,child.constructor.name);
        // i++;
    // });
    
    //console.log('--------------');
    
    currentEntity = null;
    currentObject = AST;
};


// Enter a parse tree produced by CivixDDLParser#entityBody.
CivixDDLListener.prototype.enterEntityBody = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#entityBody.
CivixDDLListener.prototype.exitEntityBody = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#entityBodyDeclaration.
CivixDDLListener.prototype.enterEntityBodyDeclaration = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#entityBodyDeclaration.
CivixDDLListener.prototype.exitEntityBodyDeclaration = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#modifier.
CivixDDLListener.prototype.enterModifier = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#modifier.
CivixDDLListener.prototype.exitModifier = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#fieldDeclaration.
CivixDDLListener.prototype.enterFieldDeclaration = function(ctx) {
    
    //let typeNode = ctx.children.filter(child => child.constructor.name == 'TypeNameContext')[0];
    //let terminalNodes = ctx.children.filter(child => child.constructor.name == 'TerminalNodeImpl');
    
    var identifier = ctx.Identifier();
    var id = identifier.getText();
    var typeName = ctx.typeName();
    
    currentObject = new Field({name:id});
    currentObject.type = typeName.getText();
    currentObject.start = {y:typeName.start.line,x:typeName.start.column};
    currentObject.end = {y:ctx.stop.line,x:ctx.stop.column};

    
    //console.log(ctx.Identifier().getText());
    //CivixDDLParser.MUL
    //CivixDDLParser.ADD
    //CivixDDLParser.QUESTION
    
    let ord = currentObject.type.charCodeAt(0);
    let isRel = ord >= 65 && ord <= 90 ? true : false;    
    //let isRel = currentObject.type[0].match(/[A-Z]/) != null;
    //console.log(id,currentObject.type[0],ord,isRel);
        
    if(ctx.op != null){
        
        //console.log(ctx.op.text);//CommonToken
        let text = ctx.op.text;
        
        if(text == '+'){
            
            //One or many (1..*) 1-N
            if(isRel) {
                currentObject.relationType = '1 .. N'
            }
            
        } else if(text == '*'){
            
            //Zero or many (0..*) 1-N
            if(isRel) {
                currentObject.relationType = '1 .. N'
            }
            
        } else if(text == '?'){
            
            // Optional (0..1) 1-1
            currentObject.nullable = true;
            
            if(isRel) {
                currentObject.relationType = '1 .. 1'
            }
            
        }

    } 

    if(isRel){
        if(currentObject.relationType == ''){
            currentObject.relationType = '1 .. 1';
        }
        currentObject.targetEntity = typeName.getText();
    }
        
    /*
    let i = 0;
    terminalNodes.forEach(function(child){
        
        //console.log(i,child.getText(),child.constructor.name);
        //console.log(i,child.constructor.name);
        
        let text = child.getText();
        if(text.length > 1){
            currentObject.name = text;
        } else {
            
            if(text == '+'){
                //One or many (1..*) 1-N
            } else if(text == '*'){
                //Zero or many (0..*) 1-N
            } else if(text == '?'){
                // Optional (0..1) 1-1
                currentObject.nullable = true;
            }
            
        }
        
        i++;
    });
    */
    
    currentEntity.fields.push(currentObject);
    
};

// Exit a parse tree produced by CivixDDLParser#fieldDeclaration.
CivixDDLListener.prototype.exitFieldDeclaration = function(ctx) {
    
    
    //let variableInitializer = ctx.children.filter(child => child.constructor.name == 'VariableInitializerContext');
    variableInitializer = ctx.variableInitializer();
    if(variableInitializer){
        currentObject.value = variableInitializer.getText();
        currentObject.value = value;
    }
    
    currentObject = currentEntity;
    
    //console.log('--------------');    
    
};


// Enter a parse tree produced by CivixDDLParser#variableInitializer.
CivixDDLListener.prototype.enterVariableInitializer = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#variableInitializer.
CivixDDLListener.prototype.exitVariableInitializer = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#arrayInitializer.
CivixDDLListener.prototype.enterArrayInitializer = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#arrayInitializer.
CivixDDLListener.prototype.exitArrayInitializer = function(ctx) {
};

// Enter a parse tree produced by CivixDDLParser#parentClass.
CivixDDLListener.prototype.enterParentClass = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#parentClass.
CivixDDLListener.prototype.exitParentClass = function(ctx) {
};

// Enter a parse tree produced by CivixDDLParser#typeName.
CivixDDLListener.prototype.enterTypeName = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#typeName.
CivixDDLListener.prototype.exitTypeName = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#implementsTypeList.
CivixDDLListener.prototype.enterImplementsTypeList = function(ctx) {
    
    let i = 0;
    ctx.children.forEach(function(child){
        //console.log(i,child.getText(),child.constructor.name);
        //console.log(i,child.constructor.name);
        if(child.getText() != ','){
            currentObject.interfaces.push(child.getText())
        }
        i++;
    });
    
};

// Exit a parse tree produced by CivixDDLParser#implementsTypeList.
CivixDDLListener.prototype.exitImplementsTypeList = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#primitiveType.
CivixDDLListener.prototype.enterPrimitiveType = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#primitiveType.
CivixDDLListener.prototype.exitPrimitiveType = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#qualifiedName.
CivixDDLListener.prototype.enterQualifiedName = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#qualifiedName.
CivixDDLListener.prototype.exitQualifiedName = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#annotation.
CivixDDLListener.prototype.enterAnnotation = function(ctx) {
    //console.log('enterAnnotation');
    //console.log(ctx.children.length);
    //console.log(ctx.children[1].getText());  
};

// Exit a parse tree produced by CivixDDLParser#annotation.
CivixDDLListener.prototype.exitAnnotation = function(ctx) {

    /*
        ElementValueContext
        ElementValuePairsContext
    */
    
    //let elementValue = ctx.children.filter(child => child.constructor.name == 'ElementValueContext');
    let elementValue = ctx.elementValue();
    
    let ann = new Annotation({name:ctx.annotationName().getText()});

    if(elementValue){
        ann.defaultValue = value;
    }
    
    
    currentObject.annotations.push(ann);

};


// Enter a parse tree produced by CivixDDLParser#annotationName.
CivixDDLListener.prototype.enterAnnotationName = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#annotationName.
CivixDDLListener.prototype.exitAnnotationName = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#elementValuePairs.
CivixDDLListener.prototype.enterElementValuePairs = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#elementValuePairs.
CivixDDLListener.prototype.exitElementValuePairs = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#elementValuePair.
CivixDDLListener.prototype.enterElementValuePair = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#elementValuePair.
CivixDDLListener.prototype.exitElementValuePair = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#elementValue.
CivixDDLListener.prototype.enterElementValue = function(ctx) {

};

// Exit a parse tree produced by CivixDDLParser#elementValue.
CivixDDLListener.prototype.exitElementValue = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#elementValueArrayInitializer.
CivixDDLListener.prototype.enterElementValueArrayInitializer = function(ctx) {
    value = [];
};

// Exit a parse tree produced by CivixDDLParser#elementValueArrayInitializer.
CivixDDLListener.prototype.exitElementValueArrayInitializer = function(ctx) {
    
    let elementValue = ctx.elementValue();
    
    // let i = 0;
    // ctx.children.forEach(function(child){
        // console.log(i,child.getText(),child.constructor.name);
        // i++;
    // });
    
};


// Enter a parse tree produced by CivixDDLParser#expression.
CivixDDLListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#expression.
CivixDDLListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#expressionList.
CivixDDLListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#expressionList.
CivixDDLListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#arguments.
CivixDDLListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#arguments.
CivixDDLListener.prototype.exitArguments = function(ctx) {
};

// Enter a parse tree produced by CivixDDLParser#IntegerLiteral.
CivixDDLListener.prototype.enterIntegerLiteral = function(ctx) {

};

// Exit a parse tree produced by CivixDDLParser#IntegerLiteral.
CivixDDLListener.prototype.exitIntegerLiteral = function(ctx) {
    value = ctx.getText();
};


// Enter a parse tree produced by CivixDDLParser#FloatingPointLiteral.
CivixDDLListener.prototype.enterFloatingPointLiteral = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#FloatingPointLiteral.
CivixDDLListener.prototype.exitFloatingPointLiteral = function(ctx) {
    value = ctx.getText();
};


// Enter a parse tree produced by CivixDDLParser#CharacterLiteral.
CivixDDLListener.prototype.enterCharacterLiteral = function(ctx) {
    
};

// Exit a parse tree produced by CivixDDLParser#CharacterLiteral.
CivixDDLListener.prototype.exitCharacterLiteral = function(ctx) {
    value = ctx.getText();
};


// Enter a parse tree produced by CivixDDLParser#StringLiteral.
CivixDDLListener.prototype.enterStringLiteral = function(ctx) {

};

// Exit a parse tree produced by CivixDDLParser#StringLiteral.
CivixDDLListener.prototype.exitStringLiteral = function(ctx) {
    let text = ctx.getText();
    value = text.slice(1,text.length-1);
};


// Enter a parse tree produced by CivixDDLParser#BooleanLiteral.
CivixDDLListener.prototype.enterBooleanLiteral = function(ctx) {

};

// Exit a parse tree produced by CivixDDLParser#BooleanLiteral.
CivixDDLListener.prototype.exitBooleanLiteral = function(ctx) {
    value = ctx.getText();
    value = value == 'true' ? true : false;
};


// Enter a parse tree produced by CivixDDLParser#NullLiteral.
CivixDDLListener.prototype.enterNullLiteral = function(ctx) {

};

// Exit a parse tree produced by CivixDDLParser#NullLiteral.
CivixDDLListener.prototype.exitNullLiteral = function(ctx) {
    value = ctx.getText();
};

exports.CivixDDLListener = CivixDDLListener;