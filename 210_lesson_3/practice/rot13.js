function rot13(string) {
  var LOOKUP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(2);
  var OFFSET = 13;
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    var currentChar = string[i];
    var newChar = '';

    if (currentChar.match(/[A-Za-z]/)) {
      var currentIndex = LOOKUP.indexOf(currentChar.toUpperCase());
      var newIndex = currentIndex + OFFSET;
      newChar = LOOKUP[newIndex];

      if (currentChar.match(/[a-z]/)) {
        newChar = newChar.toLowerCase();
      }
    } else {
      newChar = currentChar;
    }

    newString += newChar;
  }

  return newString;
}









console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.


console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.