exports.myReplace = function (str, before, after) {
  var newAfter = "";
  
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    newAfter = after.charAt(0).toUpperCase() + after.substr(1);
  } else {
    newAfter = after;
  }
  
  var newString = str.replace(str.substr(str.indexOf(before), before.length), newAfter);
  return newString;
}