
function wordCap(str) {
  return str.split(' ').map(function (word) {
    word = word.toLowerCase().split('');
    word[0] = word[0].toUpperCase();
    return word.join('');
  }).join(' ');
}



console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'