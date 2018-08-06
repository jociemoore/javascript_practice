
function repeater(str) {
  var letters = str.split('')

  letters = letters.map(function (letter) {
    return letter + letter;
  });

  return letters.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
