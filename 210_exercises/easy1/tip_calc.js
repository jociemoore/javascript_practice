var bill = parseFloat(prompt('What is the bill? '));
var tipPercentage = parseFloat(prompt('What is the tip percentage?')) / 100;
var tip = bill * tipPercentage;
var total = bill + tip;

console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + total);