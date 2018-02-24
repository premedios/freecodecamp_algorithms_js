exports.uniteUnique = function (arr) {
  var joinedArray = arr;
  var filteredArray = [];

  if (arguments.length > 1) {
    for(i = 1; i < arguments.length; i++) {
      joinedArray = joinedArray.concat(arguments[i]);
    }
  }
  
  filteredArray = joinedArray.filter(function(value, index, self) {
    return self.indexOf(value) === index;
  });
  
  return filteredArray;
}