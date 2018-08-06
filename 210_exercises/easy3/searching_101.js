function search(num, set) {
  var match = set.includes(num);

  if (match) {
    console.log('The number ' + num + ' appears in [' + set + '].');
  } else {
    console.log('The number ' + num + ' does not appear in [' + set + '].');
  }
}

var first = parseInt(prompt('Enter the 1st number: '));
var second = parseInt(prompt('Enter the 2nd number: '));
var third = parseInt(prompt('Enter the 3rd number: '));
var fourth = parseInt(prompt('Enter the 4th number: '));
var fifth = parseInt(prompt('Enter the 5th number: '));
var sixth = parseInt(prompt('Enter the 6th number: '));

var set = [first, second, third, fourth, fifth];

search(sixth, set);











////////////////////////
// Further Exploration
////////////////////////


function search(condition, set) {

  if (set.some(condition)) {
    console.log('[' + set + '] includes a number that meets this condition: \n\n' + condition);
  } else {
    console.log('No number in [' + set + '] meets this condition: \n\n' + condition);
  }
}

var first = parseInt(prompt('Enter the 1st number: '));
var second = parseInt(prompt('Enter the 2nd number: '));
var third = parseInt(prompt('Enter the 3rd number: '));
var fourth = parseInt(prompt('Enter the 4th number: '));
var fifth = parseInt(prompt('Enter the 5th number: '));

var set = [first, second, third, fourth, fifth];

search(function (num) {
  return num % 2 === 0;
}, set);



