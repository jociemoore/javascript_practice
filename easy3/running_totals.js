function runningTotal(nums) {
  return nums.map(function (num, index) {
    var prevNums = nums.slice(0, index + 1);

    return prevNums.reduce(function (sum, prevNum) {
      return sum + prevNum;
    }, 0);
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []




///////////////////////
// Further Exploration
///////////////////////

// Problems where you need to change/convert/update every value in an array are well-suited for Array.prototype.map.