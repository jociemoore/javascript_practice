/*
INPUT: integer --> year
OUTPUT: integer --> count

RULES: 
- year > 1752
- count date with day index = 5 and date = 13

DATA STRUCTURE
- array of months

ALGORITHM:
- initialize array of 12 placeholders
- iterate over the array -- map
    -- initialize a new date...the 13th, of index month of the given year
    -- check and return boolean for if date has day index of 5
- filter for true values
- return length of the array 

*/


function fridayThe13ths(year) {
  var months = new Array(12).fill('-');
  var date;

  months = months.map(function(_, index) {
    date = new Date(year, index, 13);
    return date.getDay() === 5;
  }).filter(function (isFriday13th) {
    return isFriday13th;
  });

  return months.length;
}


// TEST CASES

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

// other input types??



