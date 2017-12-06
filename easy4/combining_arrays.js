
function union(arr1, arr2) {
  var combinedArr = arr1.concat(arr2);
  var filteredArr = [];

  combinedArr.forEach(function (elem) {
    if (!filteredArr.includes(elem)) {
      filteredArr.push(elem);
    }
  });

  return filteredArr;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]