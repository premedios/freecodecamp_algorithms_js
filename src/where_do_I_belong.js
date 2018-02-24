exports.getIndexToIns = function (arr, num) {
  // Find my place in this sorted array.
  var sortedArray = arr.sort(function(a, b) {
    return a - b;
  });
  for(i = 0; i < sortedArray.length; i++) {
    if (num <= sortedArray[i]) {
      return i;
    }
  }
  return sortedArray.length;
}