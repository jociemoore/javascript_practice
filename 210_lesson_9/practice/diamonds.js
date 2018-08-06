/*

INPUT: integer
OUTPUT: stars string

KEY WORDS:
- diamond
- grid

RULES:
- n is always odd
- grid is n x n

DATA STRUCTURE:
array of strings

ALGORITHM:
- generate strings of stars

    -- generate # of stars (array)
      -- starting with 1, push number to array 
      -- +2 on each iteration up to Math.ceil(n / 2) 
      -- then -2 until the end of the array 
      -- map over to transform into star strings

- generate # of padding spaces (array)

    -- -1 on each iteration up to Math.ceil(n / 2) 
    -- +1 until the end of the array
    -- map over and tranform to string of spaces

- prepend space strings to strings of stars

- join array of strings with \n

*/








function getNextQuantity(op, quantity, diff) {
  if (op === 'add') {
    quantity += diff;
  } else {
    quantity -= diff;
  }

  return quantity;
}

function generateContentByRow(str, n, half, op1, op2, start, diff) {
  var content = [];
  var quantity = start;
  var i;

  for (i = 0; i < half; i += 1) {
    quantity = getNextQuantity(op1, quantity, diff)
    content.push(quantity);
  }

  for (i = half; i < n; i += 1) {
    quantity = getNextQuantity(op2, quantity, diff)
    content.push(quantity);
  }

  return content.map(function (num) {
    return str.repeat(num);
  });
}


function diamond(n) {
  var diamondOfStars;
  var half = Math.ceil(n / 2);
  var stars = generateContentByRow('*', n, half, 'add', 'sub', -1, 2);
  var padding = generateContentByRow(' ', n, half, 'sub', 'add', (half + 1), 1);

  diamondOfStars = stars.map(function (starStr, index) {
    return padding[index].concat(starStr);
  }).join('\n');

  console.log(diamondOfStars);
}











// GIVEN TEST CASES
diamond(1);
/*

logs:
*

*/


diamond(3);
/*

logs:
 *
***
 *

*/




diamond(9);
/*

logs:
0     *        1 stars 
1    ***       3 stars 
2   *****      5 stars
3  *******     7 stars
4 *********    9 stars
5  *******     7 stars
6   *****      5 stars
7    ***       3 stars
8     *        1 stars

*/





// EDGE TESTS
// diamond(-1) ??
















////////////////////////
// FURTHER EXPLORATION
////////////////////////


/*

- get outer spaces 
- get inner spaces
- concat outer spaces, star, inner spaces, star
- join with \n

*/



function hollowDiamond(n) {
  if (n === 1) {
    console.log('*');
    return;
  }

  var bookend = ' '.repeat(Math.ceil(n / 2)).concat('*');
  n -= 2;
  var diamondOfStars;
  var half = Math.ceil(n / 2);
  var innerPadding = generateContentByRow(' ', n, half, 'add', 'sub', -1, 2);
  var outerPadding = generateContentByRow(' ', n, half, 'sub', 'add', (half + 1), 1);
  


  diamondOfStars = outerPadding.map(function (outerPaddingStr, index) {
    return outerPaddingStr.concat('*').concat(innerPadding[index]).concat('*');
  });

  diamondOfStars.unshift(bookend);
  diamondOfStars[diamondOfStars.length] = bookend;

  console.log(diamondOfStars.join('\n'));
}








hollowDiamond(1);
/*

logs:
*

*/


hollowDiamond(3);
/*

logs:
 *
* *
 *

*/



hollowDiamond(9);
/*

logs:
0     *        0 inner spaces 
1    * *       1 inner spaces 
2   *   *      3 inner spaces
3  *     *     5 inner spaces
4 *       *    7 inner spaces
5  *     *     5 inner spaces
6   *   *      3 inner spaces
7    * *       1 inner spaces
8     *        0 inner spaces

*/

