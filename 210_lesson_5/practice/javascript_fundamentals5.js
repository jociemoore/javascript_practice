// ------------
// Question #1
// ------------

(false && undefined);                            // expect false -- false
(false || undefined);                            // expect false -- undefined
((false && undefined) || (false || undefined));  // expect false -- undefined
((false || undefined) || (false && undefined));  // expect false -- false
((false && undefined) && (false || undefined));  // expect false -- false
((false || undefined) && (false && undefined));  // expect false -- undefined
('a' || (false && undefined) || '');             // expect true -- a
((false && undefined) || 'a' || '');             // expect true -- a
('a' && (false || undefined) && '');             // expect false -- undefined
((false || undefined) && 'a' && '');             // expect false -- undefined









// ------------
// Question #2
// ------------

var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}


// User expects 3, 6, 9
// But its an endless loop because i never gets incremented beyond 0. 0 % 3 === 0 is always true.










// ------------
// Question #3
// ------------

var row;
var i;
var j;

function padLeft(number) {
  var stringNumber = String(number);
  return stringNumber.length <= 1 ? ' ' + stringNumber : stringNumber;
}

for (i = 1; i < 10; i += 1) {
  row = '';
  for (j = 1; j <= 10; j += 1) {
    row += padLeft(i * j) + ' ';
  }

  console.log(row + '\n');
}

// User expects a multiplication table for 1 to 10
// But the row with muliples of 10 is missing. The outer loop does not reach 10 because the loop stops at 9.










// ------------
// Question #4
// ------------

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 4]]; expected: [[2, 2, 2], [3, 3, 3]]




// The problem with this code is that the j loop only iterates the number equal to the length of the number of colums you are looking for in the cols array. This happens because the length variable gets reassigned.











// ------------
// Question #5
// ------------

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}


// logs: 
// The total value is 15







function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;

// logs: 
// The total value is NaN








var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

// logs: 
// The total value is 15











// ------------
// Question #6
// ------------

function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();



// logs 'debugging' because although the function logger is hoisted above the variable status, the logger function is not called until after the variable assignment. Additionally, the status variable is accessible within the logger function because its scope includes its outer scope.











// ------------
// Question #7
// ------------

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?


// Fix:

function invoiceTotal() {
  var total = 0;
  var i;

  for (i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
  }

  return total;
}

invoiceTotal(20, 30, 40, 50);
invoiceTotal(20, 30, 40, 50, 40, 40);











// ------------
// Question #8
// ------------

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum;
  var i;

  for (i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  sum;
}


// User expects the product of the sums of two arrays of numbers

// But there are two issues:
// 1. You cannot add to an undefined variable as with sum in the total function.
// 2. The total function needs an explicit return -- result is a product of undefined and undefined, which is NaN.





