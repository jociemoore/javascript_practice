// Example 1 - Arrays
[1, 2, 3];
['Monday', 'Tuesday', 'Wednesday'];
['Jan', 31, [2015, 2016]];





// Example 2 - objects
{
  firstname: 'Joe',
  lastname: 'Smith',
  gender: 'Male',
  age: 30,
  married: false,
}





// Example 3
var a = ['hello', 'world'];

console.log(typeof a);       // "object"
console.log(a['1']);         // "world"
console.log(Object.keys(a)); // ["0", "1"]


// same as...
var a = {
  '0': 'hello',
  '1': 'world',
};

console.log(typeof a);       // "object"
console.log(a['1']);         // "world"
console.log(Object.keys(a)); // ["0", "1"]







// Example 4 - The length property
var myArray = [];
myArray.length;       // 0

myArray = ['foo', 'bar', 'baz'];
myArray.indexOf('baz');    // 2
myArray.length;            // 3








// Example 5
var myArray = [];
myArray['foo'] = 'bar';
myArray[0] = 'baz';
myArray[1] = 'qux';

console.log(myArray);         // ['baz, 'quz', foo: 'bar']
myArray.length;               // 2 --> foo: 'bar' is not an element
myArray.indexOf('bar')        // -1

myArray[-1] = 'hello';
myArray[-2] = 'world';
myArray.length;               // 2
myArray.indexOf('hello')      // -1 --> 'hello' is not an element
myArray.indexOf('world')      // -1 --> 'world' is not an element

console.log(myArray);         // ['baz', 'qux', foo: 'bar', '-1': 'hello', '-2': 'world']
Object.keys(myArray).length;  // 5
myArray.length;               // 2








// Example 6
var myArray = [1, 2, 3];
myArray.length;           // 3

myArray.length = 5;
console.log(myArray);     // [1, 2, 3, undefined x 2] -- Chrome
myArray.length            // 5

myArray[6] = 'foo';
myArray.length;           // 7 
console.log(myArray);     // [1, 2, 3, undefined x 3, "foo"] -- Chrome

myArray.length = 2;
console.log(myArray);     // [1, 2]

myArray.length = 5;
console.log(myArray);     // [1, 2, undefined x 3] -- Chrome
myArray.length;           // 5







// Example 7 
0 in [];     // false
0 in [1];   // true

var numbers = [4, 8, 1, 3];
2 < numbers.length;         // true






