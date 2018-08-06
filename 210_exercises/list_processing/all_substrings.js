
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

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]