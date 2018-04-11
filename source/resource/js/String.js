String.prototype.capitalize = function() {
     return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.fullTrim = function() {
     return this.replace(/(\s|\t)+/g,'');
}

String.prototype.lcfirst = function() {
     return this.charAt(0).toLowerCase() + this.slice(1);
}

String.isDigit = function(c){
    return (c >= '0' && c <= '9');
}

String.prototype.ucwords = function(){
    return this.replace(/^(.)|\s(.)/g, function ( $1 ) { return $1.toUpperCase( ); } );
}