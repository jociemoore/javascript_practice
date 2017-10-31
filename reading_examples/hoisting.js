
////////////////
// Example 1
////////////////


console.log(a);
var a = 123;
var b = 456;

// is the same as...

var a;
var b;

console.log(a);
a = 123;
b = 456;








////////////////
// Example 2
////////////////


console.log(hello());

function hello() {
  return 'hello world';
}



// is the same as...


function hello() {
  return 'hello world';
}

console.log(hello());







////////////////
// Example 3
////////////////

bar();   // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}

// is equivalent to...

function bar() {
  console.log(foo);
}

var foo;

bar(); // logs undefined
foo = 'hello'; 







////////////////
// Example 4
////////////////

bar();  // logs world
var bar = 'hello';

function bar() {
  console.log('world');
}


var bar = 'hello'; 
bar();  // Uncaught TypeError

function bar() {
  console.log('world');
}




// Now hoisted...

function bar() {
  console.log('world');
}

bar();
bar = 'hello';



function bar() {
  console.log('world');
}

bar = 'hello';
bar();











////////////////
// Example 5
////////////////

function foo() {
  var a = 1;
  var b = 2;
  var c;
  // ...
}



function foo() {
  return 'hello';
}

foo();
}

