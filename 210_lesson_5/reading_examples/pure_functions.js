// Example 1 - pure
function add(a, b) {
  return a + b;
}






// Example 2 - not pure
var sum = 0;
function add(a, b) {
  sum = a + b;
}






// Example 3 - not pure
var currentTotal = 0;
function addToTotal(num) {
  return currentTotal + num;
}

addToTotal(5);      // 5
currentTotal = 5; 
addToTotal(5);      // 10






// Example 4
fucntion joinString(a, b, c) {
  return a.concat(b, c);
}

var result = joinString('hello,', ' ', 'world!');
console.log(result);          // "hello, world!"






// Example 5 - not pure
var friends = ['Joe', 'Mary', 'David'];

function removeElement(array, element) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === element) {
      array.splice(i, 1);
    }
  }
}

removeElement(friends, 'David');    // undefined
friends;                            // ["Joe", "Mary"]








// Example 6 - pure
var friends = ['Joe', 'Mary', 'David'];

function removeElement(array, element) {
  var newArray = [];
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

removeElement(friends, 'David');  // ['Joe', 'Mary']
friends;                          // ['Joe', 'Mary', 'David']


