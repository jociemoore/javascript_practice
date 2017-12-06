function isLeapYear(year) {
  var result;
  if (year <= 0) { return 'Not a valid year.'; }

  if (year % 400 === 0) {
    result = true;
  } else if (year % 100 === 0) {
    result = false;
  } else if (year % 4 === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}





console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
console.log(isLeapYear(-100));      // 'Not a valid year.'
console.log(isLeapYear(0));         // 'Not a valid year.'







/////////////////////////
// Further Exploration
/////////////////////////

function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}

// The above solution will fail for years divisble by 400;  the second if condition will never get reached because numbers divisble by 400 are also divisible by 100.





function isLeapYear(year) {
  var result;
  if (year <= 0) { return 'Not a valid year.'; }

  if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
    result = true;
  } else if (year % 100 === 0 && year % 400 !== 0) {
    result = false;
  } else if (year % 400 === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}


// Testing the conditions in this order is more complex.




