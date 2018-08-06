function repeat(string, times) {
  var newString = '';
  var i;

  if (!((/\d+/).test(times)) || !(times >= 0)) return undefined;

  for (i = 0; i < times; i++) {
    newString += string;
  }

  return newString;
}


repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined