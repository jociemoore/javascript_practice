// Example 1 

function odd(number) {
  return number % 2 === 1;
}

var count = [1, 2, 3, 4, 5];
count.some(odd);              // true
count.every(odd);             // false







// myOwnEvery

function myOwnEvery(array, func) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }
  return true;
}

var isAString = function (value) {
  return typeof value === 'string';
}

myOwnEvery(['a', 'a123', '1abc'], isAString);     // true










// Example 2

function areAllNumbers(array) {
  return myOwnEvery(array, isNumber);
}

var isANumber = function (value) {
  return typeof value === 'number';
};

areAllNumbers([1, 5, 6, 7, '1']);       // false
areAllNumbers([1, 5, 6, 7, 1]);         // true










// Example 3 

function areAllNumbers(array) {
  return myOwnEvery(array, function (value) {
    return typeof value === 'number';
  });
}





