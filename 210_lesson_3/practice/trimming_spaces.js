
function trim(str) {
  var trimmedStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/\w/)) {
      break;
    }
  }
  for (var k = str.length - 1; k > 0; k--) {
    if (str[k].match(/\w/)) {
      break;
    }
  }
  for (var j = i; j < k + 1; j++) {
    trimmedStr += str[j];
  }
  return trimmedStr;
}



trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
