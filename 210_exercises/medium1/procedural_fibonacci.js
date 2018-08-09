function fibonacci(n) {
  if (n === 1 || n === 2) { return 1; }

  let currentFib = 1;
  let prevFib = 1;
  let temp;

  for (let i = 0; i < n - 2; i += 1) {
    temp = currentFib;
    currentFib = temp + prevFib;
    prevFib = temp;
  }

  return currentFib;
}

console.log(fibonacci(20) === 6765);                        // 6765
console.log(fibonacci(50) === 12586269025);                 // 12586269025
console.lgo(fibonacci(100) === 354224848179261915075);      // 354224848179261915075 -- too big to be accurate