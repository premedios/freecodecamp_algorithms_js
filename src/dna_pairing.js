exports.pairElement = function (str) {
  var dnaPairs = [];
  for(i = 0; i < str.length; i++) {
    var dnaPair = [str.charAt(i)];
    switch (str.charAt(i)) {
      case "T":
        dnaPair.push("A");
        break;
      case "A":
        dnaPair.push("T");
        break;
      case "C":
        dnaPair.push("G");
        break;
      case "G":
        dnaPair.push("C");
    }
    dnaPairs.push(dnaPair);
  }
  return dnaPairs;
}