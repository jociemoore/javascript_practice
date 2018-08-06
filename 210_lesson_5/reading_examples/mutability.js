// Example 1
function lessExcitable(text) {
  return text.replace(/!+/g, '.');
}

var message = 'Hello!';
lessExcitable(message);     // "Hello."
message;                    // "Hello!"







// Example 2
function push(array, value) {
  array[array.length] = value;
  return value;
}

var numbers = [1, 6, 27, 34];
push(numbers, 92);          // 92
numbers;                    // [1, 6, 27, 34. 92]