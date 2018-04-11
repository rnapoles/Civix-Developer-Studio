const Scope = require('./Scope').Scope;
const BaseScope = require('./BaseScope').BaseScope;

class GlobalScope extends BaseScope {
    constructor(enclosingScope) { super(enclosingScope); }
    getScopeName() { return "globals"; }
}

exports.GlobalScope = GlobalScope;
