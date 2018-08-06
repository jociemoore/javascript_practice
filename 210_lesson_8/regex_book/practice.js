// ------------
// Question #1
// ------------

function isUrl(text) {
  return !!(text.match(/^https?:\/\/\S+$/));
}


isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false






// ------------
// Question #2
// ------------

function fields(text) {
  return text.split(/[ \s+,]+/);
}


fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

fields("Pete \t 201");
// -> ['Pete', '201']







// ------------
// Question #3
// ------------

function mysteryMath(text) {
  return text.replace(/[+\-*\/]/, '?');
}


mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'








// ------------
// Question #4
// ------------

function mysteriousMath(text) {
  return text.replace(/[+\-*\/]/g, '?');
}


mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'







// ------------
// Question #5
// ------------

function danish(text) {
  return text.replace(/\bapple\b|\bblueberry\b|\bcherry\b/, 'danish');
}

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'









// ------------
// Question #6
// ------------

function formatDate(text) {
  return text.replace(/(\d{4})\-(\d{2})\-(\d{2})/g, '$3.$2.$1');
}


formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)








// ------------
// Question #7
// ------------

function format_date(text) {
  return text.replace(/(\d{4})([-\/])(\d{2})(\2)(\d{2})/g, '$5.$3.$1');
}


format_date('2016-06-17'); // -> '17.06.2016'
format_date('2017/05/03'); // -> '03.05.2017'
format_date('2015/01-31'); // -> '2015/01-31' (no change)











