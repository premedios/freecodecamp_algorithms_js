exports.titleCase = function (str) {
  var strArray = str.split(' ');
  for (i = 0; i < strArray.length; i++) {
    var newString = strArray[i][0].toUpperCase() + strArray[i].substring(1).toLowerCase();
    console.log(newString);
    strArray[i] = newString;
  }
  return strArray.join(' ');
}

