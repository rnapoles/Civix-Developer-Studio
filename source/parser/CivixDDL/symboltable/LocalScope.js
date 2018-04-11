const Scope = require('./Scope').Scope;
const BaseScope = require('./BaseScope').BaseScope;

class LocalScope extends BaseScope {
    constructor(parent) { super(parent); }
    getScopeName() { return "locals"; }
}

exports.LocalScope = LocalScope;
