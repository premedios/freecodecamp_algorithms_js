exports.whatsInAName = function (collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  for(i = 0; i < collection.length; i++) {
    var found = true;
    for(j = 0; j < keys.length; j++) {
      found = (collection[i].hasOwnProperty(keys[j])) && (collection[i][keys[j]] === source[keys[j]]);
    }
    if (found) {
      arr.push(collection[i]);
    }
  }
  
  // Only change code above this line
  return arr;
}