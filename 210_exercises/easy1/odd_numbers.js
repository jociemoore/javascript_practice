var i;

for (i = 0; i <= 99; i += 1) {
  if (i % 2 === 1){
    console.log(i);
  }
}









////////////////////////
// Further Exploration
////////////////////////

function fill (_, index) {
  return index + 1;
}

function findOddNums(val) {
    return val % 2 === 1;
  }

function printOddNumbers(start, end) {
  var container = new Array(end).fill('-');

  oddNums = container.map(fill).filter(findOddNums);

  oddNums.forEach(function (num) {
    if (num >= start && num <= end) {
      console.log(num);
    }
  })
}


console.log(printOddNumbers(5, 10));
console.log(printOddNumbers(1, 8));
console.log(printOddNumbers(0, 6));
console.log(printOddNumbers(67, 89));