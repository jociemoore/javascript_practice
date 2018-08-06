////////////////
// Question 1
////////////////


var a = 'outer';

function testScope() {
  var a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// 'outer' will be outputted first. Then 'inner' will be outputted from within the function. Lastly, because the variable 'a' is within the function scope is only local, 'outer' is outputted again. The global variable has not changed.






////////////////
// Question 2
////////////////

var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// First, 'outer' is outputted. The variable 'a' is then reassigned to 'inner' in testScope, so 'inner' is outputted next. Lastly, 'inner' is outputted again. This is because variables have access to variables within its current AND surrounding scopes.







////////////////
// Question 3
////////////////

var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket);
  }

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();


// 'shop2' and 'shop3' get hoisted to the top of the  scope. First output is'empty' because no inner functions have been called.  Second output is 'play station' because the inner 'basket' variable within 'shop3' is logged. Last output is 'computer'. At this point both 'shop1' and 'shop2' have been called, which reassign the value of basket twice.









////////////////
// Question 4
////////////////



function hello() {
  a = 'hello';
}

hello();

console.log(a);


// No variable 'a' is found for reassignment so hello() creates a global variable. 'hello' is logged.





////////////////
// Question 5
////////////////



function hello() {
  var a = 'hello';
}

hello();
console.log(a);

// This code will throw a ReferenceError because 'a' is only declared and defined within the 'hello' function.





////////////////
// Question 6
////////////////



console.log(a);

var a = 1;

// Only variable declarations get hoisted, not assignments. 'a' outputs 'undefined'.






////////////////
// Question 7
////////////////



console.log(a);

function hello() {
  a = 1;
}


// 'hello()' is never called so a ReferenceError is thrown.





