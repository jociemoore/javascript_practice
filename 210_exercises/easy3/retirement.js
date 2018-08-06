function calculateRetiremmentYear(currentAge, targetAge) {
  var currentYear = new Date().getFullYear();
  var workingYearsLeft = targetAge - currentAge;
  var retirmentYear = currentYear + workingYearsLeft;

  console.log('It\'s ' + currentYear + '. You will retire in ' + retirmentYear + '.');
  console.log('You have only ' + workingYearsLeft + ' years of work to go!');
}

var currentAge = parseInt(prompt('What is your age? '), 10);
var targetAge = parseInt(prompt('At what age would you like to retire? '), 10);

calculateRetiremmentYear(currentAge, targetAge);






///////////////////////
// Further Exploration
///////////////////////


// Without the 'new' keyword on line 2, a TypeError will be thrown. 'Date()' will give you the current date as a string, so you cannot call any Date methods, such as getFullYear(), because it would not be a Date object.