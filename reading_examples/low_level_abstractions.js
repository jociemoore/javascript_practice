// my usAllUnique solution

function isAllUnique(string) {
  string = string.toLowerCase().replace(/\s+/g, '');
  var testedLetters = [];

  return string.split('').every(function (char) {
    var isUnique = !testedLetters.includes(char);
    testedLetters.push(char);
    return isUnique;
  });
}



isAllUnique('The quick brown fox jumped over a lazy dog');  // false
isAllUnique('123,456,789');                                 // false
isAllUnique('The big apple');                               // false
isAllUnique('The big apPlE');                               // false
isAllUnique('!@#$%^&*()');                                  // true
isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true












// Example

function isAllUnique(string) {
  var seen = {};
  var lowerCasedString = string.toLowerCase();
  var i;

  for (i = 0; i < lowerCasedString.length; i += 1) {
    if (lowerCasedString[i] === ' ') {
      continue;
    }

    if (seen[lowerCasedString[i]]) {
      return false;
    } else {
      seen[lowerCasedString[i]] = true;
    }
  }

  return true;
}


