exports.largestOfFour = function (arr) {
  // You can do this!
  var largestNumberArray = [];
  
  for(i = 0; i < arr.length; i++) {
    var sortedArray = arr[i].sort(function(a,b) {
      return b < a;    
    });
    largestNumberArray.push(sortedArray[sortedArray.length -1]);
  }
  return largestNumberArray;
}