
function doubleConsonants(str) {
  var chars = str.split('')

  chars = chars.map(function (char) {
    if (char.match(/[^aeiou0-9\W_\s]/i)) {
      char = char + char;
    }

    return char;
  });

  return chars.join('');
}


console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""