/*
INPUT: two decimal-looking numbers

OUTPUT: -1, 0, 1 

RULES:
- v1 < v2                   --> -1
- v1 === v2                 --> 0
- v1 > v2                   --> 1
- v1 !== # . || v2 !== # .  --> null

DATA STRUCTURE: 
- input: strings
- internally: array delimited by .
- output: number

ALGORITHM:
- guard clause: check digit values with regex
- convert string to array delimited by .
- iterate through each array simultaneously, and compare the values in the corresponding positions until one is greater than the other or you reach the end of both arrays
- value comparison by index position (can have a default of 0 because guard clause already weeded null inputs out).
  - v1 < v2         --> -1
  - v1 === v2       --> 0
  - v1 > v2         --> 1
*/






function compareDigits(v1Digit = 0, v2Digit = 0) {
  v1Digit = Number(v1Digit);
  v2Digit = Number(v2Digit);
  var result;

  if (v1Digit === v2Digit) {
    result = 0;
  } else if (v1Digit < v2Digit) {
    result = -1;
  } else {
    result = 1;
  }

  return result;
 }


function compareVersions(v1, v2) {
  var i; 

  if (!v1.match(/^[\d.]+$/) || !v2.match(/^[\d.]+$/)) {
    return null;
  }

  v1 = v1.split('.');
  v2 = v2.split('.');
  i = 0;

  while (compareDigits(v1[i], v2[i]) === 0 ) {
    if ((i > v1.length - 1) && (i > v2.length - 1)) {
      break;
    }

    i += 1;
  }

  return compareDigits(v1[i], v2[i]);
}







compareVersions('1.A', '13.37');        // null
compareVersions('1.+', '13.37');        // null
compareVersions('', '13.37');           // null

compareVersions('1.0', '1.1');          // -1
compareVersions('0.1', '1');            // -1
compareVersions('1.2.0.0', '1.18.2');   // -1

compareVersions('13.37', '1.18.2');     // 1
compareVersions('1.2', '1.1');          // 1

compareVersions('1.1', '1.1');          // 0
compareVersions('1', '1.0');            // 0
compareVersions('1.2', '1.2.0.0');      // 0



