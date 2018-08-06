function isPalindrome(str) {
  var reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}


function isRealPalindrome(str) {
  str = str.replace(/[\W_]*/g, '').toLowerCase();
  return isPalindrome(str);
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
console.log(isRealPalindrome('123_a32_1'));           // true