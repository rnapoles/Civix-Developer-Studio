// Generated from CivixDDL.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = importScript('./antlr4/index');
var CivixDDLListener = importScript('./CivixDDLListener').CivixDDLListener;
var grammarFileName = "CivixDDL.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003-\u00ed\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0005\u00024\n\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u00039\n\u0003\f\u0003\u000e",
    "\u0003<\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0007\u0004D\n\u0004\f\u0004\u000e\u0004G\u000b",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0007\u0005L\n\u0005\f\u0005",
    "\u000e\u0005O\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005U\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005Y\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0007\u0006_\n\u0006",
    "\f\u0006\u000e\u0006b\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0005\u0007h\n\u0007\u0003\b\u0007\bk\n\b\f\b\u000e\bn",
    "\u000b\b\u0003\b\u0003\b\u0005\br\n\b\u0003\b\u0003\b\u0003\b\u0005",
    "\bw\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0005\t}\n\t\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0007\n\u0083\n\n\f\n\u000e\n\u0086\u000b\n\u0003\n",
    "\u0005\n\u0089\n\n\u0005\n\u008b\n\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0005\f\u0093\n\f\u0003\r\u0003\r\u0003\r\u0007",
    "\r\u0098\n\r\f\r\u000e\r\u009b\u000b\r\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00a2\n\u000f\f\u000f\u000e",
    "\u000f\u00a5\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u00ac\n\u0010\u0003\u0010\u0005\u0010\u00af",
    "\n\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0007\u0012\u00b6\n\u0012\f\u0012\u000e\u0012\u00b9\u000b\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u00c2\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0007\u0015\u00c8\n\u0015\f\u0015\u000e\u0015\u00cb\u000b",
    "\u0015\u0005\u0015\u00cd\n\u0015\u0003\u0015\u0005\u0015\u00d0\n\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u00d8\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0007",
    "\u0017\u00dd\n\u0017\f\u0017\u000e\u0017\u00e0\u000b\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0005\u0019\u00eb\n\u0019\u0003\u0019\u0002",
    "\u0002\u001a\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.0\u0002\u0004\u0004\u0002#$\'\'\u0003\u0002",
    "\b\u0012\u00f6\u00023\u0003\u0002\u0002\u0002\u0004:\u0003\u0002\u0002",
    "\u0002\u0006A\u0003\u0002\u0002\u0002\bM\u0003\u0002\u0002\u0002\n\\",
    "\u0003\u0002\u0002\u0002\fg\u0003\u0002\u0002\u0002\u000el\u0003\u0002",
    "\u0002\u0002\u0010|\u0003\u0002\u0002\u0002\u0012~\u0003\u0002\u0002",
    "\u0002\u0014\u008e\u0003\u0002\u0002\u0002\u0016\u0092\u0003\u0002\u0002",
    "\u0002\u0018\u0094\u0003\u0002\u0002\u0002\u001a\u009c\u0003\u0002\u0002",
    "\u0002\u001c\u009e\u0003\u0002\u0002\u0002\u001e\u00a6\u0003\u0002\u0002",
    "\u0002 \u00b0\u0003\u0002\u0002\u0002\"\u00b2\u0003\u0002\u0002\u0002",
    "$\u00ba\u0003\u0002\u0002\u0002&\u00c1\u0003\u0002\u0002\u0002(\u00c3",
    "\u0003\u0002\u0002\u0002*\u00d7\u0003\u0002\u0002\u0002,\u00d9\u0003",
    "\u0002\u0002\u0002.\u00e1\u0003\u0002\u0002\u00020\u00ea\u0003\u0002",
    "\u0002\u000224\u0005\u0004\u0003\u000232\u0003\u0002\u0002\u000234\u0003",
    "\u0002\u0002\u000245\u0003\u0002\u0002\u000256\u0007\u0002\u0002\u0003",
    "6\u0003\u0003\u0002\u0002\u000279\u0005\u001e\u0010\u000287\u0003\u0002",
    "\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002\u0002:;\u0003",
    "\u0002\u0002\u0002;=\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002",
    "=>\u0007\u0003\u0002\u0002>?\u0005\u001c\u000f\u0002?@\u0005\u0006\u0004",
    "\u0002@\u0005\u0003\u0002\u0002\u0002AE\u0007\u001b\u0002\u0002BD\u0005",
    "\b\u0005\u0002CB\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002E",
    "C\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FH\u0003\u0002\u0002",
    "\u0002GE\u0003\u0002\u0002\u0002HI\u0007\u001c\u0002\u0002I\u0007\u0003",
    "\u0002\u0002\u0002JL\u0005\u001e\u0010\u0002KJ\u0003\u0002\u0002\u0002",
    "LO\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002",
    "\u0002NP\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002PQ\u0007\u0004",
    "\u0002\u0002QT\u0005\u0016\f\u0002RS\u0007\u0006\u0002\u0002SU\u0005",
    "\u0014\u000b\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002",
    "UX\u0003\u0002\u0002\u0002VW\u0007\u0005\u0002\u0002WY\u0005\u0018\r",
    "\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002Z[\u0005\n\u0006\u0002[\t\u0003\u0002\u0002\u0002\\`\u0007",
    "\u001b\u0002\u0002]_\u0005\f\u0007\u0002^]\u0003\u0002\u0002\u0002_",
    "b\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002ac\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002cd\u0007\u001c",
    "\u0002\u0002d\u000b\u0003\u0002\u0002\u0002eh\u0007\u001f\u0002\u0002",
    "fh\u0005\u000e\b\u0002ge\u0003\u0002\u0002\u0002gf\u0003\u0002\u0002",
    "\u0002h\r\u0003\u0002\u0002\u0002ik\u0005\u001e\u0010\u0002ji\u0003",
    "\u0002\u0002\u0002kn\u0003\u0002\u0002\u0002lj\u0003\u0002\u0002\u0002",
    "lm\u0003\u0002\u0002\u0002mo\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002",
    "\u0002oq\u0005\u0016\f\u0002pr\t\u0002\u0002\u0002qp\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002sv\u0007)",
    "\u0002\u0002tu\u0007\"\u0002\u0002uw\u0005\u0010\t\u0002vt\u0003\u0002",
    "\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0007",
    "\u001f\u0002\u0002y\u000f\u0003\u0002\u0002\u0002z}\u0005\u0012\n\u0002",
    "{}\u0005*\u0016\u0002|z\u0003\u0002\u0002\u0002|{\u0003\u0002\u0002",
    "\u0002}\u0011\u0003\u0002\u0002\u0002~\u008a\u0007\u001b\u0002\u0002",
    "\u007f\u0084\u0005\u0010\t\u0002\u0080\u0081\u0007 \u0002\u0002\u0081",
    "\u0083\u0005\u0010\t\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0083",
    "\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084",
    "\u0085\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086",
    "\u0084\u0003\u0002\u0002\u0002\u0087\u0089\u0007 \u0002\u0002\u0088",
    "\u0087\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089",
    "\u008b\u0003\u0002\u0002\u0002\u008a\u007f\u0003\u0002\u0002\u0002\u008a",
    "\u008b\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c",
    "\u008d\u0007\u001c\u0002\u0002\u008d\u0013\u0003\u0002\u0002\u0002\u008e",
    "\u008f\u0005\u0016\f\u0002\u008f\u0015\u0003\u0002\u0002\u0002\u0090",
    "\u0093\u0007(\u0002\u0002\u0091\u0093\u0005\u001a\u000e\u0002\u0092",
    "\u0090\u0003\u0002\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093",
    "\u0017\u0003\u0002\u0002\u0002\u0094\u0099\u0007(\u0002\u0002\u0095",
    "\u0096\u0007 \u0002\u0002\u0096\u0098\u0007(\u0002\u0002\u0097\u0095",
    "\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002\u0002\u0002\u0099\u0097",
    "\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u0019",
    "\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009c\u009d",
    "\t\u0003\u0002\u0002\u009d\u001b\u0003\u0002\u0002\u0002\u009e\u00a3",
    "\u0007)\u0002\u0002\u009f\u00a0\u0007!\u0002\u0002\u00a0\u00a2\u0007",
    ")\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003",
    "\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003",
    "\u0002\u0002\u0002\u00a4\u001d\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003",
    "\u0002\u0002\u0002\u00a6\u00a7\u0007*\u0002\u0002\u00a7\u00ae\u0005",
    " \u0011\u0002\u00a8\u00ab\u0007\u0019\u0002\u0002\u00a9\u00ac\u0005",
    "\"\u0012\u0002\u00aa\u00ac\u0005&\u0014\u0002\u00ab\u00a9\u0003\u0002",
    "\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00af\u0007\u001a",
    "\u0002\u0002\u00ae\u00a8\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002",
    "\u0002\u0002\u00af\u001f\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007(",
    "\u0002\u0002\u00b1!\u0003\u0002\u0002\u0002\u00b2\u00b7\u0005$\u0013",
    "\u0002\u00b3\u00b4\u0007 \u0002\u0002\u00b4\u00b6\u0005$\u0013\u0002",
    "\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b9\u0003\u0002\u0002\u0002",
    "\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002",
    "\u00b8#\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002",
    "\u00ba\u00bb\u0007)\u0002\u0002\u00bb\u00bc\u0007\"\u0002\u0002\u00bc",
    "\u00bd\u0005&\u0014\u0002\u00bd%\u0003\u0002\u0002\u0002\u00be\u00c2",
    "\u0005*\u0016\u0002\u00bf\u00c2\u0005\u001e\u0010\u0002\u00c0\u00c2",
    "\u0005(\u0015\u0002\u00c1\u00be\u0003\u0002\u0002\u0002\u00c1\u00bf",
    "\u0003\u0002\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c2\'",
    "\u0003\u0002\u0002\u0002\u00c3\u00cc\u0007\u001b\u0002\u0002\u00c4\u00c9",
    "\u0005&\u0014\u0002\u00c5\u00c6\u0007 \u0002\u0002\u00c6\u00c8\u0005",
    "&\u0014\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u00cb\u0003",
    "\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003",
    "\u0002\u0002\u0002\u00ca\u00cd\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003",
    "\u0002\u0002\u0002\u00cc\u00c4\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003",
    "\u0002\u0002\u0002\u00cd\u00cf\u0003\u0002\u0002\u0002\u00ce\u00d0\u0007",
    " \u0002\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007",
    "\u001c\u0002\u0002\u00d2)\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007",
    "\u0007\u0002\u0002\u00d4\u00d5\u0007(\u0002\u0002\u00d5\u00d8\u0005",
    ".\u0018\u0002\u00d6\u00d8\u00050\u0019\u0002\u00d7\u00d3\u0003\u0002",
    "\u0002\u0002\u00d7\u00d6\u0003\u0002\u0002\u0002\u00d8+\u0003\u0002",
    "\u0002\u0002\u00d9\u00de\u0005*\u0016\u0002\u00da\u00db\u0007 \u0002",
    "\u0002\u00db\u00dd\u0005*\u0016\u0002\u00dc\u00da\u0003\u0002\u0002",
    "\u0002\u00dd\u00e0\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002",
    "\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df-\u0003\u0002\u0002",
    "\u0002\u00e0\u00de\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007\u0019\u0002",
    "\u0002\u00e2\u00e3\u0007\u001a\u0002\u0002\u00e3/\u0003\u0002\u0002",
    "\u0002\u00e4\u00eb\u0007\u0013\u0002\u0002\u00e5\u00eb\u0007\u0014\u0002",
    "\u0002\u00e6\u00eb\u0007\u0016\u0002\u0002\u00e7\u00eb\u0007\u0017\u0002",
    "\u0002\u00e8\u00eb\u0007\u0015\u0002\u0002\u00e9\u00eb\u0007\u0018\u0002",
    "\u0002\u00ea\u00e4\u0003\u0002\u0002\u0002\u00ea\u00e5\u0003\u0002\u0002",
    "\u0002\u00ea\u00e6\u0003\u0002\u0002\u0002\u00ea\u00e7\u0003\u0002\u0002",
    "\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00ea\u00e9\u0003\u0002\u0002",
    "\u0002\u00eb1\u0003\u0002\u0002\u0002\u001e3:EMTX`glqv|\u0084\u0088",
    "\u008a\u0092\u0099\u00a3\u00ab\u00ae\u00b7\u00c1\u00c9\u00cc\u00cf\u00d7",
    "\u00de\u00ea"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'extension'", "'entity'", "'implements'", 
                     "'extends'", "'new'", "'bigint'", "'blob'", "'boolean'", 
                     "'date'", "'datetime'", "'decimal'", "'float'", "'int'", 
                     "'smallint'", "'string'", "'time'", 'null', 'null', 
                     'null', 'null', 'null', "'null'", "'('", "')'", "'{'", 
                     "'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'?'", 
                     "'+'", "'-'", "'!'", "'*'", 'null', 'null', "'@'" ];

var symbolicNames = [ 'null', "EXTENSION", "ENTITY", "IMPLEMENTS", "EXTENDS", 
                      "NEW", "BIGINT", "BLOB", "BOOLEAN", "DATE", "DATETIME", 
                      "DECIMAL", "FLOAT", "INT", "SMALLINT", "STRING", "TIME", 
                      "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral", 
                      "CharacterLiteral", "StringLiteral", "NullLiteral", 
                      "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", 
                      "RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", "QUESTION", 
                      "ADD", "SUB", "BANG", "MUL", "TypeIdentifier", "Identifier", 
                      "AT", "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "compilationUnit", "extensionDeclaration", "extensionBody", 
                   "entityDeclaration", "entityBody", "entityBodyDeclaration", 
                   "fieldDeclaration", "variableInitializer", "arrayInitializer", 
                   "parentClass", "typeName", "implementsTypeList", "primitiveType", 
                   "qualifiedName", "annotation", "annotationName", "elementValuePairs", 
                   "elementValuePair", "elementValue", "elementValueArrayInitializer", 
                   "expression", "expressionList", "arguments", "literal" ];

function CivixDDLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CivixDDLParser.prototype = Object.create(antlr4.Parser.prototype);
CivixDDLParser.prototype.constructor = CivixDDLParser;

Object.defineProperty(CivixDDLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CivixDDLParser.EOF = antlr4.Token.EOF;
CivixDDLParser.EXTENSION = 1;
CivixDDLParser.ENTITY = 2;
CivixDDLParser.IMPLEMENTS = 3;
CivixDDLParser.EXTENDS = 4;
CivixDDLParser.NEW = 5;
CivixDDLParser.BIGINT = 6;
CivixDDLParser.BLOB = 7;
CivixDDLParser.BOOLEAN = 8;
CivixDDLParser.DATE = 9;
CivixDDLParser.DATETIME = 10;
CivixDDLParser.DECIMAL = 11;
CivixDDLParser.FLOAT = 12;
CivixDDLParser.INT = 13;
CivixDDLParser.SMALLINT = 14;
CivixDDLParser.STRING = 15;
CivixDDLParser.TIME = 16;
CivixDDLParser.IntegerLiteral = 17;
CivixDDLParser.FloatingPointLiteral = 18;
CivixDDLParser.BooleanLiteral = 19;
CivixDDLParser.CharacterLiteral = 20;
CivixDDLParser.StringLiteral = 21;
CivixDDLParser.NullLiteral = 22;
CivixDDLParser.LPAREN = 23;
CivixDDLParser.RPAREN = 24;
CivixDDLParser.LBRACE = 25;
CivixDDLParser.RBRACE = 26;
CivixDDLParser.LBRACK = 27;
CivixDDLParser.RBRACK = 28;
CivixDDLParser.SEMI = 29;
CivixDDLParser.COMMA = 30;
CivixDDLParser.DOT = 31;
CivixDDLParser.ASSIGN = 32;
CivixDDLParser.QUESTION = 33;
CivixDDLParser.ADD = 34;
CivixDDLParser.SUB = 35;
CivixDDLParser.BANG = 36;
CivixDDLParser.MUL = 37;
CivixDDLParser.TypeIdentifier = 38;
CivixDDLParser.Identifier = 39;
CivixDDLParser.AT = 40;
CivixDDLParser.WS = 41;
CivixDDLParser.COMMENT = 42;
CivixDDLParser.LINE_COMMENT = 43;

CivixDDLParser.RULE_compilationUnit = 0;
CivixDDLParser.RULE_extensionDeclaration = 1;
CivixDDLParser.RULE_extensionBody = 2;
CivixDDLParser.RULE_entityDeclaration = 3;
CivixDDLParser.RULE_entityBody = 4;
CivixDDLParser.RULE_entityBodyDeclaration = 5;
CivixDDLParser.RULE_fieldDeclaration = 6;
CivixDDLParser.RULE_variableInitializer = 7;
CivixDDLParser.RULE_arrayInitializer = 8;
CivixDDLParser.RULE_parentClass = 9;
CivixDDLParser.RULE_typeName = 10;
CivixDDLParser.RULE_implementsTypeList = 11;
CivixDDLParser.RULE_primitiveType = 12;
CivixDDLParser.RULE_qualifiedName = 13;
CivixDDLParser.RULE_annotation = 14;
CivixDDLParser.RULE_annotationName = 15;
CivixDDLParser.RULE_elementValuePairs = 16;
CivixDDLParser.RULE_elementValuePair = 17;
CivixDDLParser.RULE_elementValue = 18;
CivixDDLParser.RULE_elementValueArrayInitializer = 19;
CivixDDLParser.RULE_expression = 20;
CivixDDLParser.RULE_expressionList = 21;
CivixDDLParser.RULE_arguments = 22;
CivixDDLParser.RULE_literal = 23;

function CompilationUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_compilationUnit;
    return this;
}

CompilationUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompilationUnitContext.prototype.constructor = CompilationUnitContext;

CompilationUnitContext.prototype.EOF = function() {
    return this.getToken(CivixDDLParser.EOF, 0);
};

CompilationUnitContext.prototype.extensionDeclaration = function() {
    return this.getTypedRuleContext(ExtensionDeclarationContext,0);
};

CompilationUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitCompilationUnit(this);
	}
};




CivixDDLParser.CompilationUnitContext = CompilationUnitContext;

CivixDDLParser.prototype.compilationUnit = function() {

    var localctx = new CompilationUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CivixDDLParser.RULE_compilationUnit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        _la = this._input.LA(1);
        if(_la===CivixDDLParser.EXTENSION || _la===CivixDDLParser.AT) {
            this.state = 48;
            this.extensionDeclaration();
        }

        this.state = 51;
        this.match(CivixDDLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExtensionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_extensionDeclaration;
    return this;
}

ExtensionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtensionDeclarationContext.prototype.constructor = ExtensionDeclarationContext;

ExtensionDeclarationContext.prototype.qualifiedName = function() {
    return this.getTypedRuleContext(QualifiedNameContext,0);
};

ExtensionDeclarationContext.prototype.extensionBody = function() {
    return this.getTypedRuleContext(ExtensionBodyContext,0);
};

ExtensionDeclarationContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

ExtensionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterExtensionDeclaration(this);
	}
};

ExtensionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitExtensionDeclaration(this);
	}
};




CivixDDLParser.ExtensionDeclarationContext = ExtensionDeclarationContext;

CivixDDLParser.prototype.extensionDeclaration = function() {

    var localctx = new ExtensionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CivixDDLParser.RULE_extensionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CivixDDLParser.AT) {
            this.state = 53;
            this.annotation();
            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 59;
        this.match(CivixDDLParser.EXTENSION);
        this.state = 60;
        this.qualifiedName();
        this.state = 61;
        this.extensionBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExtensionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_extensionBody;
    return this;
}

ExtensionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtensionBodyContext.prototype.constructor = ExtensionBodyContext;

ExtensionBodyContext.prototype.entityDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EntityDeclarationContext);
    } else {
        return this.getTypedRuleContext(EntityDeclarationContext,i);
    }
};

ExtensionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterExtensionBody(this);
	}
};

ExtensionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitExtensionBody(this);
	}
};




CivixDDLParser.ExtensionBodyContext = ExtensionBodyContext;

CivixDDLParser.prototype.extensionBody = function() {

    var localctx = new ExtensionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CivixDDLParser.RULE_extensionBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(CivixDDLParser.LBRACE);
        this.state = 67;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CivixDDLParser.ENTITY || _la===CivixDDLParser.AT) {
            this.state = 64;
            this.entityDeclaration();
            this.state = 69;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 70;
        this.match(CivixDDLParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntityDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_entityDeclaration;
    return this;
}

EntityDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntityDeclarationContext.prototype.constructor = EntityDeclarationContext;

EntityDeclarationContext.prototype.typeName = function() {
    return this.getTypedRuleContext(TypeNameContext,0);
};

EntityDeclarationContext.prototype.entityBody = function() {
    return this.getTypedRuleContext(EntityBodyContext,0);
};

EntityDeclarationContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

EntityDeclarationContext.prototype.parentClass = function() {
    return this.getTypedRuleContext(ParentClassContext,0);
};

EntityDeclarationContext.prototype.implementsTypeList = function() {
    return this.getTypedRuleContext(ImplementsTypeListContext,0);
};

EntityDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterEntityDeclaration(this);
	}
};

EntityDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitEntityDeclaration(this);
	}
};




CivixDDLParser.EntityDeclarationContext = EntityDeclarationContext;

CivixDDLParser.prototype.entityDeclaration = function() {

    var localctx = new EntityDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CivixDDLParser.RULE_entityDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CivixDDLParser.AT) {
            this.state = 72;
            this.annotation();
            this.state = 77;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 78;
        this.match(CivixDDLParser.ENTITY);
        this.state = 79;
        this.typeName();
        this.state = 82;
        _la = this._input.LA(1);
        if(_la===CivixDDLParser.EXTENDS) {
            this.state = 80;
            this.match(CivixDDLParser.EXTENDS);
            this.state = 81;
            this.parentClass();
        }

        this.state = 86;
        _la = this._input.LA(1);
        if(_la===CivixDDLParser.IMPLEMENTS) {
            this.state = 84;
            this.match(CivixDDLParser.IMPLEMENTS);
            this.state = 85;
            this.implementsTypeList();
        }

        this.state = 88;
        this.entityBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntityBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_entityBody;
    return this;
}

EntityBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntityBodyContext.prototype.constructor = EntityBodyContext;

EntityBodyContext.prototype.entityBodyDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EntityBodyDeclarationContext);
    } else {
        return this.getTypedRuleContext(EntityBodyDeclarationContext,i);
    }
};

EntityBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterEntityBody(this);
	}
};

EntityBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitEntityBody(this);
	}
};




CivixDDLParser.EntityBodyContext = EntityBodyContext;

CivixDDLParser.prototype.entityBody = function() {

    var localctx = new EntityBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CivixDDLParser.RULE_entityBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(CivixDDLParser.LBRACE);
        this.state = 94;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CivixDDLParser.BIGINT) | (1 << CivixDDLParser.BLOB) | (1 << CivixDDLParser.BOOLEAN) | (1 << CivixDDLParser.DATE) | (1 << CivixDDLParser.DATETIME) | (1 << CivixDDLParser.DECIMAL) | (1 << CivixDDLParser.FLOAT) | (1 << CivixDDLParser.INT) | (1 << CivixDDLParser.SMALLINT) | (1 << CivixDDLParser.STRING) | (1 << CivixDDLParser.TIME) | (1 << CivixDDLParser.SEMI))) !== 0) || _la===CivixDDLParser.TypeIdentifier || _la===CivixDDLParser.AT) {
            this.state = 91;
            this.entityBodyDeclaration();
            this.state = 96;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 97;
        this.match(CivixDDLParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntityBodyDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_entityBodyDeclaration;
    return this;
}

EntityBodyDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntityBodyDeclarationContext.prototype.constructor = EntityBodyDeclarationContext;

EntityBodyDeclarationContext.prototype.fieldDeclaration = function() {
    return this.getTypedRuleContext(FieldDeclarationContext,0);
};

EntityBodyDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterEntityBodyDeclaration(this);
	}
};

EntityBodyDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitEntityBodyDeclaration(this);
	}
};




CivixDDLParser.EntityBodyDeclarationContext = EntityBodyDeclarationContext;

CivixDDLParser.prototype.entityBodyDeclaration = function() {

    var localctx = new EntityBodyDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CivixDDLParser.RULE_entityBodyDeclaration);
    try {
        this.state = 101;
        switch(this._input.LA(1)) {
        case CivixDDLParser.SEMI:
            this.enterOuterAlt(localctx, 1);
            this.state = 99;
            this.match(CivixDDLParser.SEMI);
            break;
        case CivixDDLParser.BIGINT:
        case CivixDDLParser.BLOB:
        case CivixDDLParser.BOOLEAN:
        case CivixDDLParser.DATE:
        case CivixDDLParser.DATETIME:
        case CivixDDLParser.DECIMAL:
        case CivixDDLParser.FLOAT:
        case CivixDDLParser.INT:
        case CivixDDLParser.SMALLINT:
        case CivixDDLParser.STRING:
        case CivixDDLParser.TIME:
        case CivixDDLParser.TypeIdentifier:
        case CivixDDLParser.AT:
            this.enterOuterAlt(localctx, 2);
            this.state = 100;
            this.fieldDeclaration();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_fieldDeclaration;
    this.op = null; // Token
    return this;
}

FieldDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldDeclarationContext.prototype.constructor = FieldDeclarationContext;

FieldDeclarationContext.prototype.typeName = function() {
    return this.getTypedRuleContext(TypeNameContext,0);
};

FieldDeclarationContext.prototype.Identifier = function() {
    return this.getToken(CivixDDLParser.Identifier, 0);
};

FieldDeclarationContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

FieldDeclarationContext.prototype.variableInitializer = function() {
    return this.getTypedRuleContext(VariableInitializerContext,0);
};

FieldDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterFieldDeclaration(this);
	}
};

FieldDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitFieldDeclaration(this);
	}
};




CivixDDLParser.FieldDeclarationContext = FieldDeclarationContext;

CivixDDLParser.prototype.fieldDeclaration = function() {

    var localctx = new FieldDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CivixDDLParser.RULE_fieldDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CivixDDLParser.AT) {
            this.state = 103;
            this.annotation();
            this.state = 108;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 109;
        this.typeName();
        this.state = 111;
        _la = this._input.LA(1);
        if(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (CivixDDLParser.QUESTION - 33)) | (1 << (CivixDDLParser.ADD - 33)) | (1 << (CivixDDLParser.MUL - 33)))) !== 0)) {
            this.state = 110;
            localctx.op = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (CivixDDLParser.QUESTION - 33)) | (1 << (CivixDDLParser.ADD - 33)) | (1 << (CivixDDLParser.MUL - 33)))) !== 0))) {
                localctx.op = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

        this.state = 113;
        this.match(CivixDDLParser.Identifier);
        this.state = 116;
        _la = this._input.LA(1);
        if(_la===CivixDDLParser.ASSIGN) {
            this.state = 114;
            this.match(CivixDDLParser.ASSIGN);
            this.state = 115;
            this.variableInitializer();
        }

        this.state = 118;
        this.match(CivixDDLParser.SEMI);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_variableInitializer;
    return this;
}

VariableInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableInitializerContext.prototype.constructor = VariableInitializerContext;

VariableInitializerContext.prototype.arrayInitializer = function() {
    return this.getTypedRuleContext(ArrayInitializerContext,0);
};

VariableInitializerContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

VariableInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterVariableInitializer(this);
	}
};

VariableInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitVariableInitializer(this);
	}
};




CivixDDLParser.VariableInitializerContext = VariableInitializerContext;

CivixDDLParser.prototype.variableInitializer = function() {

    var localctx = new VariableInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CivixDDLParser.RULE_variableInitializer);
    try {
        this.state = 122;
        switch(this._input.LA(1)) {
        case CivixDDLParser.LBRACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 120;
            this.arrayInitializer();
            break;
        case CivixDDLParser.NEW:
        case CivixDDLParser.IntegerLiteral:
        case CivixDDLParser.FloatingPointLiteral:
        case CivixDDLParser.BooleanLiteral:
        case CivixDDLParser.CharacterLiteral:
        case CivixDDLParser.StringLiteral:
        case CivixDDLParser.NullLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 121;
            this.expression();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_arrayInitializer;
    return this;
}

ArrayInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayInitializerContext.prototype.constructor = ArrayInitializerContext;

ArrayInitializerContext.prototype.variableInitializer = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableInitializerContext);
    } else {
        return this.getTypedRuleContext(VariableInitializerContext,i);
    }
};

ArrayInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterArrayInitializer(this);
	}
};

ArrayInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitArrayInitializer(this);
	}
};




CivixDDLParser.ArrayInitializerContext = ArrayInitializerContext;

CivixDDLParser.prototype.arrayInitializer = function() {

    var localctx = new ArrayInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CivixDDLParser.RULE_arrayInitializer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(CivixDDLParser.LBRACE);
        this.state = 136;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CivixDDLParser.NEW) | (1 << CivixDDLParser.IntegerLiteral) | (1 << CivixDDLParser.FloatingPointLiteral) | (1 << CivixDDLParser.BooleanLiteral) | (1 << CivixDDLParser.CharacterLiteral) | (1 << CivixDDLParser.StringLiteral) | (1 << CivixDDLParser.NullLiteral) | (1 << CivixDDLParser.LBRACE))) !== 0)) {
            this.state = 125;
            this.variableInitializer();
            this.state = 130;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 126;
                    this.match(CivixDDLParser.COMMA);
                    this.state = 127;
                    this.variableInitializer(); 
                }
                this.state = 132;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
            }

            this.state = 134;
            _la = this._input.LA(1);
            if(_la===CivixDDLParser.COMMA) {
                this.state = 133;
                this.match(CivixDDLParser.COMMA);
            }

        }

        this.state = 138;
        this.match(CivixDDLParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParentClassContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_parentClass;
    return this;
}

ParentClassContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParentClassContext.prototype.constructor = ParentClassContext;

ParentClassContext.prototype.typeName = function() {
    return this.getTypedRuleContext(TypeNameContext,0);
};

ParentClassContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterParentClass(this);
	}
};

ParentClassContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitParentClass(this);
	}
};




CivixDDLParser.ParentClassContext = ParentClassContext;

CivixDDLParser.prototype.parentClass = function() {

    var localctx = new ParentClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CivixDDLParser.RULE_parentClass);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.typeName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_typeName;
    return this;
}

TypeNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeNameContext.prototype.constructor = TypeNameContext;

TypeNameContext.prototype.TypeIdentifier = function() {
    return this.getToken(CivixDDLParser.TypeIdentifier, 0);
};

TypeNameContext.prototype.primitiveType = function() {
    return this.getTypedRuleContext(PrimitiveTypeContext,0);
};

TypeNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterTypeName(this);
	}
};

TypeNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitTypeName(this);
	}
};




CivixDDLParser.TypeNameContext = TypeNameContext;

CivixDDLParser.prototype.typeName = function() {

    var localctx = new TypeNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CivixDDLParser.RULE_typeName);
    try {
        this.state = 144;
        switch(this._input.LA(1)) {
        case CivixDDLParser.TypeIdentifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 142;
            this.match(CivixDDLParser.TypeIdentifier);
            break;
        case CivixDDLParser.BIGINT:
        case CivixDDLParser.BLOB:
        case CivixDDLParser.BOOLEAN:
        case CivixDDLParser.DATE:
        case CivixDDLParser.DATETIME:
        case CivixDDLParser.DECIMAL:
        case CivixDDLParser.FLOAT:
        case CivixDDLParser.INT:
        case CivixDDLParser.SMALLINT:
        case CivixDDLParser.STRING:
        case CivixDDLParser.TIME:
            this.enterOuterAlt(localctx, 2);
            this.state = 143;
            this.primitiveType();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImplementsTypeListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_implementsTypeList;
    return this;
}

ImplementsTypeListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImplementsTypeListContext.prototype.constructor = ImplementsTypeListContext;

ImplementsTypeListContext.prototype.TypeIdentifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CivixDDLParser.TypeIdentifier);
    } else {
        return this.getToken(CivixDDLParser.TypeIdentifier, i);
    }
};


ImplementsTypeListContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterImplementsTypeList(this);
	}
};

ImplementsTypeListContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitImplementsTypeList(this);
	}
};




CivixDDLParser.ImplementsTypeListContext = ImplementsTypeListContext;

CivixDDLParser.prototype.implementsTypeList = function() {

    var localctx = new ImplementsTypeListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CivixDDLParser.RULE_implementsTypeList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(CivixDDLParser.TypeIdentifier);
        this.state = 151;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CivixDDLParser.COMMA) {
            this.state = 147;
            this.match(CivixDDLParser.COMMA);
            this.state = 148;
            this.match(CivixDDLParser.TypeIdentifier);
            this.state = 153;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimitiveTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_primitiveType;
    return this;
}

PrimitiveTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveTypeContext.prototype.constructor = PrimitiveTypeContext;


PrimitiveTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitPrimitiveType(this);
	}
};




CivixDDLParser.PrimitiveTypeContext = PrimitiveTypeContext;

CivixDDLParser.prototype.primitiveType = function() {

    var localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, CivixDDLParser.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CivixDDLParser.BIGINT) | (1 << CivixDDLParser.BLOB) | (1 << CivixDDLParser.BOOLEAN) | (1 << CivixDDLParser.DATE) | (1 << CivixDDLParser.DATETIME) | (1 << CivixDDLParser.DECIMAL) | (1 << CivixDDLParser.FLOAT) | (1 << CivixDDLParser.INT) | (1 << CivixDDLParser.SMALLINT) | (1 << CivixDDLParser.STRING) | (1 << CivixDDLParser.TIME))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QualifiedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_qualifiedName;
    return this;
}

QualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QualifiedNameContext.prototype.constructor = QualifiedNameContext;

QualifiedNameContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CivixDDLParser.Identifier);
    } else {
        return this.getToken(CivixDDLParser.Identifier, i);
    }
};


QualifiedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterQualifiedName(this);
	}
};

QualifiedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitQualifiedName(this);
	}
};




CivixDDLParser.QualifiedNameContext = QualifiedNameContext;

CivixDDLParser.prototype.qualifiedName = function() {

    var localctx = new QualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CivixDDLParser.RULE_qualifiedName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.match(CivixDDLParser.Identifier);
        this.state = 161;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CivixDDLParser.DOT) {
            this.state = 157;
            this.match(CivixDDLParser.DOT);
            this.state = 158;
            this.match(CivixDDLParser.Identifier);
            this.state = 163;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnnotationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_annotation;
    return this;
}

AnnotationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnnotationContext.prototype.constructor = AnnotationContext;

AnnotationContext.prototype.annotationName = function() {
    return this.getTypedRuleContext(AnnotationNameContext,0);
};

AnnotationContext.prototype.elementValuePairs = function() {
    return this.getTypedRuleContext(ElementValuePairsContext,0);
};

AnnotationContext.prototype.elementValue = function() {
    return this.getTypedRuleContext(ElementValueContext,0);
};

AnnotationContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterAnnotation(this);
	}
};

AnnotationContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitAnnotation(this);
	}
};




CivixDDLParser.AnnotationContext = AnnotationContext;

CivixDDLParser.prototype.annotation = function() {

    var localctx = new AnnotationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, CivixDDLParser.RULE_annotation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(CivixDDLParser.AT);
        this.state = 165;
        this.annotationName();
        this.state = 172;
        _la = this._input.LA(1);
        if(_la===CivixDDLParser.LPAREN) {
            this.state = 166;
            this.match(CivixDDLParser.LPAREN);
            this.state = 169;
            switch (this._input.LA(1)) {
            case CivixDDLParser.Identifier:
            	this.state = 167;
            	this.elementValuePairs();
            	break;
            case CivixDDLParser.NEW:
            case CivixDDLParser.IntegerLiteral:
            case CivixDDLParser.FloatingPointLiteral:
            case CivixDDLParser.BooleanLiteral:
            case CivixDDLParser.CharacterLiteral:
            case CivixDDLParser.StringLiteral:
            case CivixDDLParser.NullLiteral:
            case CivixDDLParser.LBRACE:
            case CivixDDLParser.AT:
            	this.state = 168;
            	this.elementValue();
            	break;
            case CivixDDLParser.RPAREN:
            	break;
            default:
            	throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 171;
            this.match(CivixDDLParser.RPAREN);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnnotationNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_annotationName;
    return this;
}

AnnotationNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnnotationNameContext.prototype.constructor = AnnotationNameContext;

AnnotationNameContext.prototype.TypeIdentifier = function() {
    return this.getToken(CivixDDLParser.TypeIdentifier, 0);
};

AnnotationNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterAnnotationName(this);
	}
};

AnnotationNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitAnnotationName(this);
	}
};




CivixDDLParser.AnnotationNameContext = AnnotationNameContext;

CivixDDLParser.prototype.annotationName = function() {

    var localctx = new AnnotationNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, CivixDDLParser.RULE_annotationName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(CivixDDLParser.TypeIdentifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementValuePairsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_elementValuePairs;
    return this;
}

ElementValuePairsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementValuePairsContext.prototype.constructor = ElementValuePairsContext;

ElementValuePairsContext.prototype.elementValuePair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementValuePairContext);
    } else {
        return this.getTypedRuleContext(ElementValuePairContext,i);
    }
};

ElementValuePairsContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterElementValuePairs(this);
	}
};

ElementValuePairsContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitElementValuePairs(this);
	}
};




CivixDDLParser.ElementValuePairsContext = ElementValuePairsContext;

CivixDDLParser.prototype.elementValuePairs = function() {

    var localctx = new ElementValuePairsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CivixDDLParser.RULE_elementValuePairs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.elementValuePair();
        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CivixDDLParser.COMMA) {
            this.state = 177;
            this.match(CivixDDLParser.COMMA);
            this.state = 178;
            this.elementValuePair();
            this.state = 183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementValuePairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_elementValuePair;
    return this;
}

ElementValuePairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementValuePairContext.prototype.constructor = ElementValuePairContext;

ElementValuePairContext.prototype.Identifier = function() {
    return this.getToken(CivixDDLParser.Identifier, 0);
};

ElementValuePairContext.prototype.elementValue = function() {
    return this.getTypedRuleContext(ElementValueContext,0);
};

ElementValuePairContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterElementValuePair(this);
	}
};

ElementValuePairContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitElementValuePair(this);
	}
};




CivixDDLParser.ElementValuePairContext = ElementValuePairContext;

CivixDDLParser.prototype.elementValuePair = function() {

    var localctx = new ElementValuePairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CivixDDLParser.RULE_elementValuePair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.match(CivixDDLParser.Identifier);
        this.state = 185;
        this.match(CivixDDLParser.ASSIGN);
        this.state = 186;
        this.elementValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_elementValue;
    return this;
}

ElementValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementValueContext.prototype.constructor = ElementValueContext;

ElementValueContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ElementValueContext.prototype.annotation = function() {
    return this.getTypedRuleContext(AnnotationContext,0);
};

ElementValueContext.prototype.elementValueArrayInitializer = function() {
    return this.getTypedRuleContext(ElementValueArrayInitializerContext,0);
};

ElementValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterElementValue(this);
	}
};

ElementValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitElementValue(this);
	}
};




CivixDDLParser.ElementValueContext = ElementValueContext;

CivixDDLParser.prototype.elementValue = function() {

    var localctx = new ElementValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, CivixDDLParser.RULE_elementValue);
    try {
        this.state = 191;
        switch(this._input.LA(1)) {
        case CivixDDLParser.NEW:
        case CivixDDLParser.IntegerLiteral:
        case CivixDDLParser.FloatingPointLiteral:
        case CivixDDLParser.BooleanLiteral:
        case CivixDDLParser.CharacterLiteral:
        case CivixDDLParser.StringLiteral:
        case CivixDDLParser.NullLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this.expression();
            break;
        case CivixDDLParser.AT:
            this.enterOuterAlt(localctx, 2);
            this.state = 189;
            this.annotation();
            break;
        case CivixDDLParser.LBRACE:
            this.enterOuterAlt(localctx, 3);
            this.state = 190;
            this.elementValueArrayInitializer();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementValueArrayInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_elementValueArrayInitializer;
    return this;
}

ElementValueArrayInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementValueArrayInitializerContext.prototype.constructor = ElementValueArrayInitializerContext;

ElementValueArrayInitializerContext.prototype.elementValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementValueContext);
    } else {
        return this.getTypedRuleContext(ElementValueContext,i);
    }
};

ElementValueArrayInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterElementValueArrayInitializer(this);
	}
};

ElementValueArrayInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitElementValueArrayInitializer(this);
	}
};




CivixDDLParser.ElementValueArrayInitializerContext = ElementValueArrayInitializerContext;

CivixDDLParser.prototype.elementValueArrayInitializer = function() {

    var localctx = new ElementValueArrayInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CivixDDLParser.RULE_elementValueArrayInitializer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(CivixDDLParser.LBRACE);
        this.state = 202;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CivixDDLParser.NEW) | (1 << CivixDDLParser.IntegerLiteral) | (1 << CivixDDLParser.FloatingPointLiteral) | (1 << CivixDDLParser.BooleanLiteral) | (1 << CivixDDLParser.CharacterLiteral) | (1 << CivixDDLParser.StringLiteral) | (1 << CivixDDLParser.NullLiteral) | (1 << CivixDDLParser.LBRACE))) !== 0) || _la===CivixDDLParser.AT) {
            this.state = 194;
            this.elementValue();
            this.state = 199;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 195;
                    this.match(CivixDDLParser.COMMA);
                    this.state = 196;
                    this.elementValue(); 
                }
                this.state = 201;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
            }

        }

        this.state = 205;
        _la = this._input.LA(1);
        if(_la===CivixDDLParser.COMMA) {
            this.state = 204;
            this.match(CivixDDLParser.COMMA);
        }

        this.state = 207;
        this.match(CivixDDLParser.RBRACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.TypeIdentifier = function() {
    return this.getToken(CivixDDLParser.TypeIdentifier, 0);
};

ExpressionContext.prototype.arguments = function() {
    return this.getTypedRuleContext(ArgumentsContext,0);
};

ExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitExpression(this);
	}
};




CivixDDLParser.ExpressionContext = ExpressionContext;

CivixDDLParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CivixDDLParser.RULE_expression);
    try {
        this.state = 213;
        switch(this._input.LA(1)) {
        case CivixDDLParser.NEW:
            this.enterOuterAlt(localctx, 1);
            this.state = 209;
            this.match(CivixDDLParser.NEW);
            this.state = 210;
            this.match(CivixDDLParser.TypeIdentifier);
            this.state = 211;
            this.arguments();
            break;
        case CivixDDLParser.IntegerLiteral:
        case CivixDDLParser.FloatingPointLiteral:
        case CivixDDLParser.BooleanLiteral:
        case CivixDDLParser.CharacterLiteral:
        case CivixDDLParser.StringLiteral:
        case CivixDDLParser.NullLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 212;
            this.literal();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitExpressionList(this);
	}
};




CivixDDLParser.ExpressionListContext = ExpressionListContext;

CivixDDLParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CivixDDLParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.expression();
        this.state = 220;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CivixDDLParser.COMMA) {
            this.state = 216;
            this.match(CivixDDLParser.COMMA);
            this.state = 217;
            this.expression();
            this.state = 222;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_arguments;
    return this;
}

ArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentsContext.prototype.constructor = ArgumentsContext;


ArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterArguments(this);
	}
};

ArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitArguments(this);
	}
};




CivixDDLParser.ArgumentsContext = ArgumentsContext;

CivixDDLParser.prototype.arguments = function() {

    var localctx = new ArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CivixDDLParser.RULE_arguments);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(CivixDDLParser.LPAREN);
        this.state = 224;
        this.match(CivixDDLParser.RPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CivixDDLParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;


 
LiteralContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StringLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringLiteralContext.prototype = Object.create(LiteralContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

CivixDDLParser.StringLiteralContext = StringLiteralContext;

StringLiteralContext.prototype.StringLiteral = function() {
    return this.getToken(CivixDDLParser.StringLiteral, 0);
};
StringLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterStringLiteral(this);
	}
};

StringLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitStringLiteral(this);
	}
};


function FloatingPointLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FloatingPointLiteralContext.prototype = Object.create(LiteralContext.prototype);
FloatingPointLiteralContext.prototype.constructor = FloatingPointLiteralContext;

CivixDDLParser.FloatingPointLiteralContext = FloatingPointLiteralContext;

FloatingPointLiteralContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(CivixDDLParser.FloatingPointLiteral, 0);
};
FloatingPointLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterFloatingPointLiteral(this);
	}
};

FloatingPointLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitFloatingPointLiteral(this);
	}
};


function BooleanLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BooleanLiteralContext.prototype = Object.create(LiteralContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;

CivixDDLParser.BooleanLiteralContext = BooleanLiteralContext;

BooleanLiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(CivixDDLParser.BooleanLiteral, 0);
};
BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitBooleanLiteral(this);
	}
};


function NullLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NullLiteralContext.prototype = Object.create(LiteralContext.prototype);
NullLiteralContext.prototype.constructor = NullLiteralContext;

CivixDDLParser.NullLiteralContext = NullLiteralContext;

NullLiteralContext.prototype.NullLiteral = function() {
    return this.getToken(CivixDDLParser.NullLiteral, 0);
};
NullLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterNullLiteral(this);
	}
};

NullLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitNullLiteral(this);
	}
};


function IntegerLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntegerLiteralContext.prototype = Object.create(LiteralContext.prototype);
IntegerLiteralContext.prototype.constructor = IntegerLiteralContext;

CivixDDLParser.IntegerLiteralContext = IntegerLiteralContext;

IntegerLiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(CivixDDLParser.IntegerLiteral, 0);
};
IntegerLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterIntegerLiteral(this);
	}
};

IntegerLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitIntegerLiteral(this);
	}
};


function CharacterLiteralContext(parser, ctx) {
	LiteralContext.call(this, parser);
    LiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CharacterLiteralContext.prototype = Object.create(LiteralContext.prototype);
CharacterLiteralContext.prototype.constructor = CharacterLiteralContext;

CivixDDLParser.CharacterLiteralContext = CharacterLiteralContext;

CharacterLiteralContext.prototype.CharacterLiteral = function() {
    return this.getToken(CivixDDLParser.CharacterLiteral, 0);
};
CharacterLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.enterCharacterLiteral(this);
	}
};

CharacterLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof CivixDDLListener ) {
        listener.exitCharacterLiteral(this);
	}
};



CivixDDLParser.LiteralContext = LiteralContext;

CivixDDLParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CivixDDLParser.RULE_literal);
    try {
        this.state = 232;
        switch(this._input.LA(1)) {
        case CivixDDLParser.IntegerLiteral:
            localctx = new IntegerLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 226;
            this.match(CivixDDLParser.IntegerLiteral);
            break;
        case CivixDDLParser.FloatingPointLiteral:
            localctx = new FloatingPointLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 227;
            this.match(CivixDDLParser.FloatingPointLiteral);
            break;
        case CivixDDLParser.CharacterLiteral:
            localctx = new CharacterLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 228;
            this.match(CivixDDLParser.CharacterLiteral);
            break;
        case CivixDDLParser.StringLiteral:
            localctx = new StringLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 229;
            this.match(CivixDDLParser.StringLiteral);
            break;
        case CivixDDLParser.BooleanLiteral:
            localctx = new BooleanLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 230;
            this.match(CivixDDLParser.BooleanLiteral);
            break;
        case CivixDDLParser.NullLiteral:
            localctx = new NullLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 231;
            this.match(CivixDDLParser.NullLiteral);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.CivixDDLParser = CivixDDLParser;
