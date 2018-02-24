exports.convertHTML = function (str) {
  // &colon;&rpar;
  var regEx = /[&"'<>]/gi;
  var matchArray = [];
  var newString = [];
  matchArray = str.match(regEx);
  if (matchArray !== null) {
    for(i = 0; i < matchArray.length; i++) {
      var entity = "";
      switch (matchArray[i]) {
        case "&":
          entity = "&amp;";
          break;
        case '"':
          entity = "&quot;";
          break;
        case "'":
          entity = "&apos;";
          break;
        case "<":
          entity = "&lt;";
          break;
        case ">":
          entity = "&gt;";
          break;
      }
      str = str.replace(matchArray[i], entity);
    }
  }

  return str;
}
