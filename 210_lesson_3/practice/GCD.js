function gcd(num1, num2) {
  for (var i = num2; i > 0; i--) {
    if ((num2 % i === 0) && (num1 % i === 0)) {
      return i;
    }
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1










/////////////////////////////
// Further Exploration
/////////////////////////////

function gcd(...nums) {
  var index = 0;
  var div = nums[index];
  while (index < nums.length - 1) {
    for (div; div > 0; div--) {
      if ((nums[index] % div === 0) && 
        (nums[index + 1] % div === 0)) {
        index++;
        break;
      }
    }
  }
  return div;
}

gcd(12, 8, 24, 144);   // 4









