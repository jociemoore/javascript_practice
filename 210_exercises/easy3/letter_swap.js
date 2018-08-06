
function swap(str) {
  var words = str.split(' ');

  words = words.map(function (word) {
    var letters = word.split('');
    var temp;
    var first = letters[0];
    var last = letters[letters.length - 1];

    temp = first;
    letters[0] = last;
    letters[letters.length - 1] = temp;

    return letters.join('');
  });

  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
