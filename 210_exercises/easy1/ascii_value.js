function asciiValue(str) {
  var letters = str.split('');

  return letters.reduce(function (sum, letter) {
    return sum + letter.charCodeAt(0);
  }, 0);
}


console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0