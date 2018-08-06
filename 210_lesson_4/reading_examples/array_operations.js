// ------------
// Question #1
// ------------

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}


var count = [0, 1, 2];
push(count, 3);         // 4
count;                  // [ 0, 1, 2, 3 ]









// ------------
// Question #2
// ------------

function pop(arr) {
  var lastElement = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastElement;
}


var count = [1, 2, 3];
pop(count);             // 3
count;                  // [ 1, 2 ]








// ------------
// Question #3
// ------------


function unshift(arr, val) {
  var i;
  for (i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  return arr.length;
}

var count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]








// ------------
// Question #4
// ------------


function shift(arr) {
  var firstElement = arr[0];
  var i;
  for (i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length = arr.length - 1;
  return firstElement;
}


var count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]








// ------------
// Question #5
// ------------


function indexOf(arr, val) {
  var index = -1;
  var i;
  for (i = 0; i < arr.length; i++) {
    if ((typeof(arr[i]) === "number" && arr[i] === val) || 
        (typeof(arr[i]) !== "number" && arr[i].includes(val))) {
      index = i;
      break;
    }
  }
  return index;
}



indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1










// ------------
// Question #6
// ------------



function lastIndexOf(arr, val) {
  var index = -1;
  var i;
  for (i = arr.length; i >= 0; i--) {
    if (arr[i] === val) {
      index = i;
      break;
    }
  }
  return index;
}


lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1








// ------------
// Question #7
// ------------


function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

function slice(arr, start, end) {
  var i;
  var newArr = [];
  for (i = start; i < end; i++) {
    push(newArr, arr[i]);
  }
  return newArr;
}


slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]








// ------------
// Question #8
// ------------

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}


function splice(arr, start, num) {
  var i;
  var removed = [];
  var newLength = arr.length - num;
  for (i = start; i < start + num; i++) {
    push(removed, arr[i]);
    if (arr[i + num]) {
      arr[i] = arr[i + num];
    }
  }
  arr.length = newLength;
  return removed;
}


var count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8 ]









// ------------
// Question #9
// ------------


function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

// function concat(arr1, arr2) {
//   var newArr = [];
//   var i;
//   for (i = 0; i < arr1.length; i++) {
//     push(newArr, arr1[i]);
//   }
//   for (i = 0; i < arr2.length; i++) {
//     push(newArr, arr2[i]);
//   }
//   return newArr;
// }

function concat() {
  var newArr = [];
  var i;
  for (j in arguments) {
    for (i = 0; i < arguments[j].length; i++) {
      push(newArr, arguments[j][i]);
    }
  }
  return newArr;
}


concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]







// ------------
// Question #10
// ------------


function join(arr, str) {
  var i;
  var newStr = '';
  for (i = 0; i < arr.length - 1; i++) {
    newStr += String(arr[i]) + str;
  }
  newStr += String(arr[arr.length - 1]);
  return newStr;
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'




