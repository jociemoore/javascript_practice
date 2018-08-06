function stringy(n) {
  var str;

  if (n % 2 === 0) {
    str = '10'.repeat(n / 2);
  } else {
    str = '10'.repeat(Math.floor(n / 2));
    str += '1';
  }

  return str;
}



console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"