exports.sym = function (args) {
  var symDifference = [];
  for(var i = 0; i < arguments.length-1; i++) {
    var array1 = (symDifference.length === 0 ? arguments[i] : symDifference);
    array1 = array1.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    });
    var array2 = arguments[i+1];
    array2 = array2.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    });
    var arrayDiff1 = array1.filter(function(obj) { return array2.indexOf(obj) === -1; });
    var arrayDiff2 = array2.filter(function(obj) { return array1.indexOf(obj) === -1; });
    symDifference = arrayDiff1;
    symDifference = symDifference.concat(arrayDiff2);
  }
  return symDifference.sort();
}
