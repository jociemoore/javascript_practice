// ------------
// Question #1
// ------------

function lastInArray(array) {
  var lastIndex = array.length -1;
  return array[lastIndex];
}

lastInArray([1, 2, 3, 4, 5]);      // 5







// ------------
// Question #2
// ------------

function rollCall(names) {
  for (i in names) {
    console.log(names[i]);
  }
}

rollCall(['Tom', 'Jerry', 'Lilo', 'Stitch']);

// logs:
// Tom
// Jerry
// Lilo
// Stitch








// ------------
// Question #3
// ------------

function reversed(array) {
  var i;
  var last = array.length - 1;
  var result = [];
  for (i = last; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}


reversed([1, 2, 3, 4, 5]);    // [5, 4, 3, 2, 1]








// ------------
// Question #4
// ------------

function indexOf(value, array) {
  var i;

  for (i = 0; i < array.length; i++) {
    if (value == array[i]) {
      break;
    }
  }

  if (i == array.length && value != array[array.length - 1]) {
    return -1;
  } else {
    return i;
  }
}

indexOf('ruth', ['joe', 'ruth', 'charlie']);  // 1

indexOf('sam', ['joe', 'ruth', 'charlie']);  // -1









// ------------
// Question #5
// ------------

function convertToString(arr) {
  str = '';
  for (i in arr) {
    str += arr[i].toString();
  }
  return str;
}

convertToString([1, 'a', 4]);




