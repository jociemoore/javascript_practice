// Example 1

var str = 'cast';
if (str.match(/s/)) {
  console.log("matched 's'");
}

if (str.match(/x/)) {
  console.log("matched 'x");
}






// Example 2 
if (text.mathc(/\t/)) {
  console.log('has tab');
}





// Example 3
var text = 'xyx';
if (text.match(/[^x]/)) {
  console.log('matched');
}






// Example 4 
if ('Four score'.match(/\s/)) {
  console.log('matched 1');
}
if ('Four\tscore'.match(/\s/)) {
  console.log('matched 2');
}
if ('Four-score\n'.match(/\s/)) {
  console.log('matched 3');
}
if ('Four-score'.match(/\s/)) {
  console.log('matched 4');
}






// Example 5

if ('a b'.match(/\S/)) {
  console.log('matched 1');
}

if (' \t\n\r\f\v'.match(/\S/)) {
  console.log('matched 2');
}






// Example 6 
if (text.match(/^https?:\/\/\S+$/)) {
  fetch_url(text);
}





// Example 7 
var record = 'xyzzy\tt3456\t334\tabc';
var fields = record.split('\t');

// [''xyzzy', '3456', '334', 'abc']






// Example 8
var record = 'xyzzy 3456 \t 334\t\t\tabc';
var fields = record.split(/\s+/);

//['xyzzy','3456','334','abc']





// Example 9 - CAREFUL!
'abc:xyz'.split(/:*/);

// ['a', 'b', 'c', 'x', 'y', 'z']





// Example 10 - capturing group
/(['"]).+?\1/







// Example 11 
var text = 'Four score and seven';
var vowelless = text.replace(/[aeiou]/g, '');

// 'Fr scr nd svn'






// Example 12
var text = 'We read " War of the Worlds".';
console.log(text.replace(/(['"]).+\1/), '$1The Time Machine $1');

// We read "The Time Machine". 

