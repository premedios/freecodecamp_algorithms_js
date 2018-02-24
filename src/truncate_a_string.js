exports.truncateString = function (str, num) {
  // Clear out that junk in your trunk
  
  if (str.length > num) {
      if (num <= 3) {
        return str.slice(0, num) + '...';  
      } else {
        return str.slice(0, num-3) + '...';
      }
      
  }
  return str;
}
