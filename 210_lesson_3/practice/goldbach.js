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


function checkGoldbach(n) {
  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }
  
  var halfNum = Math.floor(n / 2);

  for (var i = 0; i <= halfNum; i++) {
    if (isPrime(i) && isPrime(n - i)) {
      console.log(i + ' ' + (n - i));
    }
  }
}



checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

