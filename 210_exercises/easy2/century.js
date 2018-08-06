function getSuffix(centNumStr) {
  var suffix;

  if (centNumStr === '11' || centNumStr === '12' || centNumStr === '13') {
    suffix = 'th';
  } else if (centNumStr.endsWith('1')) {
    suffix = 'st';
  } else if (centNumStr.endsWith('2')) {
    suffix = 'nd';
  } else if (centNumStr.endsWith('3')) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return suffix;
}

function century(year) {
  var yearStr = String(year);
  var centNumStr = yearStr.slice(0, yearStr.length - 2);
  var suffix;

  if (!yearStr.endsWith('00')) {
    centNumStr = String(Number(centNumStr) + 1);
  }

  suffix = getSuffix(centNumStr);

  return centNumStr.concat(suffix);
}




console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(10));          // "1st"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
