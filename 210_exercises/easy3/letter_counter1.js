function wordSizes(str) {
  var words = str.split(' ');
  var sizes = {};

  words.forEach(function (word) {
    var length = word.length;
    if (length === 0) { return; }

    if (sizes[length]) {
      sizes[length] += 1;
    } else {
      sizes[length] = 1;
    }
  });

  return sizes;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "6": 1, "2": 1, "4": 1 }
console.log(wordSizes(''));                                            // {}
