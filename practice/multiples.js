function multiplesOfThreeAndFive() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + "!");
    } else if (i % 3 === 0 || i % 5 === 0 ) {
      console.log(i);
    }
  }
}

multiplesOfThreeAndFive();











////////////////////////////
// Further Exploration 
////////////////////////////


function multiplesOfThreeAndFive(min, max) {
  for (var i = min; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + "!");
    } else if (i % 3 === 0 || i % 5 === 0 ) {
      console.log(i);
    }
  }
}

multiplesOfThreeAndFive(50, 70);
