// Example 1 - Array Literals
[]

[0, 1, 2]

[42, 'hello', false, [3, 5], [true, 'hello']]





// Example 2 - Array Constructor
var count = new Array(1, 2, 3,);






// Example 3 - Array Length
var count = [1, 2, 3];
count.length;






// Example 4 - Array Iteration
var count = [1, 2, 3, 4];
var i; 
for (i = 0; i < count.length; i++) {
  console.log(i);
}

// logs:
// 0
// 1
// 2
// 3








// Example 5 - Iteration
var count = [1, 2, 3, 4];
var i;
for (i = 0; i < count.length; i += 1) {
  console.log(count[i]);
}

// logs:
// 1
// 2
// 3
// 4







// Example 6 - Accessing Elements
var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];

fibonacci[0];    // 0
fibonacci[3];    // 2
fibonacci[100];  // undefined







// Example 7 - Adding Elements
var count = [1, 2, 3];
count[3] = 4;
count;        // [1, 2, 3, 4]
count.length  // 4






// Example 8 - Adding Elements
var count = [1, 2, 3, 4]; 
count[5] = 5;
count[9] = 9;
count;                 // [1, 2, 3, 4, undefined, 5, undefined, undefined, undefined, 9]
count[4];              // undefined
count.length;          // 10







// Example 9 - changing length
var count = [1, 2, 3];
count.length = 10;
count;          // [1, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
count.length = 2;
count;          // [1, 2]








// Example 10 - Verifying Array Type
Array.isArray([]);       // true
Array.isArray('array')   // false













