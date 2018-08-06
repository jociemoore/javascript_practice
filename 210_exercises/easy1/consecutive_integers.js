function calculate(num, op) {
  var i;
  var result = 1;
  var operation = op === 's' ? 'sum' : 'product';

  for (i = 2; i <= num; i += 1) {
    if (op === 's') {
      result += i;
    } else {
      result *= i;
    }
  }

  return [result, operation];
}

var VALID_OPS = ['p', 's'];

function consecutiveCalculator() {
  do {
    var inputNum = parseInt(prompt('Please enter an integer greater than 0: '));
  } while (inputNum <= 0);

  var inputOp = prompt('Enter "s" to compute the sum, or "p" to compute the product.').trim().toLowerCase();

  if (!VALID_OPS.includes(inputOp)) { 
    console.log('Sorry, cannot execute that operation.');
    return;
  }

  var outputs = calculate(inputNum, inputOp);

  console.log('The ' + outputs[1] + ' of the integers between 1 and ' + String(inputNum) + ' is ' + String(outputs[0]) + '.');
}

consecutiveCalculator();








///////////////////////
// Further Exploration
///////////////////////

function calculate(nums, op) {
  var operation = op === 's' ? 'sum' : 'product';

  results = nums.map(function (num) {
    var i;
    var total = 1;

    for (i = 2; i <= num; i += 1) {
      if (op === 's') {
        total += i;
      } else {
        total *= i;
      }
    }

    return total;
  });

  return [results, operation];
}

var VALID_OPS = ['p', 's'];

function consecutiveCalculator() {
  var numbers = [];
  var i;

  for (i = 0; i < 3; i += 1) {
    do {
      var inputNum = parseInt(prompt('Please enter an integer greater than 0: '));
    } while (inputNum <= 0);

    numbers.push(inputNum);
  }

  var inputOp = prompt('Enter "s" to compute the sum, or "p" to compute the product.').trim().toLowerCase();

  if (!VALID_OPS.includes(inputOp)) { 
    console.log('Sorry, cannot execute that operation.');
    return;
  }

  var outputs = calculate(numbers, inputOp);

  console.log('The ' + outputs[1] + 's of the integers between 1 and ' + String(numbers) + ' are ' + String(outputs[0]) + ' respectively.');
}

consecutiveCalculator();




