function anagram(word, list) {
  var targetLetters = word.split('');

  var byLength = function (str) {
    return word.length === str.length;
  };

  var byLetter = function (str) {
    var testLetters = str.split('');
    var matchedLetters = [];

    return testLetters.every(function (letter) {
      if (targetLetters.includes(letter) && 
          !matchedLetters.includes(letter)) {
        matchedLetters.push(letter);
        return true;
      } else {
        return false;
      }
    });
  };

  return list.filter(byLength).filter(byLetter);
}


anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']); // [ "enlist", "inlets" ]