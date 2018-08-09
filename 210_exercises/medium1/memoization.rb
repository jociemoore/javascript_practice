let store = {
  1: 1,
  2: 1
};

function fibonacci (n) {
  if (n > 2) {
    prevFib = store[n-1] || fibonacci(n-1);
    prevPrevFib = store[n-2] || fibonacci(n-2);
    store[n] = prevFib + prevPrevFib;
  }

  return store[n];
}

console.log(fibonacci(1) === 1);       // 1
console.log(fibonacci(2) === 1);       // 1
console.log(fibonacci(3) === 2);       // 2
console.log(fibonacci(4) === 3);       // 3
console.log(fibonacci(5) === 5);       // 5
console.log(fibonacci(12) === 144);    // 144
console.log(fibonacci(20) === 6765);   // 6765














// ---------------------
// Further Exploration
// ---------------------

var fibonacci = function() {
  let store = {
    1: 1,
    2: 1
  };
  
  return function(n) {
    if (n > 2) {
      prevFib = store[n-1] || fibonacci(n-1);
      prevPrevFib = store[n-2] || fibonacci(n-2);
      store[n] = prevFib + prevPrevFib;
    }
  
    return store[n];
  }
}();

console.log(fibonacci(1) === 1);       // 1
console.log(fibonacci(2) === 1);       // 1
console.log(fibonacci(3) === 2);       // 2
console.log(fibonacci(4) === 3);       // 3
console.log(fibonacci(5) === 5);       // 5
console.log(fibonacci(12) === 144);    // 144
console.log(fibonacci(20) === 6765);   // 6765
