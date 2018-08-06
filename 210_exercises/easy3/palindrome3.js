function isPalindrome(str) {
  var reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}


// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true



///////////////////////
// Further Exploration
///////////////////////

console.log(isPalindromicNumber(00034543));       // false


// A number with leading zeros is interpretted as an octal number I believe. As an input, I don't think there is a way around it.

