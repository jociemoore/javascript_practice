// Example 1  - imperative

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];
var i;

for (i = 0; i < array.length; i += 1) {
  if (array[i] % 2 === 1) {
    newArray.push(array[i]);
  }
}

console.log(newArray);








// Example 2 - imperative with abstraction

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];
var i; 

for (i = 0; i < array.length; i += 1) {
  if (isOddNumber(array[i])) {
    newArray.push(array[i]);
  }
}

console.log(newArray);

function isOddNumber(number) {
  return number % 2 === 1;
}







// Example 3 - iteration focused abstraction

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];

array.forEach(function (element) {
   if (isOddNumber(element) {
    newArray.push(element);
   }
});

console.log(newArray);

function isOddNumber(number) {
  return number % 2 === 1;
}








// Example 4 - filter abstraction 

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = array.filter(function (element) {
  return isOddNumber(element);
});

// why do you need the function expression at all?

console.log(oddNumbers);

function isOddNumber(number) {
  return number % 2 === 1;
}









// Example 5 - use first-class value

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = array.filter(isOddNumber); 

// why don't you need to pass the array element into isOddNumber?

console.log(oddNumbers); 

function isOddNumber(number) {
  return number % 2 === 1;
}


