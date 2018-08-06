/*

INPUT: string
OUTPUT: boolean

KEY WORDS:
  - "block" - contains two letters; only one of each

RULES:
  - true = you can spell the word
    --> word contains no double letters
    --> word contains no opposite letter pairings

  - case insensitive
  - data: letter pairings
    --> as code?
    --> as lookup? -- LETTER_PAIRINGS = {}

DATA STRUCTURES:
- internally: string/ array of chars

ALGORITHM:
- convert string to uppercase, then to an array of chars 
    -- split()
- iterate through each letter 
    -- forEach
      - iterate through each successive letter to the end of word
        -- forEach
        -- slice(index + 1)
          - return false if value === the value from first iteration or its letter pair
- otherwise return true 

*** For Loops are best here because you can vut iteration short!!

*/







LETTER_PAIRINGS = {
  'B':'O', 'O':'B',
  'X':'K', 'K':'X',
  'D':'Q', 'Q':'D',
  'C':'P', 'P':'C',
  'N':'A', 'A':'N',
  'G':'T', 'T':'G',
  'R':'E', 'E':'R',
  'F':'S', 'S':'F',
  'J':'W', 'W':'J',
  'H':'U', 'U':'H',
  'V':'I', 'I':'V',
  'L':'Y', 'Y':'L',
  'Z':'M', 'M':'Z',
};

function isBlockWord(word) {
  var letters = word.toUpperCase().split('');
  var nextLetters;
  var i;
  var j;

  for (i = 0; i < letters.length - 1; i += 1) {
    nextLetters = letters.slice(i + 1);

    for (j = 0; j < nextLetters.length; j += 1) {
      if (nextLetters[j] === letters[i] || 
          nextLetters[j] === LETTER_PAIRINGS[letters[i]]) {

        return false;
      }
    }
  }

  return true;
}







// GENERIC TEST CASES
console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('BOAT')); // false

// EDGE CASES

// Letter Case
console.log(isBlockWord('jest')); // true
console.log(isBlockWord('CaMeO')); // true

// Empty ??
// console.log(isBlockWord('')); 

// Other chars ??
// console.log(isBlockWord('MR.T')); 




