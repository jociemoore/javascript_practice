// ------------
// Question #1
// ------------

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);


// logs:
// This is global

// This is the console output because javascript has functional scope and therefore the two variables do not conflict.









// ------------
// Question #2
// ------------

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// logs:
// This is local

// Again, this is the console output because of functional scope. The console.log() is called within the function and therefore myVar references the inner varialbe instead of the outer one.









// ------------
// Question #3
// ------------

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// logs:
// This is local

// Here global myVar gets reassigned by the myVar within the function when the function is called. 









// ------------
// Question #4
// ------------

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// logs:
// This is global

// This is the console output because global variables can be accessed within the local scope and the function is called on the last line.









// ------------
// Question #5
// ------------

function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// Although I first thought this code would raise an error, it does not. This is because myVar is not declared so Javascript looks to the outerscope for myVar. When it doesn't find anything, it binds myVar as a property of the global scope.






// ------------
// Question #6
// ------------

var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// logs:
// 7

// This is the console output because the value of 'a' is passed into the myValue function as an argument instead of the reference itself, and therefore 'a' remains unaffected by what happens within the function.






// ------------
// Question #7
// ------------

var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// logs: 
// 7 

// Although at first it seems the console output will be 17 because 'a' is not declared within the function and Javascript looks to the outer scope, this is not the case. The parameter 'a' declares a variable within the function with the same name. In this case, the outer variable 'a' can never be reached within the function because of variable shadowing.








// ------------
// Question #8
// ------------

var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// logs: 
// [1, 2, 10]

// This one is tricky. Javascript is pass-by-value and this looks a little different when dealing with objects vs primitives. Here you are passing the location in memory as the value. Basically, this means you cannot reassign 'b' to a new object and have the change affect both variables 'a' and 'b', but you can mutate parts of the object and it will affect both 'a' and 'b'.








// ------------
// Question #9
// ------------

console.log(a);

var a = 1;

// logs:
// undefined

// This is the console output because of hoisting. All variable declarations are hoisted to the top of the scope and then the code will run. At the time when console.log is called, 'a' is undefined still. 








// ------------
// Question #10
// ------------

logValue();

function logValue() {
  console.log('Hello, world!');
}

// logs: 
// Hello, world!

// This is the console output because functions are just variables that hold function values. The entire logValue function is hoisted to the top of the scope. 




/////////////////////////
// Further Exploration
/////////////////////////

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// logs:
// "string"

// This is the console output because functions are hoisted above variables and therefore logValue gets reassigned to the string 'foo'.






