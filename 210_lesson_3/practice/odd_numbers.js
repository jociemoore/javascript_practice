function oddNumbers(int) {
  for (var i = 1; i <= int; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

oddNumbers(10);









////////////////////////////
// Further Exploration 1
////////////////////////////


function oddNumbers(int) {
  for (var i = 1; i <= int; i += 2) {
    console.log(i);
  }
}

oddNumbers(10);






////////////////////////////
// Further Exploration 2
////////////////////////////


function oddNumbers(int) {
  for (var i = 1; i <= int; i++) {
    if (i % 2 === 0) {
      continue;
    }
    
    console.log(i);
  }
}

oddNumbers(10);
