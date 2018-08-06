// Examples
'hello';
10 + 13;
sum = 10;

var a;
var b;
var c;

a = 3;
b = 10 + 3;
c = (a + (3 + b));

3 + 3 * 4; // 15
(3 + 3) * 4 // 24





// Increment and decrement operators
var a = 1;
a++;
++a;
a--;
--a;




// Increment and decrement operators in expressions
var a;
var b;
var c;

a = 1;
b = a++;  // b is 1 and a is 2
c = ++a;  // c is 3 and a is 3



// Short circuiting 
var a = true;
var b = false;

a || (b = true); // b = true is never evaluated
b && (a = 1); // a = 1 is never evaluated 


// Statements 
var a;
var b;
var c;
var b = (a = 1);   
var c = (var a = 1);   // this throws an error because a statement cannot be used as part of an expression





