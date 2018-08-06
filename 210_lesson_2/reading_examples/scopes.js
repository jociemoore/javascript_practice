////////////////////
// Single Scope
////////////////////

var name = 'Julian';
console.log(name);

for (var i = 0; i < 3; i++) {
  console.log(name);
}

console.log(name);






////////////////////
// Functional Scope
////////////////////


var name = 'Julian';

function greet() {
  console.log(name);
}

greet();   // logs Julian







function greet2() {
  function say() {
    console.log(name);
  }
  say();
}

greet2();  // logs Julian






////////////////////
// Closures
////////////////////

var count = 1;

function logCount() {
  console.log(count);
}

logCount();   // logs 1

count += 1;
logCount();   // logs 2








/////////////////////////////////
// Create var in current scope
/////////////////////////////////

// via function declaration
function lunch() {
  var food = 'taco';
}

// via params
function eat(food) {
  console.log('I am eating' + food);
}

// via global scope
function drink() {
  console.log('I am drinking a glass of water');
}








/////////////////////////////////
// Assignment 
/////////////////////////////////


country = 'Liechtenstein';

var country = 'Spain';
function update() {
  country = 'Liechtenstein';
}

console.log(country);  // logs Spain
update();
console.log(country);  // logs Liechtenstein



// no code above
funtion assign() {
  var country1 = 'Liechtenstein';
  country2 = 'Spain';
}

assign();
console.log(country2);  // logs Spain
console.log(country1);  // ReferenceError
// no code below








/////////////////////////////////
// Variable Shadowing 
/////////////////////////////////

var name = 'Julian';

function greet() {
  var name = 'Logan';
  console.log(name);
}

greet();  // logs Logan






var name = 'Julian';

function greet(name) {
  console.log(name);
}

greet('Sam');  //logs Sam



