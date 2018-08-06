// Example 1 - standard object
'hi'.toUpperCase();    // 'HI'






// Example 2 - primatives vs objects
var a = 'hi';
typeof a;    // "primitive"

var stringObject = new String(a);
typeof stringObject;   // "object"

stringObject.toUpperCase();







// Example 3 - custom object
var colors = {
  red: '#f00',
  orange: '#ff0'
};

typeof colors;    // "object"
colors.red;       // "#f00"
colors.orange;    // "#ff0"







// Example 4 - accessing properties
var animal = 'turtle';
animal.length;   // 9

'blue'.length;   // 4







// Example 5 - setting properties
var count = [0, 1, 2, 3, 4];
count.length = 2;

var colors = {
  red: '#f00',
  orange: '#ff0'
}

colors.blue = '#00f';








// Example 6 - Methods
(5.234).toString();
'pizza'.match(/z/);
Math.ceil(8.675309);
Date.now();








// Example 7 - custom objects include trailing comma 
var myObj = {
  prop1: 'sample data',
  method1: function() {},
  prop2: 'sample data',
}

var myObj2 = {
  prop1: 'sample data',
  prop2: 'sample data',
  method1: function() {},
}







// Example 8 - No trailing comma with one-line object literals
var coordinates = {x: 25, y: 50};










