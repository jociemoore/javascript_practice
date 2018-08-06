function indexOf(firstStr, secondStr) {
  var last = firstStr.length - secondStr.length;
  for (var i = 0; i <= last; i++) {
    if (firstStr[i] === secondStr[0]) {
      var j = i; 
      var k = 0;
      while (j < secondStr.length + i) {
        if (firstStr[j] === secondStr[k]) {
          j++;
          k++;
        } else {
          break;
        }
      }
      if (j === secondStr.length + i) return i;
    }
  }
  return -1;
}


function lastIndexOf(firstStr, secondStr) {
  var index = -1;
  var last = firstStr.length - secondStr.length;
  for (var i = 0; i <= last; i++) {
    if (firstStr[i] === secondStr[0]) {
      var j = i; 
      var k = 0;
      while (j < secondStr.length + i) {
        if (firstStr[j] === secondStr[k]) {
          j++;
          k++;
        } else {
          break;
        }
      }
      if (j === secondStr.length + i) index = i;
    }
  }
  return index;
}



indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1










/////////////////////////
// Further Exploration
/////////////////////////


function lastIndexOf(firstStr, secondStr) {
  var last = firstStr.length - secondStr.length;
  var newFirst;
  for (var i = last; i >= 0; i--) {
    newFirst = firstStr.slice(i, firstStr.length);
    newIndex = indexOf(newFirst, secondStr);
    if (newIndex !== -1) return i;
  }
  return -1;
}


