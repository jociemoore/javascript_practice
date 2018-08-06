
function staggeredCase(str) {
  return str.split('').map(function (char, index) {
    if (index % 2 === 0 && char.match(/[A-Za-z]/)) { 
      char = char.toUpperCase();
    } else if (char.match(/[A-Za-z]/)) {
      char = char.toLowerCase();
    }

    return char;
  }).join('');
}



console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
