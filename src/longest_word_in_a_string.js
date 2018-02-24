exports.findLongestWord = function (str) {
  var strArray = str.split(' ');
  strArray.sort(function(str1, str2) {
    return str2.length < str1.length;
  });
  return strArray[strArray.length - 1].length;
}
