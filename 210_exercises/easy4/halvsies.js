
function halvsies(arr) {
  var midPoint = Math.ceil(arr.length / 2);
  var firstHalf = arr.slice(0, midPoint);
  var secondHalf = arr.slice(midPoint);

  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]