
function substringsAtStart(str) {
  return str.split('').map(function(letter, index) {
    return str.slice(0, index + 1);
  });
}


console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
