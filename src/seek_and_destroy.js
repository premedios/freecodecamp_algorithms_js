exports.destroyer = function (arr) {
  // Remove all the values
  var newArray = Array.prototype.slice.call(arguments, 1);
  var filteredArray = arr.filter(function(e){return this.indexOf(e)<0;},newArray);
  return filteredArray;
}
