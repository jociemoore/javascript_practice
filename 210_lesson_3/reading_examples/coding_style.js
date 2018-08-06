////////////////////////////////////////////////
// Spacing - Soft Tabs
////////////////////////////////////////////////

// bad
function foo() {
    var name;
}

// bad
function bar() {
 var name;
}

// good 
function baz() {
	var name;
}

////////////////////////////////////////////////
// Spacing - Leading brace
////////////////////////////////////////////////

// bad 
function test(){
	console.log('test');
}

// good
function test() {
	console.log('test');
}



////////////////////////////////////////////////
// Spacing - If statements vs function calls
////////////////////////////////////////////////

// bad
if(isJedi) {
	fight();
}

// good 
id (isJedi) {
	fight();
}

// bad
function fight () {
	console.log('Swoosh!');
}

// good
function fight() {
	console.log('Swoosh!');
}



////////////////////////////////////////////////
// Spacing - Parameters
////////////////////////////////////////////////

// bad 
var x=y+5;

// good

var x = y + 5;

////////////////////////////////////////////////
// Spacing - Parentheses
////////////////////////////////////////////////

// bad
function bar( foo ) {
	return foo;
}

// good

function bar(foo) {
	return foo;
}

// bad
if ( foo ) {
	console.log(foo);
}

// good 
if (foo) {
	console.log(foo);
}


////////////////////////////////////////////////
// Spacing - Special character operators
////////////////////////////////////////////////

// bad
index ++;

// good 
index++;


////////////////////////////////////////////////
// Spacing - Line endings
////////////////////////////////////////////////


// bad
func(a, b) ;

// good
func(a, b);

// bad
func(a, b); 

// good
func(a, b);



////////////////////////////////////////////////
// Spacing - Ternary operators
////////////////////////////////////////////////

// bad
var maybe1 > maybe2?'bar':null;

// good
var maybe1 > maybe2 ? 'bar' : null;

// bad
var foo = maybe1 > maybe2
	? 'bar'
	: value1 > value2 ? 'baz' : null;

// better

var maybeNull = value1 > value2 ? 'baz' : null;

var foo = maybe1 > maybe2
	? 'bar'
	: maybeNull;

// best
var maybeNull = value1 > value2 ? 'baz' : null;
var foo =  maybe1 > maybe2 ? 'bar' : maybeNull;

// bad
var foo = a ? a : b;
var bar = c ? true : false;
var baz = c ? false : true;

// good
var foo = a ? a : b;
var bar = !c;
var baz = !c;


////////////////////////////////////////////////
// Blocks - After
////////////////////////////////////////////////


// bad
if (foo) {
	return bar;
}
return baz;

// good
if (foo) {
	return bar;
}

return baz;



////////////////////////////////////////////////
// Blocks - Padding
////////////////////////////////////////////////

// bad 
function bar() {

	console.log(foo);

}

// also bad
if (baz) {

	console.log(qux);
} else {
	console.log(foo);

}


// good
function bar() {
	console.log(foo);
}

// good
if (baz) {
	console.log(qux);
} else {
	console.log(foo);
}



////////////////////////////////////////////////
// Blocks - Braces
////////////////////////////////////////////////

// bad
if (test)
	return false;

// good
if (test) return false;


// good
if (test) {
	return false;
}

// bad
function foo() { return false; }

// good
function bar() {
	return false;
}


////////////////////////////////////////////////
// Blocks - If/else statements
////////////////////////////////////////////////

// bad
if (test) {
	thing1();
	thing2();
}
else {
	thing3();
}


// good
if (test) {
	thing1();
	thing2();
} else {
	thing3();
}


////////////////////////////////////////////////
// Semicolons
////////////////////////////////////////////////

// bad
var number
number = 5
number = number + 1

// good
var number;
number = 5;
number = number + 1;


// bad
while (number > 0) {
	number -= 1;
};


// good 
while (number > 0) {
	number -= 1;
}



////////////////////////////////////////////////
// Naming Conventions - camelCase
////////////////////////////////////////////////


// bad
var Hello = 'hello';
var my_name = 'john';
function call_me() {}



// good
var hello = 'hello';
var myName = 'john';
function callMe();


////////////////////////////////////////////////
// Strings - Single quotes
////////////////////////////////////////////////

// bad
var name = "Capt. Janeway";

// good
var name = 'Capt. Janeway';


////////////////////////////////////////////////
// Strings - Explicit coersion
////////////////////////////////////////////////

var a = 9;


// bad
var string = a + '';

// bad
var string a.toString();


// good
var string = String(a);


////////////////////////////////////////////////
// Numbers - type casting and parsing
////////////////////////////////////////////////

var inputValue = '4';


// bad 
var val = new Number(inputValue);

// bad 
var val = +inputValue;

// bad
var val = parseInt(inputValue);

// good 
var val = Number(inputValue);

// good
var val = parseInt(inputValue, 10);


////////////////////////////////////////////////
// Booleans
////////////////////////////////////////////////

var age = 0;

// bad
var hasAge = new Boolean(age);

// good
var hasAge = Boolean(age);

// best
var hasAge = !!age;


////////////////////////////////////////////////
// Functions - Declaration and definition
////////////////////////////////////////////////

// // bad
// if (currentUser) {
// 	function test() {
// 		console.log('Nope');
// 	};
// }


// good
var test;
if (currentUser) {
	test = function () {
		console.log('Yup');
	};
}

////////////////////////////////////////////////
// Functions - Parameters 
////////////////////////////////////////////////


// bad
function nope(name, options, arguments) {
	// ...stuff...
}


// good 
function yup(name, options, args) {
	// ...stuff...
}




