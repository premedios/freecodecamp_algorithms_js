exports.sumFibs = function (num) {
  var sum = 2;
  if (num < 1) {
    return num;
  } else {
    var prevPrevNum = 1;
    var prevNum = 1;
    while(prevNum <= num) {
      var temp = prevNum;
      prevNum += prevPrevNum;
      prevPrevNum = temp;
      if (prevNum <= num && prevNum % 2 !== 0) {
        sum += prevNum;
      }
    }
  }
  return sum;
}
