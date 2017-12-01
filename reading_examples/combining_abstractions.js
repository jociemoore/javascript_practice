// Example 1

var names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

var letters = names.map(function (name) {
  return name[0];
});

// letters is ["H", "G", "K", "H", "K", "K", "O"]

var counts = letters, reduce(function (obj, letter) {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;
  return obj;
}, {});

// counts is { H: 2, G: 1, K: 3, O: 1 }


var letter = Object.keys(counts).reduce(function (lastLetter, currentLetter) {
  if (counts[lastLetter] > counts[currentLetter]) {
    return lastLetter;
  } else {
    return currentLetter;
  }
});

// letter is "K"