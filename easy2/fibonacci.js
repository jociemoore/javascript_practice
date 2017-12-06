// 1 1 2 3 5 8 13 21...

function findFibonacciIndexByLength(size) {
  var series = [1, 1];
  var next = 0;
  var last;
  var secondToLast;

  while (String(next).length < size) {
    last = series[series.length - 1];
    secondToLast = series[series.length - 2];
    next = secondToLast + last;
    series.push(next);
  }

  return series.length;
}



console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74