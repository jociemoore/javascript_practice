// ------------
// Question #1
// ------------

function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"



// ------------
// Question #2
// ------------


function lastElementOf(arr) {
  return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"





// ------------
// Question #3
// ------------

function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // returns undefined
nthElementOf(digits, -1);  // returns undefined





// ------------
// Question #4
// ------------

// Yes, we can add elements to a negative index. You can then retrieve the element, but you will not see them as a part of the array and the array length will not change after insertion.






// ------------
// Question #5
// ------------

function firstNOf(arr, count) {
  arr = arr.slice();
  arr.length = count;
  return arr;
}


var digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]






// ------------
// Question #6
// ------------

function lastNOf(arr, count) {
  var position = arr.length - (count);
  return arr.slice (position, arr.length);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]






// ------------
// Question #7
// ------------

// With the last function, if count is greater than the array length than the return is x elements from the end of the array and x being the difference between the count and the array length.


function lastNOf(arr, count) {
  var position = arr.length - (count);
  if (count > arr.length) {
    return arr.slice();
  }
  return arr.slice (position, arr.length);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 8);    // returns [4, 8, 15, 16, 23, 42]




// ------------
// Question #8
// ------------

function endsOf(beginningArr, endingArr) {
  var newArr = [];
  newArr.push(beginningArr[0]);
  newArr.push(endingArr[endingArr.length - 1]);
  return newArr;
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]



