// Example 1 
while (condition) {
  // statements
}





// Example 2
var counter = 0;
var limit = 10;

while (counter < limit) {
  console.log(counter);
  counter += 2;
}






// Example 3 - Infinite Loop
var counter = 0;
var limit = 10;

while (counter < limit) {
  console.log(counter);
}








// Example 4
var counter = 0;
var limit = 10;

while (true) {
  counter += 2;
  if (counter > limit) {
    break;
  }
  console.log(counter);
}








// Example 5
var counter = 0;
var limit = 10;

while (true) {
  counter += 2;
  if (counter === 4) {
    continue;
  }

  if (counter > limit) {
    break;
  }

  console.log(counter);
}






// Example 6 - Do..while loop
var counter = 0;
var limit = 0;

do {
  console.log(counter);
  counter++;
} while (counter < limit);







// Example 7 - for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}






// Example 8 -- initialization is outside of loop
var i = 0;
for (; i < 10; i++) {
  console.log(i);
}






// Example 9 -- manually check condition
for (var i = 0; ; i++) {
  if (i >= 10){
    break;
  }
  console.log(i);
}




// Example 10 -- manually increment
for (var i = 0; i < 10;) {
  console.log(i);
  i++;
}