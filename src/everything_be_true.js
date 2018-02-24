exports.truthCheck = function (collection, pre) {
  // Is everyone being true?
  for(var i = 0; i < collection.length; i++) {
    var booleanValue = Boolean(collection[i][pre]);
    if (!booleanValue) {
      return booleanValue;
    }
  }
  return true;
}
