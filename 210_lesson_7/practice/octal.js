function octalToDecimal(numberString) {
  var chars = numberString.split('').reverse();

  var values = chars.map(function (char, index) {
    return Number(char) * Math.pow(8, index);
  });

  return values.reduce(function (total, num) {
    return total + num;
  });
}




octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9