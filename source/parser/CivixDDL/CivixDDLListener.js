// Generated from CivixDDL.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TypeNameContext = require('./CivixDDLParser').TypeNameContext;

var Annotation = require('./domain/Annotation').Annotation;
var Extension = require('./domain/Extension').Extension;
var Entity = require('./domain/Entity').Entity;
var Field = require('./domain/Field').Field;


var AST = new Extension();
currentObject = AST;
currentEntity = AST;

// This class defines a complete listener for a parse tree produced by CivixDDLParser.
function CivixDDLListener() {
	
    antlr4.tree.ParseTreeListener.call(this);
    
    this.ast = AST;
    
	return this;
}

CivixDDLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CivixDDLListener.prototype.constructor = CivixDDLListener;

// Enter a parse tree produced by CivixDDLParser#compilationUnit.
CivixDDLListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#compilationUnit.
CivixDDLListener.prototype.exitCompilationUnit = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#extensionDeclaration.
CivixDDLListener.prototype.enterExtensionDeclaration = function(ctx) {
    //
    //let node = ctx.children.filter(child => child.constructor.name == 'QualifiedNameContext');
    //AST.name = node[0].getText();
    AST.name = ctx.qualifiedName().getText();
    
    // let i = 0;
    // ctx.children.forEach(function(child){
        //console.log(i,child.getText(),child.constructor.name);
        // i++;
    // });
    
    //console.log(ctx.qualifiedName().getText());    
    //console.log(ctx.annotation());
};

// Exit a parse tree produced by CivixDDLParser#extensionDeclaration.
CivixDDLListener.prototype.exitExtensionDeclaration = function(ctx) {

    let annotations = ctx.annotations;
    annotations.forEach(function(ann){
        this.ast.annotations.push(ann);
    },this);
    
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
    let terminalNode = ctx.children.filter(child => child.constructor.name == 'TerminalNodeImpl')[0];
    let typeName = ctx.typeName();
    
    currentEntity = new Entity({name:typeName.getText()});
    currentObject = currentEntity;
    currentEntity.start = {y:terminalNode.symbol.line,x:terminalNode.symbol.column};
    currentEntity.end = {y:ctx.stop.line,x:ctx.stop.column};
    
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
    
    let annotations = ctx.annotations;
    annotations.forEach(function(ann){
        currentEntity.annotations.push(ann);
    },this);    
    
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
    let typeName = ctx.typeName();
    
    ctx.annotations = [];
    currentObject = new Field({name:ctx.Identifier().getText()});
    currentObject.type = typeName.getText();
    currentObject.start = {y:typeName.start.line,x:typeName.start.column};
    currentObject.end = {y:ctx.stop.line,x:ctx.stop.column};
    currentEntity.fields.push(currentObject);
    
    //console.log(ctx.Identifier().getText());
    //CivixDDLParser.MUL
    //CivixDDLParser.ADD
    //CivixDDLParser.QUESTION
    
    if(ctx.op != null){
        //console.log(ctx.op.text);//CommonToken
        let text = ctx.op.text;
        if(text == '+'){
            //One or many (1..*) 1-N
        } else if(text == '*'){
            //Zero or many (0..*) 1-N
        } else if(text == '?'){
            // Optional (0..1) 1-1
            currentObject.nullable = true;
        }        
        
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
    

    
};

// Exit a parse tree produced by CivixDDLParser#fieldDeclaration.
CivixDDLListener.prototype.exitFieldDeclaration = function(ctx) {
    
    
    //let variableInitializer = ctx.children.filter(child => child.constructor.name == 'VariableInitializerContext');
    variableInitializer = ctx.variableInitializer();
    if(variableInitializer){
        currentObject.value = variableInitializer.getText();
        currentObject.value = variableInitializer.value;
    }
    
    let annotations = ctx.annotations;
    annotations.forEach(function(ann){
        currentObject.annotations.push(ann);
    },this);      
    
    currentObject = currentEntity;
    
    //console.log('--------------');    
    
};


// Enter a parse tree produced by CivixDDLParser#variableInitializer.
CivixDDLListener.prototype.enterVariableInitializer = function(ctx) {

};

// Exit a parse tree produced by CivixDDLParser#variableInitializer.
CivixDDLListener.prototype.exitVariableInitializer = function(ctx) {
    let child = ctx.children[0];
    ctx.value = child.value;
};


// Enter a parse tree produced by CivixDDLParser#arrayInitializer.
CivixDDLListener.prototype.enterArrayInitializer = function(ctx) {
    ctx.value = [];
};

// Exit a parse tree produced by CivixDDLParser#arrayInitializer.
CivixDDLListener.prototype.exitArrayInitializer = function(ctx) {
    
    let variableInitializer = ctx.variableInitializer();
    
    if(variableInitializer){
        let i = 0;
        variableInitializer.forEach(function(child){
            ctx.value.push(child.value);
            console.log(i,child.value,child.getText(),child.constructor.name);
            i++;
        });
    }
    //console.log(ctx.value);
    
    // let i = 0;
    // ctx.children.forEach(function(child){
        // console.log(i,child.getText(),child.constructor.name);
        // i++;
    // });
    
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
    if(!ctx.parentCtx.annotations){
        ctx.parentCtx.annotations = [];
    }
};

// Exit a parse tree produced by CivixDDLParser#annotation.
CivixDDLListener.prototype.exitAnnotation = function(ctx) {

    /*
        ElementValueContext
        ElementValuePairsContext
    */
    
    //let elementValue = ctx.children.filter(child => child.constructor.name == 'ElementValueContext');
    let elementValue = ctx.elementValue();
    let elementValuePairs = ctx.elementValuePairs();
    
    let ann = new Annotation({name:ctx.annotationName().getText()});

    if(elementValue){
        ann.defaultValue = elementValue.value;
    }
    
    
    if(elementValuePairs){
        
        let i = 0;
        let pairs = elementValuePairs.children.filter(child => child.constructor.name == 'ElementValuePairContext');
        
        pairs.forEach(function(child){
            ann.params.push(child.value);
            //console.log(i,child.getText(),child.constructor.name);
            i++;
        });
        
    }
    
    /*
        ExtensionDeclarationContext
        EntityDeclarationContext
        FieldDeclarationContext
        ElementValueContext
    */
    
    //currentObject.annotations.push(ann);
    ctx.parentCtx.annotations.push(ann);
    //console.log(ann.name,ctx.parentCtx.constructor.name);

};


// Enter a parse tree produced by CivixDDLParser#annotationName.
CivixDDLListener.prototype.enterAnnotationName = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#annotationName.
CivixDDLListener.prototype.exitAnnotationName = function(ctx) {
};


// Enter a parse tree produced by CivixDDLParser#elementValuePairs.
CivixDDLListener.prototype.enterElementValuePairs = function(ctx) {
    ctx.value = [];
};

// Exit a parse tree produced by CivixDDLParser#elementValuePairs.
CivixDDLListener.prototype.exitElementValuePairs = function(ctx) {

    let pairs = ctx.elementValuePair();
    
    let i=0;
    pairs.forEach(function(child){
        ctx.value.push(child.value);
        //console.log(i,child.getText(),child.constructor.name);
        i++;
    });

    //console.log(ctx.value);
    
};


// Enter a parse tree produced by CivixDDLParser#elementValuePair.
CivixDDLListener.prototype.enterElementValuePair = function(ctx) {
    
};

// Exit a parse tree produced by CivixDDLParser#elementValuePair.
CivixDDLListener.prototype.exitElementValuePair = function(ctx) {
    
    let identifier = ctx.Identifier().getText();
    let elementValue = ctx.elementValue().value;
    
    ctx.value = {
        key:identifier
        ,value:elementValue
    };
    
    //console.log(ctx.value);
};


// Enter a parse tree produced by CivixDDLParser#elementValue.
CivixDDLListener.prototype.enterElementValue = function(ctx) {
    ctx.annotations = [];
};

// Exit a parse tree produced by CivixDDLParser#elementValue.
CivixDDLListener.prototype.exitElementValue = function(ctx) {
    
    let child = ctx.children[0];
    if(child.constructor.name == 'AnnotationContext'){
        
        ctx.value = [];
        
        let annotations = ctx.annotations;
        annotations.forEach(function(ann){
            ann.type = 'annotation';
            ctx.value.push(ann);
            //console.log(JSON.stringify(ann, null, '\t'))
        },this);        
        
    } else {
        ctx.value = child.value;
    }
    
    
};


// Enter a parse tree produced by CivixDDLParser#elementValueArrayInitializer.
CivixDDLListener.prototype.enterElementValueArrayInitializer = function(ctx) {
    value = [];
    ctx.value = value;
};

// Exit a parse tree produced by CivixDDLParser#elementValueArrayInitializer.
CivixDDLListener.prototype.exitElementValueArrayInitializer = function(ctx) {
    
    let elementValue = ctx.elementValue();
    
    if(elementValue){
        let i = 0;
        elementValue.forEach(function(child){
            ctx.value.push(child.value);
            //console.log(i,child.value,child.getText(),child.constructor.name);
            i++;
        });
    }
    //console.log(ctx.value);
    
    // let i = 0;
    // ctx.children.forEach(function(child){
        // console.log(i,child.getText(),child.constructor.name);
        // i++;
    // });
    
};

// Enter a parse tree produced by CivixDDLParser#invokeNew.
CivixDDLListener.prototype.enterInvokeNew = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#invokeNew.
CivixDDLListener.prototype.exitInvokeNew = function(ctx) {
    ctx.value = ctx.TypeIdentifier().getText() + '()';
};


// Enter a parse tree produced by CivixDDLParser#literalExpresion.
CivixDDLListener.prototype.enterLiteralExpresion = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#literalExpresion.
CivixDDLListener.prototype.exitLiteralExpresion = function(ctx) {
    ctx.value = ctx.children[0].value;
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
    ctx.value = value;
};


// Enter a parse tree produced by CivixDDLParser#FloatingPointLiteral.
CivixDDLListener.prototype.enterFloatingPointLiteral = function(ctx) {
};

// Exit a parse tree produced by CivixDDLParser#FloatingPointLiteral.
CivixDDLListener.prototype.exitFloatingPointLiteral = function(ctx) {
    value = ctx.getText();
    ctx.value = value;
};


// Enter a parse tree produced by CivixDDLParser#CharacterLiteral.
CivixDDLListener.prototype.enterCharacterLiteral = function(ctx) {
    
};

// Exit a parse tree produced by CivixDDLParser#CharacterLiteral.
CivixDDLListener.prototype.exitCharacterLiteral = function(ctx) {
    value = ctx.getText();
    ctx.value = value;
};


// Enter a parse tree produced by CivixDDLParser#StringLiteral.
CivixDDLListener.prototype.enterStringLiteral = function(ctx) {

};

// Exit a parse tree produced by CivixDDLParser#StringLiteral.
CivixDDLListener.prototype.exitStringLiteral = function(ctx) {
    let text = ctx.getText();
    value = text.slice(1,text.length-1);
    ctx.value = value;
};


// Enter a parse tree produced by CivixDDLParser#BooleanLiteral.
CivixDDLListener.prototype.enterBooleanLiteral = function(ctx) {

};

// Exit a parse tree produced by CivixDDLParser#BooleanLiteral.
CivixDDLListener.prototype.exitBooleanLiteral = function(ctx) {
    value = ctx.getText();
    value = value == 'true' ? true : false;
    ctx.value = value;
};


// Enter a parse tree produced by CivixDDLParser#NullLiteral.
CivixDDLListener.prototype.enterNullLiteral = function(ctx) {
    ctx.value = null;
};

// Exit a parse tree produced by CivixDDLParser#NullLiteral.
CivixDDLListener.prototype.exitNullLiteral = function(ctx) {
    value = ctx.getText();
    ctx.value = value;
};

exports.CivixDDLListener = CivixDDLListener;