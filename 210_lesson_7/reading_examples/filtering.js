// Example 1

var count = [1, 2, 3, 4, 5];
var filtered = count.filter(function (number, index, array) {
  return number % 2 === 0;
});

console.log(filtered);

// logs [2, 4];



// myFilter

function myFilter(array, func) {
  var newArray = [];

  array.forEach(function (element) {
    if (func(element)) {
      newArray.push(element);
    }
  });

  return newArray;
}

var isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

myFilter([{ a: 3, b: 4, c: 5},
          { a: 5, b: 12, c: 13},
          {a: 1, b: 2, c: 3},], isPythagoreanTriple);

// returns
// [ {a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13} ]









// Example 2

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

var isMultipleOfThreeOrFive = function (value) {
  return value % 5 === 0 || value % 3 === 0;
}

multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);

// [3, 5, 18, 15]









// Example 3
function multiplesOfThreeOrFive(values) {
  return myFilter(values, function (values) {
    return value % 5 === 0 || value % 3 === 0;
  });
}




