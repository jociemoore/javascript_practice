////////////////
// Example 1
////////////////

function hello() {
  return 'Hello World!';
}

console.log(typeof hello);   // function







////////////////
// Example 2
////////////////

function outer() {
  function hello() {
    return 'hello world!';
  }

  return hello();
}

console.log(typeof hello);  // not accessible

var foo = outer;  
foo();   // because outer was assigned to another variable, you can invoke the function







////////////////
// Example 3
////////////////

var stringVar = 'string reference';
var numberVar = 42;

function functionVar() {
  return 'function reference';
}

console.log(typeof stringVar);  // string
console.log(typeof numberVar);  // number
console.log(typeof functionVar); // function

stringVar = functionVar;
functionVar = 'string reference';

console.log(typeof stringVar);   // function
console.log(typeof functionVar);  // string






////////////////
// Example 4
////////////////

var hello = function () {
  return 'hello';
}

console.og(typeof hello); // function
console.log(hello());  // hello








////////////////
// Example 5
////////////////

var foo = function() {
  return function() {
    return 1;
  };
};

var bar = foo();

bar();  // 1







////////////////
// Example 5
////////////////


var hello function foo() {
  console.log(typeof foo); 
}

hello();
foo();  // ReferenceError







////////////////
// Example 5
////////////////


function foo() {
  console.log('function declaration');
}

(function bar()) {
  console.log('function expression');
}

foo();    // function declaration
bar();    // ReferenceError









////////////////
// Example 6
////////////////

var foo = function foo() {
  return 'a named function expression assigned to a variable';
}

function bar() {
  return 'a function declaration';
}


