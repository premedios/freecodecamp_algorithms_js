exports.mutation = function (arr) {
  var stringArray1 = arr[0].split('').map(letter => letter.toLowerCase());
  var stringArray2 = arr[1].split('').map(letter => letter.toLowerCase());
  
  for(i = 0; i < stringArray2.length; i++) {
    if (stringArray1.indexOf(stringArray2[i]) === -1) {
      return false;
    }
  }
  return true;
}