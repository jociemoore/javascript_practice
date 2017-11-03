function arraysEqual(arr1, arr2) {
  var i;
  var index;
  var equality = true;
  var arr2 = arr2.slice();

  for (i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      index = arr2.indexOf(arr1[i]);
      arr2.splice(index, 1);
    } else {
      break;
    }
  }

  if (arr2.length === 0) {
    equality = true;
  } else {
    equality = false;
  }

  return equality;
}



arraysEqual([1], [1]);                               // true
arraysEqual([1], [2]);                               // false
arraysEqual([1, 2], [1, 2, 3]);                      // false
arraysEqual([1, 'hi', true], [1, 'hi', true]);       // true
arraysEqual([1, 'hi', true], [1, 'hi', false]);      // false
arraysEqual([1, 'hi', true], [1, 'hello', true]);    // false
arraysEqual([1, 'hi', true], [2, 'hi', true]);       // false
