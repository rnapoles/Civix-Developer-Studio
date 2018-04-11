const Scope = require('./Scope').Scope;

class BaseScope extends Scope {
    
    //enclosingScope = null; // null if global (outermost) scope
    
    constructor(enclosingScope) { 
        this.enclosingScope = enclosingScope;  
        this.symbols = new Map();  
    }

    resolve(name) {
        s = this.symbols.get(name);
        if ( s!=null ) return s;
        // if not here, check any enclosing scope
        if ( this.enclosingScope != null ) return this.enclosingScope.resolve(name);
        return null; // not found
    }

    define(sym) {
        this.symbols.set(sym.name, sym);
        sym.scope = this; // track the scope in each symbol
    }

    getEnclosingScope() { return this.enclosingScope; }

    toString() { 
    
        let keys = [];
        for (var key of this.symbols.keys()) {
          keys.push(key);
        }
    
        return this.getScopeName() + ":" + keys.toString(); 
    }
}

exports.BaseScope = BaseScope;
