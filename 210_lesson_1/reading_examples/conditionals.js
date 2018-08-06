// Example 1
var score = 80;

if (score > 70) {
  console.log('Congratulations, you passed');
} else {
  console.log('Sorry, but you need to study more!');
}


// Example 2
if (condition1) {
  // statements
} else if (condition2) {
  // statements
} else if (conditionN) {
  // statements
} else {
  // statements
}



// Example 3
if (condition1) {
  if (nestedCondition) {
    // statements 
  } else {
    // statements
  }
} else if (condition2) {
  // statements
}




// Example 4
1 || 2;  // 1
1 && 2;  // 2

if (1 || 2) {}   // truthy
if (1 && 2) {}  // truthy
 




// Example 5
var reaction = 'negative';

switch (reaction) {
  case 'positive':
    console.log('The sentiment of the market is positive.');
  case 'negative':
    console.log('The sentiment of the market is negative.');
  case 'undecided':
    console.log('The sentiment of the market is undecided.');
  default:
    console.log('The market has not reacted enough.');
}


// Outputs
// The sentiment of the market is negative.
// The sentiment of the market is undecided.
// The market has not reacted enough. 







// Example 6

switch (reaction) {
  case 'positive':
    console.log('The sentiment of the market is positive.');
    break;
  case 'negative':
    console.log('The sentiment of the market is negative.');
    break;
  case 'undecided':
    console.log('The sentiment of the market is undecided.');
    break;
  default:
    console.log('The market has not reacted enough.');
}




// Outputs
// The sentiment of the market is negative.




// NaN

console.log(Number('abc'));   // NaN
console.log(Math.sqrt(-1));   // NaN
console.log(undefined + 1);   // NaN

console.log(typeof(NaN));  // number

console.log(10 === NaN); //false
console.log(10 < NaN);  //false
console.log(10 > NaN); //false
console.log(NaN === NaN); // false


var foo = NaN;
console.log(isNaN(foo));
console.log(isNaN('hello'));

// check for NaN only
function isValueNaN(value) {
  return value !== value;
}

function isValueNaN(value) {
  return typeof value === "number" && isNaN(value);
}
