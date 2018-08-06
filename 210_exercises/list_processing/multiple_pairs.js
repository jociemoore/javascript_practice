
function multiplyAllPairs(arr1, arr2) {
  arr1 = arr1.map(function (value1) {
    return arr2.map(function (value2) {
      return value2 * value1;
    });
  }).reduce(function (a, b){
    return a.concat(b);
  }, [])

  return arr1.sort(function (a, b) {
    return a - b;
  });
}



console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
