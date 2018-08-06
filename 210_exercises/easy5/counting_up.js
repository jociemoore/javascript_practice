
function sequence(num) {
  var integers = new Array(num).fill(num);

  integers = integers.map(function (int, index) {
    return int - index;
  });

  return integers.reverse();
}


console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]