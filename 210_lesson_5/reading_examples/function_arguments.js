// Example 1
function logArgs(a) {
  console.log(argument[0]);
  console.log(argument[1]);
  console.log(argument.length);
}

logArgs(1, 'a');

// logs:
// 1
// a
// 2







// Example 2 
function logArgs() {
  console.log(typeof arguments);
  console.log(Array.isArray(arguments));
  var a = arguments.pop();
}

logArgs(1, 2);

// logs:
// object
// false
// TypeError: Object #<Object> has no method 'pop'







// Example 3 
var args = Array.prototype.slice.call(arguments);








// Example 4 
function logArgs() {
  var args = Array.prototype.slice.call(arguments);
  console.log(typeof args);
  console.log(Array.isArray(args));
  var a = args.pop();
};

logArgs(1, 2);

// logs:
// object
// true







// Example 5
function sum() {
  var results = 0;
  var i;
  for (i = 0; i < arguments.length; i += 1) {
    result += arguments[i];
  }
  return result;
}


sum();     // 0
sum(1, 2, 3);     // 6
sum(1, 2, 3, 4, 5);    // 15




