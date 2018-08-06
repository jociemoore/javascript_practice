// ------------
// Question #1
// ------------

function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}





// ------------
// Question #2
// ------------

var x = -180;
console.log(Math.abs(x));








// ------------
// Question #3
// ------------

Math.sqrt(16777216);   // 4096








// ------------
// Question #4
// ------------

console.log(Math.pow(16, 6));   // 16777216







// ------------
// Question #5
// ------------

var a = 50.72;
var b = 49.2;
var c = 49.86;

Math.round(c);
Math.floor(a);
Math.ceil(b);







// ------------
// Question #6
// ------------

function getRandomNumBetween(min, max) {
  var temp; 
  var difference; 

  if (min === max) {
    return min;
  }

  if (min > max) {
    temp = min;
    min = max;
    max = temp;
  }

  max += 1;
  difference = max - min;

  return Math.floor(Math.random() * difference + min);
}

