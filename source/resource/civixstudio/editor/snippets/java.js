define("ace/snippets/java",["require","exports","module"],function(e,t,n){"use strict";t.snippetText='## Annotations\nsnippet mm\n	@ManyToMany\n	${1}\nsnippet mo\n	@ManyToOne\n	${1}\nsnippet om\n	@OneToMany${1:(cascade="ALL")}\n	${2}\nsnippet oo\n	@OneToOne\n	${1}\n##\n## Entity\nsnippet ent\n	entity ${1:EntityName} ${2}\nsnippet ext\n	extension ${1:EntityName} ${2:extends Parent}${3}\nsnippet entex\n	entity ${1:`Filename()`} extends ${2:Parent}\nsnippet entim\n	entity ${1:`Filename()`} implements ${2:Interface}\n##\n## Class Enhancements\nsnippet ext\n	extends \nsnippet imp\n	implements\n##\n## Comments\nsnippet /*\n	/*\n	 * ${1}\n	 */\n##\n',t.scope="java"});
                (function() {
                    window.require(["ace/snippets/java"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            