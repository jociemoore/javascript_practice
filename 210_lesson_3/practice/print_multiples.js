// function logMultiples(number) {
//  var multiples = [];
//  for (var i = number; i <= 100; i += number) {
//    if (i % 2 === 1) {
//      multiples.push(i);
//    }
//  }
//  multiples.reverse();
//  for (i in multiples) {
//    console.log(multiples[i]);
//  }
// }

function logMultiples(number) {
  for (var i = 100; i >= number; i--) {
    if (i % 2 === 1 && i % number === 0) {
      console.log(i);
    }
  }
}

logMultiples(17);
logMultiples(21);









/////////////////////////
// Further Exploration
/////////////////////////


function logMultiples(number) {
  var max = Math.floor(100 / number) * number;
  for (var i = max; i >= number; i -= number) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

logMultiples(17);
logMultiples(21);