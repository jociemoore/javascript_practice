
function swapcase(str) {
  return str.split('').map(function (char) {
    if (/[A-Z]/.test(char)) {
      char = char.toLowerCase();
    } else if (/[a-z]/.test(char)) {
      char = char.toUpperCase();
    }
    return char;
  }).join('');
}


console.log(swapcase('CamelCase'));              // "cAMELcASE"
console.log(swapcase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
