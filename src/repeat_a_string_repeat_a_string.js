exports.repeatStringNumTimes = function (str, num) {
  // repeat after me
  var newStr = '';
  for(i = 1; i <= num; i++) {
    newStr = newStr.concat(str);
  }
  return newStr;
}
