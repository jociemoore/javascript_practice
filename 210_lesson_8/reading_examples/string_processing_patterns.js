// Example 1 - Capitalize first letter of every word

var text = 'The quick brown fox jumps over the lazy dog.';

function capitalize(text) {
  // declare an array
  var newTextArray;

  // break original string into words
  var textArray = text.split(' ');

  // list processing - transformation
  newTextArray = textArray.map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });

  // join together
  return newTextArray.join(' ');
}

capitalize(text);
// "The Quick Brown Fox Jumps Over The Lazy Dog."











// Example 2 - Count how often a word occurs (case-insensitive)

var text = 'The quick brown fox jumps over the lazy dog.';

function countWordInText(word, text) {
  // `replace` creates a new string
  var textArray = text.replace(/[^a-z]/ig, '').split(' ');

  // filter/select only the needed words
  return textArray.filter(function (wordsInText) {
    return word.toLowerCase() === wordsInText.toLowerCase();
  });
}

countWordInText('the', text);     // 2
countWordInText('dog', text);     // 1





