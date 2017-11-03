function missing(arr) {
  var i;
  var missingElements = [];
  var nextElement;
  var increment;

  for (i = 0; i < arr.length - 1; i++) {
    nextElement = arr[i + 1];
    increment = 1;

    while (nextElement !== arr[i] + increment) {
      missingElements.push(arr[i] + increment);
      increment++;
    }
  }

  return missingElements;
}


missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []