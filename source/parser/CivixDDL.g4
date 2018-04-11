grammar CivixDDL;

compilationUnit
    :   extensionDeclaration? EOF
    ;

extensionDeclaration
    :   annotation* 'extension' qualifiedName extensionBody
    ;
    
extensionBody
	: '{' entityDeclaration* '}'
	;
    
entityDeclaration
    :  annotation* 'entity' typeName
        ('extends' parentClass)?
        ('implements' implementsTypeList)?
        entityBody
    ;
    
entityBody
    :   '{' entityBodyDeclaration* '}'
    ;
    
entityBodyDeclaration
    :   fieldDeclaration 
    ; 

fieldDeclaration
    :   annotation* typeName op=('?'|'*'|'+')? Identifier ('=' variableInitializer)? ';' // --> | <--> navigation 
    //:   typeName Identifier ';'
    ;


variableInitializer
    :   arrayInitializer
    |   expression
    ;

arrayInitializer
    :   '{' (variableInitializer (',' variableInitializer)* (',')? )? '}'
    ;



parentClass
    :   typeName
    ;

typeName
    :   TypeIdentifier
    |   primitiveType
    ;

implementsTypeList
    :   TypeIdentifier (',' TypeIdentifier)*
    ;
    
    
primitiveType
    : 'bigint'
    | 'blob'
    | 'boolean'
    | 'date'
    | 'datetime'
    | 'decimal'
    | 'float'
    | 'int'
    | 'smallint'
    | 'string'
    | 'time'    
    ;
    
qualifiedName
    :   Identifier ('.' Identifier)*
    ;


// ANNOTATIONS

annotation
    :   '@' annotationName ( '(' ( elementValuePairs | elementValue )? ')' )?
    ;

annotationName : TypeIdentifier ;

elementValuePairs
    :   elementValuePair (',' elementValuePair)*
    ;

elementValuePair
    :   Identifier '=' elementValue
    ;

elementValue
    :   expression
    |   annotation
    |   elementValueArrayInitializer
    ;

elementValueArrayInitializer
    :   '{' (elementValue (',' elementValue)*)? (',')? '}'
    ;
    
    
//Exp

expression
    :   'new' TypeIdentifier arguments   #invokeNew
    |   literal                          #literalExpresion
    ;    

expressionList
    :   expression (',' expression)*
    ;

arguments
    //:   '(' expressionList? ')'
    :   '(' ')'
    ;

literal
    :   IntegerLiteral              #IntegerLiteral
    |   FloatingPointLiteral        #FloatingPointLiteral
    |   CharacterLiteral            #CharacterLiteral
    |   StringLiteral               #StringLiteral
    |   BooleanLiteral              #BooleanLiteral
    |   NullLiteral                 #NullLiteral
    ;                              

//Lexer  

//3.9 Keywords

EXTENSION     : 'extension';
ENTITY        : 'entity';
IMPLEMENTS    : 'implements';
EXTENDS       : 'extends';
NEW           : 'new';

BIGINT      : 'bigint';
BLOB        : 'blob';
BOOLEAN     : 'boolean';
DATE        : 'date';
DATETIME    : 'datetime';
DECIMAL     : 'decimal';
FLOAT       : 'float';
INT         : 'int';
SMALLINT    : 'smallint';
STRING      : 'string';
TIME        : 'time';

//3.10.1 Integer Literals

IntegerLiteral
    :   DecimalIntegerLiteral
    |   HexIntegerLiteral
    |   OctalIntegerLiteral
    |   BinaryIntegerLiteral
    ;

fragment
DecimalIntegerLiteral
    :   DecimalNumeral IntegerTypeSuffix?
    ;

fragment
HexIntegerLiteral
    :   HexNumeral IntegerTypeSuffix?
    ;

fragment
OctalIntegerLiteral
    :   OctalNumeral IntegerTypeSuffix?
    ;

fragment
BinaryIntegerLiteral
    :   BinaryNumeral IntegerTypeSuffix?
    ;

fragment
IntegerTypeSuffix
    :   [lL]
    ;

fragment
DecimalNumeral
    :   '0'
    |   NonZeroDigit (Digits? | Underscores Digits)
    ;

fragment
Digits
    :   Digit (DigitOrUnderscore* Digit)?
    ;

fragment
Digit
    :   '0'
    |   NonZeroDigit
    ;

fragment
NonZeroDigit
    :   [1-9]
    ;

fragment
DigitOrUnderscore
    :   Digit
    |   '_'
    ;

fragment
Underscores
    :   '_'+
    ;

fragment
HexNumeral
    :   '0' [xX] HexDigits
    ;

fragment
HexDigits
    :   HexDigit (HexDigitOrUnderscore* HexDigit)?
    ;

fragment
HexDigit
    :   [0-9a-fA-F]
    ;

fragment
HexDigitOrUnderscore
    :   HexDigit
    |   '_'
    ;

fragment
OctalNumeral
    :   '0' Underscores? OctalDigits
    ;

fragment
OctalDigits
    :   OctalDigit (OctalDigitOrUnderscore* OctalDigit)?
    ;

fragment
OctalDigit
    :   [0-7]
    ;

fragment
OctalDigitOrUnderscore
    :   OctalDigit
    |   '_'
    ;

fragment
BinaryNumeral
    :   '0' [bB] BinaryDigits
    ;

fragment
BinaryDigits
    :   BinaryDigit (BinaryDigitOrUnderscore* BinaryDigit)?
    ;

fragment
BinaryDigit
    :   [01]
    ;

fragment
BinaryDigitOrUnderscore
    :   BinaryDigit
    |   '_'
    ;

//3.10.2 Floating-Point Literals

FloatingPointLiteral
    :   DecimalFloatingPointLiteral
    |   HexadecimalFloatingPointLiteral
    ;

fragment
DecimalFloatingPointLiteral
    :   Digits '.' Digits? ExponentPart? FloatTypeSuffix?
    |   '.' Digits ExponentPart? FloatTypeSuffix?
    |   Digits ExponentPart FloatTypeSuffix?
    |   Digits FloatTypeSuffix
    ;

fragment
ExponentPart
    :   ExponentIndicator SignedInteger
    ;

fragment
ExponentIndicator
    :   [eE]
    ;

fragment
SignedInteger
    :   Sign? Digits
    ;

fragment
Sign
    :   [+-]
    ;

fragment
FloatTypeSuffix
    :   [fFdD]
    ;

fragment
HexadecimalFloatingPointLiteral
    :   HexSignificand BinaryExponent FloatTypeSuffix?
    ;

fragment
HexSignificand
    :   HexNumeral '.'?
    |   '0' [xX] HexDigits? '.' HexDigits
    ;

fragment
BinaryExponent
    :   BinaryExponentIndicator SignedInteger
    ;

fragment
BinaryExponentIndicator
    :   [pP]
    ;

//3.10.3 Boolean Literals

BooleanLiteral
    :   'true'
    |   'false'
    ;

//3.10.4 Character Literals

CharacterLiteral
    :   '\'' SingleCharacter '\''
    |   '\'' EscapeSequence '\''
    ;

fragment
SingleCharacter
    :   ~['\\]
    ;

//3.10.5 String Literals

StringLiteral
    :   '"' StringCharacters? '"'
    ;

fragment
StringCharacters
    :   StringCharacter+
    ;

fragment
StringCharacter
    :   ~["\\]
    |   EscapeSequence
    ;

//3.10.6 Escape Sequences for Character and String Literals

fragment
EscapeSequence
    :   '\\' [btnfr"'\\]
    |   OctalEscape
    |   UnicodeEscape
    ;

fragment
OctalEscape
    :   '\\' OctalDigit
    |   '\\' OctalDigit OctalDigit
    |   '\\' ZeroToThree OctalDigit OctalDigit
    ;

fragment
UnicodeEscape
    :   '\\' 'u' HexDigit HexDigit HexDigit HexDigit
    ;

fragment
ZeroToThree
    :   [0-3]
    ;

//3.10.7 The Null Literal

NullLiteral
    :   'null'
    ;

//3.11 Separators

LPAREN          : '(';
RPAREN          : ')';
LBRACE          : '{';
RBRACE          : '}';
LBRACK          : '[';
RBRACK          : ']';
SEMI            : ';';
COMMA           : ',';
DOT             : '.';  

//3.12 Operators

ASSIGN          : '=';
QUESTION        : '?';
ADD             : '+';
SUB             : '-';
BANG            : '!';
MUL             : '*';

// others
fragment IdSufix
    :   [a-zA-Z0-9]+
    ;

fragment IdTypePrefix
   : 'A' .. 'Z' 
   ;

fragment IdPrefix
   : 'a' .. 'z' 
   ;

TypeIdentifier: IdTypePrefix IdSufix ;    
Identifier: IdPrefix IdSufix ; 

//
// Additional symbols not defined in the lexical specification
//

AT : '@';


WS  :  [ \t\r\n\u000C]+ -> skip
    ;

COMMENT
    :   '/*' .*? '*/' -> channel(HIDDEN)
    ;

LINE_COMMENT
    :   '//' ~[\r\n]* -> channel(HIDDEN)
    ;    
