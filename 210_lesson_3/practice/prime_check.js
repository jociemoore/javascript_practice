function isPrime(num) {
  var halfNum;
  var isEvenNotTwo = (num > 2) && (num % 2 === 0);

  if (num <= 1 || isEvenNotTwo) return false;
  if (num <= 3) return true;

  halfNum = Math.floor(num / 2);
  for (var i = 3; i <= halfNum; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false