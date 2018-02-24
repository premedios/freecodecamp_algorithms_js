exports.translatePigLatin = function (str) {
  var vowels = "aeiou";
  var piglatin = "";
  var piglatinEnd = "";
  
  if (vowels.indexOf(str.charAt(0)) !== -1) {
    return str + "way";  
  } else {
    piglatinEnd += str.charAt(0);
    for(i = 1; i < str.length; i++) {
      if (vowels.indexOf(str.charAt(i)) === -1) {
        piglatinEnd += str.charAt(i);
        piglatin = str.substr(i+1);
      } else {
        piglatin = str.substr(i);
        break;
      }
    }
    piglatinEnd += "ay";
  }
  
  return piglatin + piglatinEnd;
}
