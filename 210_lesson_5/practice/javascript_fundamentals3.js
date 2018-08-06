// ------------
// Question #1
// ------------

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);


// line 5 logs:
// [1, 2, 3]


// line 8 logs:
// [1, 2, 3]










// ------------
// Question #2
// ------------

// Method 1
var myArray = [1, 2, 3, 4];
var myOtherArray = [];
var i;

for (i = 0; i < myArray.length; i += 1) {
  myOtherArray.push(myArray[i]);
}

// Method 2 -- too specific to numeric values
var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.join().slice(',').split(',');
var i;

for (i = 0; i < myOtherArray.length; i += 1) {
  myOtherArray[i] = Number(myOtherArray[i]);
}

// Method 3 
var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();












// ------------
// Question #3
// ------------

function concat(array1, secondArgument) {
  var newArray = array1.slice();
  var i; 

  if (Array.isArray(secondArgument)) {
    for (i = 0; i < secondArgument.length; i += 1) {
      newArray.push(secondArgument[i]);
    }
  } else {
    newArray.push(secondArgument);
  }

  return newArray;
}

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concat([2, 3], 'four');                // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                              // [2, 3, { a: "two", b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
obj;                                   // { a: "two", b: 3 }












// ------------
// Question #4
// ------------

function concat() {
  var newArray = [];
  var i; 
  var j;

  for (j = 0; j < arguments.length; j += 1) {
    if (Array.isArray(arguments[j])) {
      for (i = 0; i < arguments[j].length; i += 1) {
        newArray.push(arguments[j][i]);
      }
    } else {
      newArray.push(arguments[j]);
    }
  }

  return newArray;
}



concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]













// ------------
// Question #5
// ------------

function pop(array) {
  var length = array.length;
  var lastElem = array[length - 1];

  if (length === 0) return lastElem;
  array.length = length - 1;
  return lastElem;
}


// pop
var array = [1, 2, 3];
pop(array);                        // 3
console.log(array);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]






function push(array) {
  var i;
  var length;

  for (i = 1; i < arguments.length; i += 1) {
    length = array.length;
    array[length] = arguments[i];
  }

  return array.length;
}

// push
var array = [1, 2, 3];
push(array, 4, 5, 6);              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0












// ------------
// Question #6
// ------------


function reverse(inputForReversal) {
  var i;
  var newObj = [];

  for (i = inputForReversal.length - 1; i >= 0; i -= 1) {
    newObj.push(inputForReversal[i]);
  }

  if (typeof inputForReversal === "string") {
    newObj = newObj.join('');
  } 

  return newObj;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

var array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]











// ------------
// Question #7
// ------------

function shift(array) {
  var firstElem = array[0];
  var arrayCopy = array.slice();
  var i;

  for (i = 0; i < array.length - 1; i += 1) {
    array[i] = arrayCopy[i + 1];
  }

  array.length = array.length - 1;

  return firstElem;
}




function unshift(array) {

  var i;
  var j = 1;
  var newLength = array.length + (arguments.length - 1);
  var arrayCopy = array.slice();
  var counter = 1;

  for (i = newLength - 1; i >= 0; i -= 1) {
    array[i] = arrayCopy[arrayCopy.length - counter];

    if (arrayCopy[arrayCopy.length - counter] === undefined) {
      array[i] = arguments[j];
      j += 1;
    }

    counter += 1;
  }

  return newLength;
}




unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

var testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]












// ------------
// Question #8
// ------------


function slice(array, begin, end) {
  var extracted = [];
  var i;

  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;

  for (i = begin; i < end; i += 1) {
    extracted.push(array[i]);
  }

  return extracted;
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

var arr = [1, 2, 3];
slice(arr, 1, 3);                     // [2, 3]
arr;                                  // [1, 2, 3]











function getNewArr(array, begin, max) {
  var newArr = [];
  var i;

  for (i = begin; i < max; i += 1) {
    newArr.push(array[i]);
  }

  return newArr;
}

function splice(array, start, deleteCount) {
  var diff = array.length - start;
  var deleted = [];
  var secondHalf = [];
  var increment = 0;
  var i;

  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > diff ? diff : deleteCount;

  // deletion
  if (deleteCount !== 0) {
    deleted = getNewArr(array, start, start + deleteCount); 
    secondHalf = getNewArr(array, start + deleteCount, array.length);
  }

  array.length = array.length - deleteCount;

  // addition
  if (deleteCount === 0 && arguments[3] !== undefined) {
    secondHalf = getNewArr(array, start, array.length);
    array.length = start + (arguments.length - 3);
  }

  for (i = 3; i < arguments.length; i += 1) {
    array[start + increment] = arguments[i];
    increment += 1;
  }

  for (i = 0; i < secondHalf.length; i += 1) {
    array[array.length] = secondHalf[i];
  }

  return deleted;
}


var arr = [1, 2, 3];
splice(arr, 1, 1, 'two');             // [2]
arr;                                  // [1, "two", 3]

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

var arr = [1, 2, 3];
splice(arr, 1, 2, 'two', 'three');    // [2, 3]
arr;                                  // [1, "two", "three"]

var arr = [1, 2, 3];
splice(arr, 1, 0);                    // []
splice(arr, 1, 0, 'a');               // []
arr;                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
splice(arr, 0, 0, 'a');               // []
arr;                                  // ["a", 1, 2, 3]













// ------------
// Question #9
// ------------

function oddities(array) {
  var oddElements = [];
  var i;

  for (i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false

// The comparison statements are false because in both cases, the array returned by the oddities function is a new object even though they may share values.












// ------------
// Question #10
// ------------



function areArraysEqual(array1, array2) {
  var i;

  if (array1.length !== array2.length) {
    return false;
  }

  array1.sort();
  array2.sort();

  for (i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true



