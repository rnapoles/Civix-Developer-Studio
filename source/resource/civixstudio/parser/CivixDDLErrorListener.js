var ErrorListener = importScript('./antlr4/error/ErrorListener').ErrorListener;

function CivixDDLErrorListener(callBack) {
    ErrorListener.call(this);
    var tmp = new Function();
    tmp.name = 'tmp';
    this.callBack = callBack || tmp;
    this.errNumber = 0;
    return this;
}

CivixDDLErrorListener.prototype = Object.create(ErrorListener.prototype);
CivixDDLErrorListener.prototype.constructor = CivixDDLErrorListener;

CivixDDLErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    //console.error("line:" + line + " column:" + column + " " + msg);
    this.errNumber++;
    this.callBack(line, column, msg);
};

exports.CivixDDLErrorListener = CivixDDLErrorListener;
