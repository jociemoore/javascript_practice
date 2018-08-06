/* 

INPUT: integer
OUTPUT: console.log pattern

KEY WORDS:
- star
- grid
- n

RULES: 
- result is a 8 pointed star
- n x n grid
- n  = odd integer
- smallest star is 7x7 ( n !< 7 )

DATA SCTRUCTURE: 
string

ALGORITHM:
- set padding to 0
- set spacing to ((n - 3) / 2)
- declare pattern as empty string
- loop through Math.floor(n / 2) times
    - concate padding + * + spacing + * + spacing + * + \n ... to the pattern
    - break if i === Math.floor(n / 2)
    - increment padding by 1
    - decrement spacing by 1
- print on line of all stars -- '*'.repeat(n)
- loop through Math.floor(n / 2) times
    - concate padding + * + spacing + * + spacing + * + \n ... to the pattern
    - decrement padding by 1
    - increment spacing by 1
- console.log(pattern)

*/







function star(n) {
  var padding = 0;
  var spacing = ((n - 3) / 2);
  var lastRow = Math.floor(n / 2);
  var pattern = '';

  for (i = 0; i < lastRow; i += 1) {
    pattern += ' '.repeat(padding) + '*' +
               ' '.repeat(spacing) + '*' +
               ' '.repeat(spacing) + '*' + 
               '\n';
    if (i === lastRow - 1) { break; }
    padding += 1;
    spacing -= 1;
  }

  pattern = pattern.concat('*'.repeat(n)).concat('\n');

  for (i = 0; i <= lastRow; i += 1) {
    pattern += ' '.repeat(padding) + '*' +
               ' '.repeat(spacing) + '*' +
               ' '.repeat(spacing) + '*' + 
               '\n';
    if (i === lastRow - 1) { break; }
    padding -= 1;
    spacing += 1;
  }

  console.log(pattern);
}











////////////////////////
// Further Exploration
////////////////////////

function buildStarSection(padding, spacing, lastRow, sectionNum) {
  var section = '';
  var i;
  
  for (i = 0; i < lastRow; i += 1) {
    section += ' '.repeat(padding) + '*' +
               ' '.repeat(spacing) + '*' +
               ' '.repeat(spacing) + '*' + 
               '\n';

    if (sectionNum === 1) {
      padding += 1;
      spacing -= 1;
    } else {
     padding -= 1;
     spacing += 1;
    }
  }

  return section;
}


function star(n) {
  var lastRow = Math.floor(n / 2);
  var pattern = '';
  
  pattern += buildStarSection(0, ((n - 3) / 2), lastRow, 1);

  pattern = pattern.concat('*'.repeat(n)).concat('\n');

  pattern += buildStarSection(((n - 3) / 2), 0, lastRow, 2);

  console.log(pattern);
}













// TEST CASES
star(7);

/*

logs:
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

*/



star(9);

/*

logs:
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *


*/




star(11);

/* 

logs:
*    *    *  0 - 4 - 4 spaces
 *   *   *   1 - 3 - 3 spaces
  *  *  *    2 - 2 - 2 spaces
   * * *     3 - 1 - 1 spaces
    ***      4 - 0 - 0 spaces
***********  break - line
    ***
   * * *
  *  *  *
 *   *   *

*/