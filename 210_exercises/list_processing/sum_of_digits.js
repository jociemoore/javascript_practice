
function sum(num) {
  var toNumber = function (digitStr) {
    return Number(digitStr);
  };

  var add = function (sum, digit) {
    return sum + digit;
  };

  return String(num).split('').map(toNumber).reduce(add, 0);
}



console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45