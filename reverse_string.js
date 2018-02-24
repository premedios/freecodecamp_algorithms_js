exports.reverseString = function (str) {
  var strArray = str.split('');
  strArray.reverse();
  str = strArray.join('');
  return str;
}
