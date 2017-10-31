function startsWith(string, searchString) {
  var i = 0;
  while (i < searchString.length) {
    if (searchString[i] !== string[i]) {
      return false;
    }
    i++;
  }
  return true;
}

var str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

var longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false