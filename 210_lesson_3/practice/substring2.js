function sanitize(num, str) {
  if (num < 0 || Number(num) !== num) {
    num = 0;
  }
  if (num > str.length) {
    num = str.length;
  }
  return num;
}

function substring(string, start, end = string.length) {
  var temp;
  var newString = ''; 

  // sanitize inputs
  start = sanitize(start, string);
  end = sanitize(end, string);

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  // find and return the substr
  for (i = start; i < end; i++) {
    newString += string[i];
  }

  return newString;
}


var string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"