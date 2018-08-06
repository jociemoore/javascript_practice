// Example 1 - sequential code

var a = 38;         // runs 1st
a += 4;             // 2nd
console.log(a);     // 3rd











// Example 2 - synchronous code

function logger(object) {       // runs 1st
  console.log(object);          // 4th, 5th, 6th, 7th
}

var numbers = [3, 7, 25, 39];   // 2nd
numbers.forEach(logger);        // 3rd
console.log(numbers.length);    // 8th










// Example 3 - asynchronous code

setTimeout(function () {       // runs 1st
  console.log('!');            // runs 5th
}, 3000);

setTimeout(function() {        // runs 2nd
  console.log('World');        // runs 4th
}, 1000);

console.log('Hello');          // runs 3rd


// logs:
// Hello
// undefined
// ...
// World
// ...
// ...
// !