exports.convertToRoman = function (num) {
  var romans = [
     ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
     ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
     ["C", "CC", "CCC", "CD", "D", "DC", "DCC","DCCC", "CM"],
     ["M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM", "MMMMMMMM", "MMMMMMMMM"]
     ];
   var numArr = String(num).split('');
   var romanNumeral = "";
   for(i = 0; i < numArr.length; i++) {
     if (Number(numArr[i]) != 0) {
     romanNumeral += romans[numArr.length - i - 1][Number(numArr[i]) - 1];
     }
   }
  return romanNumeral;
 }