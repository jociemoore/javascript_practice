function wordSizes(str) {
  var words = str.split(' ');
  var sizes = {};

  words.forEach(function (word) {
    var cleanWord = word.replace(/[^A-Za-z]+/g, '');
    var length = cleanWord.length;
    if (length === 0) { return; }

    if (sizes[length]) {
      sizes[length] += 1;
    } else {
      sizes[length] = 1;
    }
  });

  return sizes;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
