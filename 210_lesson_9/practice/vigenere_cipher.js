/*

INTPUT: string (to encode), string (as a shift)
OUTPUT: string (ciphertext)

KEY WORDS:
- ciphertext
- plaintext
- shift
- keyword

RULES:
- encrypts letters only
- case of the letters in the keyword do not change the shift value
- shift value === index of letter in alphabet
- shift value does not change if the char is not a letter
- the shift values are applied sequentially using caesar's cipher

DATA STRUCTURE: 
- array of chars 
- array of numbers

ALGORITHM:
- convert string to encode to an array of lowercase chars
- convert keyword to an array of numbers
    - convert keyword to an array of chars
        - map over this array and return each letter's index position in the alphabet
        - set the currentKey to the number in the first index position
    - map over the array of chars 
        - if its a letter, return the currentKey
        - reassign currentKey to the next number in the array
            - if its the end of the array, start at index position 0 again
        - if its NOT a letter, return 0
- map over the array of chars
    - pass each char to the caesarCipher with the number in the corresponding index position to the char
- join encrypted chars


MANUAL TEST:
['a', 'p', 'p', 'l', 'e', 's']
bcd
123
['a', 'p', 'p', 'l', 'e', 's']
[1, 2, 3, 1, 2, 3]
['b', 'r', 's', 'm', 'g', 'v']
'brsmgv'

@pp-|+s'
['@', 'p', 'p', '-', '|', '+', 's']
bcd
123
[0, 1, 2, 0, 0, 0, 3 ]
['@', 'q', 'r', '-', '|', '+', 'v']
'@qr-|+v'

*/







const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';


function revertCase(letter, letterCase) {
  if (letterCase === 'uppercase') {
    letter = letter.toUpperCase();
  }

  return letter;
}


function encrypt(newIndex, currentIndex, key, letterCase) {
  while (newIndex > ALPHABET.length - 1) {
    newIndex = (key - ((ALPHABET.length - 1) - currentIndex)) - 1;
    key = newIndex;
  }
  
  return revertCase(ALPHABET[newIndex], letterCase);
}


function caesarEncrypt(str, key) {
  var chars = str.split('');
  var encodedChars;

  encodedChars = chars.map(function (char, index, chars) {
    var letterCase;
    var currentIndex;
    var newIndex;

    letterCase = char.toUpperCase() === char ? 'uppercase' : 'lowercase';
    char = char.toLowerCase();

    if (char.match(/[a-z]/)) {
      currentIndex = ALPHABET.search(char);
      newIndex = currentIndex + key;
      char = encrypt(newIndex, currentIndex, key, letterCase);
    }

    return char;
  });

  return encodedChars.join('');
}


function getNextKeyValue(keyValues, currentKey) {
  var nextIndex;
  var currentIndex = keyValues.findIndex(function (elem) {
    return elem === currentKey;
  });

  if (currentIndex === keyValues.length - 1) {
    nextIndex = 0;
  } else {
    nextIndex = currentIndex + 1;
  }

  return keyValues[nextIndex];
}


function generateKeys(keyword, strChars) {
  keyword = keyword.toLowerCase();
  var keyChars = keyword.split('');
  var keyValues;
  var currentKey;

  keyValues = keyChars.map(function (keyChar) {
    return ALPHABET.search(keyChar);
  });

  currentKey = keyValues[0];

  return strChars.map(function (strChar, index) {
    var key;

    if (strChar.match(/[A-Za-z]/)) {
      key = currentKey;
      currentKey = getNextKeyValue(keyValues, currentKey);
    } else {
      key = 0;
    }

    return key;
  });
}


function vigenereCipher(plaintext, keyword) {
  var chars = plaintext.split('');
  var keys = generateKeys(keyword, chars); 

  chars = chars.map(function (char, index) {
    return caesarEncrypt(char, keys[index]);
  });

  return chars.join('');
}









// GENERIC TEST CASES
console.log(vigenereCipher('apples', 'abc'));  // 'aqrlfu'


console.log(vigenereCipher('aPPles', 'abc'));  // 'aQRlfu'
console.log(vigenereCipher('apples', 'aBc'));  // 'aqrlfu'
console.log(vigenereCipher('14 apples', 'abc'));  // '14 aqrlfu'
console.log(vigenereCipher('@pp-|+s', 'abc'));  // '@pq-|+u'
console.log(vigenereCipher('Dog', 'Rabbit'));  // 'Uoh'


console.log(vigenereCipher('Pineapples don\'t go on pizzas!', 'meat'));    // Bmnxmtpeqw dhz'x gh ar pbldal!




