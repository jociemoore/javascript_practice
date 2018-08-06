// Examples
1 + true // true is coerced to 1; result = 2
'4' + 3 // 3 is coerced to "3"; result = "43"
false == 0 // false is coerced to 0; result is true


// Unary plus operator
+('123')  // 123
+('')  // 0
+(null)  // 0
+('a');  // NaN


// Binary plus operator
1 + true  // 2
'123' + 123  // '123123'
123 + '123'  // '123123'
'a' + null  // 'anull'


// Other arithmetic operators
1 - true  // 0
'123' * 3  // 369
'8' - '1'  // 7


// Relational operators
11 > '9'  // true
123 > 'a'  // false
123 <= 'a' // false


// Non-strict equality operators
0 == false // true (false coerced to 0)
'' == undefined // false (undefined coerced to "undefined")
'' == 0 // true (true coerced to 0)
true == 1 // true (boolean coerced to number)
'true' == true // false


// Strict equality operators
0 === false // false
'' === undefined  // false
'' === 0  // false
true === 1  // false
'true' ===  true  // false




