function multisum(max) {
  var i;
  var multiples = [];

  for (i = 1; i <= max; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  return multiples.reduce(function (sum, multiple) {
    return sum + multiple;
  }, 0);
}



console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168