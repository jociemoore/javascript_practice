
// - elements that are numbers should be multiplied by 2
doubler([1, 2, 3]);                     // [2, 4, 6]

// - elements that are strings should be repeated twice via concatenation
doubler(['a', 'b', 'c']);               // ['aa', 'bb', 'cc']

// - other types of elements should be duplicated in the array
// - non-primitive elements should have their reference duplicated, not their value
var doubled = doubler([{a: 'A'}]);                      // [{a: 'A'}, {a: 'A'}]
doubler([null]);                        // [null, null]
doubled[0] === doubled[1];              // true

// - the input array can contain a mixture of different types of elements
doubler([1, 'a', {a: 'A'}, null]);        // [2, 'aa', {a: 'A'}, {a: 'A'}, null, null]

// - the input array should not be mutated
var array = [1, 2, 3];
doubler(array);                         // [2, 4, 6]
                                        // array = [1, 2, 3]

// - elements that are special number values should remain unchanged
doubler([1, Infinity]);                 // [2, Infinity]

// elements that are any other type of number should be treated normally (multiplied by 2)
doubler([0, 0.5])                       // [0, 1]

// - elements that are empty strings should remain unchanged
doubler(['a', '']);                     // ['aa', '']

// - elements that appear more than once should be treated normally (as specified above)
doubler(['a', 'a']);                    // ['aa', 'aa']

// - elements that contain nested arrays or objects should be treated normally (duplicated)
doubler([[1,2,['?', '!']], ['a', 'b', 'c']]);    // [[1,2,['?', '!']], [1,2,['?', '!']], ['a', 'b', 'c'], ['a', 'b', 'c']]

// - if the input array contains empty slots (a "sparse array"), they should be removed
doubler([1, , 2]);                      // [2, 4]

// - if an inner array (element) contains empty slots, they should remain unchanged
doubler([[1, ,3], 'a']);                // [[1, , 3], [1, , 3], 'aa']

// - if an inner array (element) contains any object properties, they should remain unchanged
doubler([[{a: 'A'}, 2], 1]);              // [[{a: 'A'}, 2], [{a: 'A'}, 2], 2]

// - if the array is empty, return an empty array
doubler([]);                            // []

// - if multiple arguments are passed, ignore all but the first
doubler([1, 2, 3], ['a', 'b', 'c']);    // [2, 4, 6]

// - if the argument is a string, treat it as an array of characters
doubler('cat');                         // ['cc', 'aa', 'tt']

// - if the argument is a non-negative integer, treat it as an array of digits
doubler(123);                           // [2, 4, 6]
doubler(1);                             // [2]

// - if the argument is an object, treat it as an array of its property values
doubler({a: 'A', b: 'B'});              // ['AA', 'BB']

// if an inner array (element) contains any object properties, they should remain unchanged
var array = [];
array.a = 'A';
array.B = 'B';
doubler(array, 2);              // [[a: 'A', b: 'B'], [a: 'A', b: 'B'], 4]

// - all other kinds of inputs are invalid, and should return the string 'Invalid input'
doubler(null);                          // 'Invalid input'