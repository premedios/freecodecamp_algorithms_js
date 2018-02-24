exports.rot13 = function (str) { // LBH QVQ VG!
  var strArray = str.split('');
  var decipherArray = [];
  for(i=0; i<strArray.length; i++) {
    for(j = 0; j < strArray[i].length; j++) {
      var charCode = strArray[i].charCodeAt(j);
      var newCharCode = 0;
      if (strArray[i][j] >= 'A' && strArray[i][j] <= 'Z') {
        newCharCode = (charCode - 13 < 'A'.charCodeAt(0) ? charCode + 13 : charCode - 13);
        decipherArray.push(newCharCode);
      } else {
        decipherArray.push(charCode);
      }
      
    }
    str = String.fromCharCode.apply(null, decipherArray);
  }
  return str;
}