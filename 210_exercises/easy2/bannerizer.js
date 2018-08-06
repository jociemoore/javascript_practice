// function logInBox(text) {
//   var width = text.length + 2;
//   var horzBorder = '+' + '-'.repeat(width) + '+';
//   var paddingRow = '|' + ' '.repeat(width) + '|';

//   console.log(horzBorder);
//   console.log(paddingRow);
//   console.log('| ' + text + ' |')
//   console.log(paddingRow);
//   console.log(horzBorder);
// }



// logInBox('To boldly go where no one has gone before.');
// // +--------------------------------------------+
// // |                                            |
// // | To boldly go where no one has gone before. |
// // |                                            |
// // +--------------------------------------------+



// logInBox('');
// // +--+
// // |  |
// // |  |
// // |  |
// // +--+










///////////////////////
// Further Exploration
///////////////////////
function print(lines) {
  lines.forEach(function (line) {
    console.log('| ' + line + ' |')
  });
}

function printFinal(line, padding) {
  console.log('| ' + line + padding + ' |')
}

function logInBox(text, max) {
  var horzBorder = '+' + '-'.repeat(max) + '+';
  var emptyRow = '|' + ' '.repeat(max) + '|';
  var innerWidth = max - 2;

  var totalLines = Math.ceil(text.length / (innerWidth));
  var lines = new Array();
  var lastLine;
  var adjustedPadding;
  var startIndex = 0;
  var endIndex = innerWidth;
  var i;

  for (i = 0; i < totalLines; i += 1) {
    lines.push(text.slice(startIndex, endIndex));
    startIndex += innerWidth;
    endIndex += innerWidth;
  }

  lastLine = lines.pop();
  adjustedPadding = ' '.repeat((innerWidth) - (lastLine.length));

  console.log(horzBorder);
  console.log(emptyRow);
  print(lines);
  printFinal(lastLine, adjustedPadding);
  console.log(emptyRow);
  console.log(horzBorder);
}



logInBox('To boldly go where no one has gone before.', 20);
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+



