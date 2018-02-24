exports.sumAll = function (arr) {
  var sortedArr = arr.sort(function(a,b) {
    return a-b;
  });
  var newArray = [];
  for(i = sortedArr[0]; i <= sortedArr[1]; i++) {
    newArray.push(i);
  }
  
  return newArray.reduce(function(sum, number) {
    return sum + number;
  });
}