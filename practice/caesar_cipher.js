/*

INPUT: string, integer
OUTPUT: string

RULES: 
- only letters
- uppercase and lowercase
- case of unencrypted letter matches the case of the encrypted letter
- non-letters remain as is
- encrypted letter is the letter at the the index of given letter + key
- if the encrypted letter index position exceeds the that of the last letter in the alphabet, then you go the index position 0 + (whatever is remaining in key count)

KEY WORDS:
- cipher
- letter/character
- plaintext
- ciphertext
- alphabet
- number
- key
- shift
- encrypt
- decode

DATA STRUCTURE: 
- array of chars
- alphabet data: strings as constants

ALGORITHM:
- convert given string to array of chars using split('')
- map over each char in the given string
  - check and store case
  - concert to lowercase
  - if char is a letter, encode and return it 
    - get the index of currentLetter in the alphabet
    - add currentIndex + key
    - find the letter at the newIndex position
      - looping
        - if newIndex > (alphbet.length - 1), then get the letter at the following position:
          - (key - ((alphabet.length - 1) - currentIndex)) - 1
    - convert back to original case
  - otherwise return the char as is
- join the chars in the array

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










// TEST CASES

// simple shift
console.log(caesarEncrypt('z', 1));       // "a"
console.log(caesarEncrypt('A', 26));       // "A"
console.log(caesarEncrypt('A', 53));       // "B"


console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('a', 3));       // "d"
console.log(caesarEncrypt('Y', 3));       // "B"
console.log(caesarEncrypt(' ', 3));       // " "
console.log(caesarEncrypt('-', 3));       // "-"
console.log(caesarEncrypt('2', 3));       // "2"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// mixed case and chars
console.log(caesarEncrypt('CaRRoT', 3)); // FdUUrW
console.log(caesarEncrypt('{w!Z-arD}', 5)); // {b!E-fwI}

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// caesarEncrypt('', 5);
// caesarEncrypt('t', -1);   // "s"

