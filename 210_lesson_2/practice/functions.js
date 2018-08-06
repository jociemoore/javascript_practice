///////////////
// Question 1
///////////////

function average(a, b, c) {
  var result = (a + b + c) / 3;
  return result;
}


console.log(average(1, 2, 3));


///////////////
// Question 2
///////////////


function average(a, b, c) {
  var result = sum(a, b, c) / 3;
  return result;
}

function sum(a, b, c) {
  var result = a + b + c;
  return result;
}

console.log(average(5, 10, 15));


///////////////
// Question 3
///////////////

function average(nums) {
  var total = 0;
  for (i in nums) {
    total += nums[i];
  }
  return total / nums.length;
}

console.log(average([1, 25, 6, 5 , 40]));





///////////////
// Question 4
///////////////

function sum(nums) {
  var total = 0;
  for (i in nums) {
    total += nums[i];
  }
  return total;
}

function average(nums) {
  return sum(nums) / nums.length;
}

console.log(average([9, 25, 6, 5 , 40]));




///////////////
// Question 5
///////////////


var temperatures = [60, 65, 80, 71, 57];
console.log(average(temperatures));
