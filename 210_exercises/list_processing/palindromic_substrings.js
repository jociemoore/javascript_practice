function substringsAtStart(str) {
  return str.split('').map(function(letter, index) {
    return str.slice(0, index + 1);
  });
}

function substrings(str) {
  var letters = str.split('');

  letters = letters.map(function (_, index) {
    return substringsAtStart(str.slice(index));
  });

  return letters.reduce(function (a,b) {
    return a.concat(b);
  });
}

function isPalindrome(str) {
  var reverseStr = str.split('').reverse().join('');
  return str === reverseStr && str.length > 1;
}

function palindromes(str) {
  var allSubstrings = substrings(str);

  return allSubstrings.filter(function (substr) {
    return isPalindrome(substr);
  });
}






console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
