function generatePattern(n) {
  var count = 1;
  var numsStr = '';
  var starsStr = '';
  while (n > 0) {
    numsStr += String(count);
    starsStr = '*'.repeat(n-1);
    console.log(numsStr + starsStr);
    n--;
    count++;
  }
}


// argument: 1-9
generatePattern(7);






/////////////////////////
// Further Exploration
/////////////////////////



function generatePattern(n) {
  var count = 1;
  var numsStr = '';
  var starsStr;
  var doubleDigitStars = n - 9;
  while (n > 0) {
    starsStr = '';
    starsStr += '*'.repeat(n - 1) + '*'.repeat(doubleDigitStars);
    numsStr += String(count);
    console.log(numsStr + starsStr);
    n--;
    if (n <= doubleDigitStars) doubleDigitStars--;
    count++;
  }
}

generatePattern(15);
