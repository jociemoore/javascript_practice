///////////////////////////////////////
// Example function and funtion calls
///////////////////////////////////////


function triple(number) {
  console.log('tripling in process...');
  return number + number + number;
}

// call function with a value argument
console.log(triple(5));  

// => logs 15

// call function with a variable argument 
var someNumber = 5;
console.log(tripl(someNumber))l

// => logs 15

// call a function and store result in a variable
var result = triple(5);
console.log(result);

// => logs 15






///////////////////////////////////////
// Params vs Arguments
///////////////////////////////////////

// When a function is defined, a and b are called parameters.
function multiply(a, b) {
  // When this code runs, they are called arguments.
  return a * b;
}

multiply(5, 6); // 5 and 6 are also arguments




