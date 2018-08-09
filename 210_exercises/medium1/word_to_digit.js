var numberLookup = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

function wordToDigit(string) {
  return string.split(' ')
               .map(convertNumbers)
               .join(' ');
}

function convertNumbers(word) {
  var punc = findPunctuation(word)[1];
  word = findPunctuation(word)[0];

  return numberLookup[word] ? numberLookup[word] + punc : word + punc;
}

function findPunctuation(word) {
  if (word.match(/(\W|_)/)) {
    var index = word.search(/(\W|_)/);
    var punc = word.substr(index);
    word = word.substr(0,index);
    return [word, punc];
  } else {
    return [word, ''];
  }
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit("See you at nine!!!"));
// "See you a 9!!!"

console.log(wordToDigit("Password is four_ five_ six_."));
// "Password is 4_ 5_ 6_."

console.log(wordToDigit('The weight is done.'));
// "The weight is done."




