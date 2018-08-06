function substr(string, start, length) {
  var i;
  var subString = '';
  if (start < 0)  {
    start = string.length + start;
  }
  var end = start + length;

  for (i = start; i < end; i++) {
    if (string[i] === undefined) break;
    subString += string[i];
  }

  return subString;
}

var string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""