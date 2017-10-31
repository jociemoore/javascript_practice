function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();











/////////////////////////
// Further Exploration
/////////////////////////

function fizzBuzz() {
  var i = 1;
  function fizz(num) {
    return num % 3 === 0 ? 'Fizz' : '';
  }
  function buzz(num) {
    return num % 5 === 0 ? 'Buzz' : '';
  }

  while (i <= 100) {
    console.log(fizz(i) + buzz(i) || i);
    i++;
  }
}

fizzBuzz();
