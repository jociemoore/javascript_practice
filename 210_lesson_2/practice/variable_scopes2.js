////////////////
// Question 1
////////////////

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();


// 'undefined' is the output. 'a' is hoisted and declared at the top of the function scope, but the condition is not met and so the 'a' is never assigned.






////////////////
// Question 2
////////////////

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello(); 
console.log(a);

// This one is tricky: even though the if condition is not met the local variable is declared and therefore hoisted to the top of the scope. 'a' is then reassigned to 'hello'. The code outputs 'hello' and then throws a Reference error because 'a' is not a global variable.








////////////////
// Question 3
////////////////


var a = 'hello';

for (var i = 0; i < 5; i += 1) {
  var a = i;
}

console.log(a);

// For loops do not establish a new variable scope. 'a' is assigned 5 times via the loop. The last time is value is 4 so that is the output.







////////////////
// Question 4
////////////////

var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo());
console.log(a);


// First output: 4 --> 'foo()' returns the return of bar() which is 4
// Second output: 3 --> 'a' is last reassigned to 3 when 'bar()' is called







////////////////
// Question 5
////////////////

var a = 'global';

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function superNested() {
      a = 'superNested';
      return a;
    }

    return superNested();
  }
  return nested();
}

console.log(checkScope());
console.log(a);


// First output: 'superNested' -- 'checkScope()' returns the return of 'nested()' which returns the return of 'superNested()' which returns 'a' which is assigned to 'superNested'. 

// Second output: 'global' --> the 'a' variables are all local variables to their scope except for the one within 'superNested()'. One might think that because 'a' is not declared within the scope that the variable reassigns the global 'a' variable. However, it does not; it reassigns the closest 'a' variable which here is declared and defined in 'nested()'.







////////////////
// Question 6
////////////////

var a = 'outer';
var b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

// First output: outer
// Second output: outer
// Third output: outer
// Fourth output: inner

// 'setScope() gets hoisted above variable 'a' and 'b' declarations. The function is not called at first so 'a' and 'b' first get defined as 'outer'. When 'setScope()' is called foo is defined as 'inner' (not the argument 'a') and 'b' is reassigned the values of 'inner' globally because it is not declared within the function scope. Lastly, a has not changed so it outputs 'outer' and 'b' outputs its new value 'inner'. 









////////////////
// Question 7
////////////////

var total = 50;
var increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);


// First output: 50
// Second output: 60
// Third output: 15


// 'incrementBy()' gets hoisted above the variable declarations. The parameter shadows the variable 'increment' -- within the function 'increment' will not be able to reference to the global variable. So 'total' gets incremented by the value passed into the function. The global 'total' get reassigned and 'increment' never changes.








////////////////
// Question 8
////////////////

var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};


// First output: outer
// Second output: error

// 'setScope()' gets hoisted above the variable declarations. An error is thrown because you cannot treat setScope like a function call.



