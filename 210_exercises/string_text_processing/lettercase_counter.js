
function letterCaseCount(str) {
  var stats = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  str.split('').forEach(function (letter) {
    if (letter.match(/[A-Z]/)) {
      stats.uppercase += 1;
    } else if (letter.match(/[a-z]/)) {
      stats.lowercase += 1;
    } else {
      stats.neither += 1;
    }
  });

  return stats;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
