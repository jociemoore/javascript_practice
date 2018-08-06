////////////////
// Question 1 
////////////////


var apples = 3;
var bananas = 5;

if (apples == bananas) {
  console.log("They are equal.");
}






////////////////
// Question 2 
////////////////


bananas = '3'

if (apples == bananas) {
  console.log('They are equal.')
}






////////////////
// Question 3 
////////////////

bananas = '3'

if (apples === bananas) {
  console.log('They are equal.')
}


// This if/else statement does not ouput a message because the operands are not of the same type, so the condition is not met and the message is not logged.







////////////////
// Question 4 
////////////////

bananas = '3'

if (apples === bananas) {
  console.log('They are equal.')
} else {
  console.log('They are NOT equal.');
}






////////////////
// Question 5 
////////////////

bananas = '3'

if (apples === bananas) {
  console.log('They are equal.')
} else if (apples == bananas) {
  console.log('They are the same number but different types.');
} else {
  console.log('They are NOT equal.');
}







////////////////
// Question 6 
////////////////

bananas = '3'

if (apples === bananas) {
  console.log('They are equal.')
} else {
  if (apples == bananas)  {
    console.log('They are the same number but different types.');
  } else {
    console.log('They are NOT strictly equal.');
  }
}








////////////////
// Question 7 
////////////////


apples = 3;
bananas = 3;
areEqual = (apples === bananas);
console.log(areEqual);








////////////////
// Question 8 
////////////////

apples = 3;
bananas = undefined;
eitherOr = apples || bananas;
console.log(eitherOr);







////////////////
// Question 9 
////////////////

bananas = 1
// eitherOr = apples || bananas;
eitherOr = bananas || apples;
console.log(eitherOr);








////////////////
// Question 10 
////////////////

var lastname = 'Moore';
var familyMessage;

familyMessage = (lastname === 'Moore') ? 'You\'re part of the family!' : 'You\re not family.'
console.log(familyMessage);


