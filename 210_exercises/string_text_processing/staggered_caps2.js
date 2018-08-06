
function staggeredCase(str) {
  var letters = str.split('');
  var last = '';

  return letters.map(function (char, index) {
    if (index === 0) {
      char = char.toUpperCase();
      last = char;
    } else if (last.match(/[A-Z]/) && char.match(/[A-Za-z]/)) { 
      char = char.toLowerCase();
      last = char;
    } else if (last.match(/[a-z]/) && char.match(/[A-Za-z]/)) {
      char = char.toUpperCase();
      last = char;
    }

    return char;
  }).join('');
}





console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
