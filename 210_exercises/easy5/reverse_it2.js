
function reverseWords(str) {
  var words = str.split(' ');

  words = words.map(function (currentWord) {
    if (currentWord.length >= 5) {
      currentWord = currentWord.split('').reverse().join('');
    }

    return currentWord;
  });

  return words.join(' ');
}


console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"