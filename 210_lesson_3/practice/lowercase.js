function toLowerCase(string) {
  var i; 
  var ASCII_DIFF = 32;
  var UPPER_A_CODE = 65;
  var UPPER_Z_CODE = 90;
  var newString = '';

  for (i = 0; i < string.length; i++) {
    var thisCharCode = string.charCodeAt(i);
    if (thisCharCode >= UPPER_A_CODE && thisCharCode <= UPPER_Z_CODE) {
      newString += String.fromCharCode(thisCharCode + ASCII_DIFF);
    } else {
      newString += string[i];
    }
  }

  return newString;
}


// Comparing letters actually compares ASCII codes so < and > works the same.

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"
