// ------------
// Question #1
// ------------

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5



function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}


// The limitation of both of these functions is if price is not included its value is undefined and undefined multiplied by the other variables (default or given) will output NaN. 

// Also, when the value of any of the arguments is zero (except price) they will wrongly be assigned their default value -- 0 is a falsy value. 












// ------------
// Question #2
// ------------

var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// The console logs false because although person and otherPerson have the same value, they are different objects. === is strict equality meaning that equates the values and the objects themselves.

// Fix:

var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person == otherPerson); 

// Another fix:

var person = { name: 'Victor' };
var otherPerson = person;

console.log(person === otherPerson); 











// ------------
// Question #3
// ------------

var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function (item, quantity) {
  return startingBalance + (item * quantity);
};

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));


// logs:
// 40
// 45

// This is startingBalance is reassigned before each console.log().













// ------------
// Question #4
// ------------

function makeDoubler(caller) {
  return function(number) {
    console.log('This function was called by ' + caller + '.');
    return number + number;
  }
}

var doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.











// ------------
// Question #5
// ------------

var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);


// logs: 
// 3
// 4
// 3
// 5


// This is the console output because the array length is always one larger than the non-negative, integer index which here is 2. Anything other than a non-negative, integer indexed value is in the array, but is not considered an element.











// ------------
// Question #6
// ------------

var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);

languages.length = 4;
console.log(languages);
console.log(languages.length);

languages.length = 1;
console.log(languages);
console.log(languages.length);

languages.length = 3;
console.log(languages);
console.log(languages.length);

languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);



// logs:
// ['JavaScript', 'Ruby', 'Python']
// 3

// ['JavaScript', 'Ruby', 'Python', <1 empty slot>] 
// 4

// ['JavaScript']
// 1 

// ['JavaScript', <2 empty slot>]
// 3

//  ['JavaScript', <1 empty slot>, 'Python']
// undefined
// 3

// *different output format for the empty slot depending on browser













// ------------
// Question #7
// ------------

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    var i;
    for (i = 0; i < arguments.length; i += 1) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);


// logs: 
// Welcome
// to
// the
// Matrix!









