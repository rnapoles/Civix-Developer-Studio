const fs = require('fs');
var antlr4 = require('antlr4/index');
var CivixDDLErrorListener = require('./CivixDDLErrorListener').CivixDDLErrorListener;
var CivixDDLLexer = require('./CivixDDLLexer').CivixDDLLexer;
var CivixDDLParser = require('./CivixDDLParser').CivixDDLParser;
var CivixDDLListener = require('./CivixDDLListener').CivixDDLListener;

var input = '';

fs.readFile('demo.civ', (err, data) => {
  
  if (err) throw err;
  
  //console.log(data.toString());
  input = data.toString();
  

    var chars = new antlr4.InputStream(input);

    var err = 0;
    var annotations = [];
    var errListener = new CivixDDLErrorListener(function(line, column, msg){
        err++;
        //console.log('--err--');
        
        annotations.push({
                row: line - 1,
                column: column,
                text: msg,
                type: "error"
        });
        
    });


    var lexer = new CivixDDLLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(errListener);

    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new CivixDDLParser(tokens);

    parser.buildParseTrees = true;

    parser.removeErrorListeners();
    parser.addErrorListener(errListener);

    var tree = parser.compilationUnit();

    var listener = new CivixDDLListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

    if(errListener.errNumber == 0)
        console.log(JSON.stringify(CivixDDLListener.ast, null, '\t'));
  
  
});

