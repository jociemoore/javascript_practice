
function alphabeticNumberSort(nums) {
  var english_nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  return nums.sort(function (a, b) {
    var index = 0; 

    while (english_nums[a][index] === english_nums[b][index]) {
      index += 1;
    }

    return english_nums[a].charCodeAt(index) - 
           english_nums[b].charCodeAt(index); 
  });
}


console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]










////////////////////////
// Further Exploration
////////////////////////



function alphabeticNumberSort(nums) {
  var english_nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  var wordSort = function (a, b) {
    var index = 0; 

    while (english_nums[a][index] === english_nums[b][index]) {
      index += 1;
    }

    return english_nums[a].charCodeAt(index) - 
           english_nums[b].charCodeAt(index); 
  }

  return nums.sort(wordSort);
}


console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

