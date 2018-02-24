exports.fearNotLetter = function (str) {
  var lastCharCode = str.charCodeAt(0);
  for(i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) - lastCharCode > 1) {
      return String.fromCharCode(str.charCodeAt(i) -1);
    } else {
      lastCharCode = str.charCodeAt(i);
    }
  }
  return;
}