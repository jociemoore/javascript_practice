function isGregorianLeapYear(year) {
  var result;

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

function isJulianLeapYear(year) {
  return year % 4 === 0;
}

function isLeapYear(year) {
  var result = '';

  if (year <= 0) { 
    result = 'Not a valid year.'; 
  } else if (year < 1752) {
    result = isJulianLeapYear(year);
  } else {
    result = isGregorianLeapYear(year);
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
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true
console.log(isLeapYear(-100));      // 'Not a valid year.'
console.log(isLeapYear(0));         // 'Not a valid year.'





/////////////////////////
// Further Explortion
/////////////////////////

// Time -- it never would occurred to me to stop and consider how its calculated and clearly, I take it for granted. I find it very interesting how something that now seems so established and universal is ultimately still a human construction and has varied so widely country to country during different periods of history.



