exports.diffArray = function (arr1, arr2) {
  // Same, same; but different.
  var arr1Filtered = arr1.filter(function(e){return this.indexOf(e)<0;},arr2);
  var arr2Filtered = arr2.filter(function(e){return this.indexOf(e)<0;}, arr1);
  return arr1Filtered.concat(arr2Filtered);
}