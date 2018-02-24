exports.dropElements = function (arr, func) {
  // Drop them elements.
  var filteredArray = arr.filter(func);
  var slicedArray = (filteredArray.length > 0 ? arr.slice(arr.indexOf(filteredArray[0])) : []);
  return slicedArray;
}