exports.bouncer = function (arr) {
  var noFalsies = [];
  for(i = 0; i < arr.length; i++) {
    var booleanValue = Boolean(arr[i]);
    if(booleanValue) {
      noFalsies.push(arr[i]);
    }
  }
  return noFalsies;
}