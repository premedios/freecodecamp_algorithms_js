exports.binaryAgent = function (str) {
  var binaryArray = str.split(' ');
  var translatedArray = [];
  for(var i = 0; i < binaryArray.length; i++) {
    translatedArray.push(String.fromCharCode(parseInt(binaryArray[i], 2)));
  }
  return translatedArray.join('');
}
