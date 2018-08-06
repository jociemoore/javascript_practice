// ------------
// Question #1
// ------------

var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);



// The above code throws a SyntaxError for unterminated string literal
// This wasn't what I expected as I did not see the 3 spaces at the end of the second to last line.
// I thought the paragraph would be logged with large spaces due to the code formatting.









// ------------
// Question #2
// ------------

var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}

// EXPECTED
// Line 7 logs...'Hello'
// Line 11 logs...not logged
// Line 15 logs...'World'
// Line 19 logs...'!'

// ACTUAL
// Line 7 logs...'Hello'
// Line 11 logs...not logged
// Line 15 logs...'World'
// Line 19 logs...'!'


// Line 11 is not logged because !myString evaluates to false, which is falsy, and therefore the condition is not met.











// ------------
// Question #3
// ------------

if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}


// Number of flows/paths: 5












// ------------
// Question #4
// ------------

var name = 'Bob';
var saveName = name;
name = 'Alice';
console.log(name, saveName);


// logs:
// 'Alice'
// 'Bob'


var name = 'Bob';
var saveName = name;
name.toUpperCase();
console.log(name, saveName);

// logs:
// 'Bob'
// 'Bob'

// Strings cannot be mutated. name.toUpperCase() will output 'BOB', but the value stored in name does not change.


///////////////////////
// Further Exploration
///////////////////////

// You can call the toUpperCase() method on name even though it is a primitive because Javascript converts name to a String object automatically for us.










// ------------
// Question #5
// ------------

var number1 = prompt('Enter the first number:');
var number2 = prompt('Enter the second number:');

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));



// DESIRED OUTPUT
// Enter the first number: 23
// Enter the second number: 17

// 23 + 17 = 40
// 23 - 17 = 6
// 23 * 17 = 391
// 23 / 17 = 1
// 23 % 17 = 6
// 23 ** 17 = 1.4105003956066297e+23


// The actual output will not match our desired results because the user input is a string. 


// Fix
var number1 = Number(prompt('Enter the first number:'));
var number2 = Number(prompt('Enter the second number:'));

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));











// ------------
// Question #6
// ------------

var phrase = prompt('Please enter a phrase: ');
var length = phrase.length;

console.log('There are ' + length + ' characters in \"' + phrase + '\".');


// Please enter a phrase: walk
// logs:
// There are 4 characters in "walk".

// Please enter a phrase: walk, don't run
// logs:
// There are 15 characters in "walk, don't run".




///////////////////////
// Further Exploration
///////////////////////

var phrase = prompt('Please enter a phrase: ');
var lettersOnly = phrase.replace(/[\s+]/g, '');
var length = lettersOnly.length;

console.log('There are ' + length + ' characters in \"' + phrase + '\".');




var phrase = prompt('Please enter a phrase: ');
var lettersOnly = phrase.replace(/[\W]/g, '');
var length = lettersOnly.length;

console.log('There are ' + length + ' characters in \"' + phrase + '\".');











// ------------
// Question #7
// ------------

function stringToInteger(str) {
  var reversedStr = str.split('').reverse().join('');
  var total = 0;
  var digit;
  var i;

  for (i = 0; i < reversedStr.length; i += 1) {
    digit = 0;

    while (digit != reversedStr[i]) {
      digit = digit + 1;
    }
    
    digit = digit * (Math.pow(10, i));
    total += digit;
  }

  return total;
}

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570











// ------------
// Question #8
// ------------


function stringToSignedInteger(str) {
  var sign;
  var reversedStr;
  var total = 0;
  var digit;
  var i;

  if (str[0] === '+' || str[0] === '-') {
    sign = str[0];
    str = str.replace(str[0], '');
  }

  reversedStr = str.split('').reverse().join('');

  for (i = 0; i < reversedStr.length; i += 1) {
    digit = 0;
    while (digit != reversedStr[i]) {
      digit = digit + 1;
    }
    digit = digit * (Math.pow(10, i));
    total += digit;
  }

  if (sign === '-') {
    total *= -1;
  }

  return total;
}



stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100
stringToSignedInteger('4321');      // 4321











// ------------
// Question #9
// ------------

function getPowerSize(num) {
  var power = 0;

  while (num >= 10) {
    num /= 10;
    power += 1;
  }

  return power;
}

function integerToString(num) {
  var goalLength = getPowerSize(num) + 1;
  var digits = [];
  var digit;
  var numStr;
  var size;

  while (num >= 0) {
    if (digits.length === goalLength) break;

    size = Math.pow(10, getPowerSize(num));
    digit = Math.floor(num / size);

    digits.push(digit);
    num -= digit * size;
  }

  numStr = digits.join().replace(/,/g, '');
  return numStr;
}


integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"












// ------------
// Question #10
// ------------

function signedIntegerToString(num) {
  var numStr = integerToString(Math.abs(num));

  if (num < 0) {
    numStr = '-'.concat(numStr);
  } else if (num > 0) {
    numStr = '+'.concat(numStr);
  }

  return numStr;
}

signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
signedIntegerToString(4321);      // "+4321"


