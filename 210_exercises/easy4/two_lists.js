function interleave(arr1, arr2) {
  var combinedArr = [];
  var i;

  for (i = 0; i < arr1.length; i += 1) {
    combinedArr.push(arr1[i]);
    combinedArr.push(arr2[i]);
  }

  return combinedArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]