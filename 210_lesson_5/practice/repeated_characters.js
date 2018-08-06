function repeatedCharacters(str) {
  var repeats = {};
  str = str.toLowerCase().split('');
  
  str.forEach(function (letter) {
    if (repeats[letter]) {
      repeats[letter] += 1;
    } else {
      repeats[letter] = 1;
    }
  });

  for (char in repeats) {
    if (repeats[char] === 1) {
      delete repeats[char];
    }
  }

  return repeats;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }



