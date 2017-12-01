// ------------
// Question #1
// ------------

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// Bug on this line: myObject[a];
// Fix: myObject['a'];











// ------------
// Question #2
// ------------

var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);

// console output:
// function() { 
//  return 'Victor'; 
// } function() { 
//   return 'Reyes'; 
// }











// ------------
// Question #3
// ------------

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);


// ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']

// The values in array1 were pushed to array2. The arrays are different objects so the mutation that occurs to array1 happens to those strings only. When toUpperCase() is called new string objects are created because previously these strings were primitives. These string objects do not exist in array2.



///////////////////////
// Further Exploration
///////////////////////

// 1. Yes changes to any object literals in array1 would be reflected in array2 because objects are mutable.

// 2. A fix:

var array1 = [{1:'Moe'}, {1:'Larry'}, {1:'Curly'}, {1:'Chemp'}, {1:'Harpo'}, {1:'Chico'}, {1:'Groucho'}, {1:'Zeppo'}];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i]['1'].startsWith('C')) {
    array1[i]['1'] = array1[i]['1'].toUpperCase();
  }
}

console.log(array2);













// ------------
// Question #4
// ------------

var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);

// logs:
// 678
// 456





///////////////////////
// Further Exploration
///////////////////////


var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

// logs:

// {
//   funcProp: 'hello, ',
// }

// {
//   funcProp: 'world!',
// }












// ------------
// Question #5
// ------------

var myArray = ['a', 'b', 'c'];

console.log(myArray[0]);
console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]);
console.log(myArray['e']);
console.log(myArray);


// logs:
// a
// undefined
// d
// 5
// ['a', 'b', 'c', 'f', '-1': 'd', 'e': 5]












// ------------
// Question #6
// ------------

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// The user's expectation that the code will return 5 is incorrect. The array's length is 2 even though there are 4 elements in the array. The average function in this case will return 10. 





///////////////////////
// Further Exploration
///////////////////////

var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;

  for (i = 0; i < Object.keys(array).length; i += 1) {
    sum += array[i - 2];
  }

  return sum / Object.keys(array).length;
}

average(myArray);













// ------------
// Question #7
// ------------

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// Arguments is an array-like object for any functions parameters. Its array-like in that you can access its values using bracket notation.









// ------------
// Question #8
// ------------

function penultimate(string) {
  return string.split(' ')[-2];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"


// The problem is that there is no value at the -2 key in the array returned from the split method. It is undefined.

// The fix:

function penultimate(string) {
  var words = string.split(' ');
  return words[words.length - 2];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"












// ------------
// Question #9
// ------------


function timeOfDay(deltaMinutes) {
  var dateTime = new Date(0,0,0,0,deltaMinutes);
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}


timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"











// ------------
// Question #10
// ------------

var MILLISECONDS_PER_MINUTE = 60000;
var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  var dateTime = new Date('Jan 1, 2000 ' + timeStr);
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();

  return minutes + (hours * MINUTES_PER_HOUR);
}

function beforeMidnight(timeStr) {
  var dateTime = new Date('Jan 1, 2000 ' + timeStr);
  var midnight = new Date('Jan 2, 2000');

  return (midnight.getTime() - dateTime.getTime()) / MILLISECONDS_PER_MINUTE;
}


afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686









