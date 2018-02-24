exports.chunkArrayInGroups = function (arr, size) {
  // Break it up.
  var newArray = [];
  var arrayChunk = [];
  
  for(i = 0; i < arr.length; i++) {
    var difference = (arr.length % size === 0 ? arr.length - i : arr.length - 1 + 1);
    arrayChunk.push(arr[i]);
    console.log(arr.length - i);
    if( (difference >= size) && (i+1) % size === 0) {
      newArray.push(arrayChunk);
      arrayChunk = [];
    }
  }
  if(arrayChunk != []) {
    newArray.push(arrayChunk);
  }
  
  return newArray;
}
