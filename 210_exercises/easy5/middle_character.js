
function centerOf(str) {
  var midChars;
  var midPoint = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    midChars = str.substr(midPoint - 1, 2);
  } else {
    midChars = str[midPoint];
  }

  return midChars;
}


console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un"
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));                // "x"