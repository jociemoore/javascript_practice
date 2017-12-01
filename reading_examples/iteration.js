// Example 1 

var names = ['Eunice', 'Lucas', 'Mariana'];
names.forEach(function (name, index, array) {
  console.log(name, index, array[index]);
});

//logs
// Eunice 0 Eunice
// Lucas 1 Lucas
// Mariana 2 Mariana










// myForEach

function myForEach(array, func) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    func(array[i]);
  }
}

var min = Infinity;

var getMin = function (value) {
  min = value <= min ? value : min;
};

myForEach([4, 5, 12, 23, 3], getMin); // undefined
console.log(min);                      // 3










// Example 2 
var min = Infinity;
var max = Infinity;

var getMinMax = function (value) {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
};

[4, 5, 12, 23, 2].forEach(getMinMax);

console.log(min, max); 

// 3 23











// Example 3

var min = Infinity;
var max = Infinity;

[4, 5, 12, 23, 3].forEach(function (value) {
  if (value >= max) {
    max = value;
  }

  if (value <= min) {
    min = value;
  }
});

console.log(min, max);

// 3 23




