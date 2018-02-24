exports.palindrome = function (str) {
  // Good luck!
  var newString = str.replace(/[^A-Za-z0-9]/g, '');
  console.log(newString);
  var strArray = newString.toLowerCase().split('');
  var mid = strArray.length / 2;
  for(i = 0; i <= mid; i++) {
    if (strArray[i] !== strArray[strArray.length - 1 - i]) {
      return false;
    }
  }
  return true;
}