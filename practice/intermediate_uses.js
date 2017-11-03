// ------------
// Question #1
// ------------


function oddElementsOf(arr) {
  var newArr = [];
  var i;
  for (i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}


var digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]







// ------------
// Question #2
// ------------


function combinedArray(even, odd) {
  var newArr = [];
  var i;
  for (i = 0; i < even.length; i++) {
    newArr.push(even[i]);
    newArr.push(odd[i]);
  }
  return newArr;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

combinedArray(digits, letters);  // returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]







// ------------
// Question #3
// ------------


function mirrored(arr) {
  var reversed = arr.slice().reverse();
  return arr.concat(reversed);
}


var array = [23, 4, 16, 42, 8, 15];
mirrored(array);        // [23, 4, 16, 42, 8, 15, 15, 8, 42, 16, 4, 23]







// ------------
// Question #4
// ------------


function sortDescending(arr) {
  var arrCopy = arr.slice();
  arrCopy.sort(function(a, b) {
    return b - a;
  });
  return arrCopy;
}


var array = [23, 4, 16, 42, 8, 15];
var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]








// ------------
// Question #5
// ------------

function matrixSums(arr) {
  var sums = [];
  var i;
  var j;
  var sum;
  for (i = 0; i < arr.length; i++) {
    total = 0;
    for (j = 0; j < arr[i].length; j++) {
      total += arr[i][j];
    }
    sums.push(total);
  }
  return sums;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]









// ------------
// Question #6
// ------------

function uniqueElements(arr) {
  var newArr = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]


