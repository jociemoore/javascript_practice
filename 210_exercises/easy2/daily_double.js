// function crunch(str) {
//   var cleanStr = '';
//   var currentLetter;
//   var currentIndex;
//   var nextLetter;

//   for (currentIndex = 0; currentIndex < str.length; currentIndex += 1) {
//     nextLetter = str[currentIndex + 1];
//     currentLetter = str[currentIndex];

//     if (nextLetter !== currentLetter) {
//       cleanStr += currentLetter;
//     }
//   }

//   return cleanStr;
// }



console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""











////////////////////////
// Further Exploration
////////////////////////

// On the last iteration nextLetter is undefined. Without this iteration, the last letter in the str would not be added to the cleanStr.



function crunch(str) {
  var currentLetter;
  var currentIndex;
  var multipleLetters;

  for (currentIndex = 0; currentIndex < str.length; currentIndex += 1) {
    currentLetter = str[currentIndex];
    multipleLetters = new RegExp(currentLetter + '{2}' + currentLetter + '*');

    if (str.match(multipleLetters)) {
      str = str.replace(multipleLetters, currentLetter);
    }
  }

  return str;
}


