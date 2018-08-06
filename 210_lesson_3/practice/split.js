function printer(strings) {
  for (i in strings) {
    console.log(strings[i]);
  }
}

function splitString(string, delimiter) {
  var newStrings = [];
  var last = string[string.length - 1];
  var str = '';
  var i;

  if (delimiter === undefined) {
    console.log('ERROR: no delimiter');
    return;
  }

  if (delimiter === '') {
    for (i = 0; i < string.length; i++) {
      newStrings.push(string[i]);
    }
    printer(newStrings);
    return;
  }

  for (i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      newStrings.push(str);
 str = '';
    } else if (string[i] === last) {
      str += string[i];
      newStrings.push(str);
    } else {
      str += string[i];
    }
  }

  printer(newStrings);
}




splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello