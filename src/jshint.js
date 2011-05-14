var JSHINT = (function () {
  'use strict';

  return function (source) {
    var sourceFile = new traceur.syntax.SourceFile('jshint', source),
        parser     = new traceur.syntax.Parser({}, sourceFile);

    window.parser = parser;
    return parser.parseProgram(true);
  };
}());