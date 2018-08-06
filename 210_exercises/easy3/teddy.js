var age = Math.floor((Math.random() * (201 - 20)) + 20);

console.log('Teddy is ' + String(age) + ' years old!');






////////////////////////
// Further Exploration
////////////////////////

// Yes, using Math.round would make a difference. If Math.random() * 201 - 20 generated a number between 200.50 and 200.99, then Math.round would round UP to 201, which is not in the requested range.


function randomBetween(num1, num2) {
  var max = Math.max(num1, num2);
  var min = Math.min(num1, num2);

  return Math.floor((Math.random() * (max - min + 1)) + min);
}

var age = randomBetween(20, 200);
console.log('Teddy is ' + String(age) + ' years old!');

