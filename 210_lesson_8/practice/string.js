// ------------
// Question #1
// ------------

var firstname = 'Jocie';
var lastname = 'Moore';
var fullname = firstname.concat(' ', lastname);

console.log(fullname);






// ------------
// Question #2
// ------------

var firstname = 'Jocie';
var lastname = 'Moore';

console.log(firstname.concat(lastname));







// ------------
// Question #3
// ------------

var firstname = 'Jocie';
var lastname = 'Moore';
var fullname = firstname.concat(' ', lastname);
var nameArray = fullname.split(' ');

console.log(nameArray);






// ------------
// Question #4
// ------------

var language = 'JavaScipt';
var idx = language.indexOf('S');

console.log(idx);






// ------------
// Question #5
// ------------

var language = 'JavaScipt';
var idx = language.indexOf('S');
var charCode = language.charCodeAt(idx);

console.log(charCode);







// ------------
// Question #6
// ------------

var language = 'JavaScipt';
var idx = language.indexOf('S');
var charCode = language.charCodeAt(idx);

console.log(String.fromCharCode(charCode));






// ------------
// Question #7
// ------------

var language = 'JavaScipt';

console.log(language.lastIndexOf('a'));






// ------------
// Question #8
// ------------

var a = 'a';
var b = 'b';

console.log(a > b);

b = 'B';

console.log(a > b);







// ------------
// Question #9
// ------------

var language = 'JavaScipt';
var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));






// ------------
// Question #10
// ------------

var language = 'JavaScipt';
var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));







// ------------
// Question #11
// ------------

var fact1 = 'Javascript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);

console.log(compoundSentence);






// ------------
// Question #12
// ------------

var fact1 = 'Javascript is fun';
var fact2 = 'Kids like it too';

console.log(fact1[0], fact2[0]);







// ------------
// Question #13
// ------------

var pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));






// ------------
// Question #14
// ------------

var boxNumber = 356.toString();

console.log(boxNumber);


var boxNumber = 356..toString();

console.log(boxNumber);


var boxNumber = (356).toString();

console.log(boxNumber);






// ------------
// Question #15
// ------------

var boxNumber = (356).toString();
boxNumber = Number.parseInt(boxNumber, 10);

console.log(typeof boxNumber);

boxNumber = String(boxNumber);

console.log(typeof boxNumber);







// ------------
// Question #16
// ------------

function greeting() {
  var name = prompt('What is your name?');

  if (name.endsWith('!')) {
    console.log('HELLO ' + 
                 name.slice(0, name.length - 1).toUpperCase() +
                 '. WHY ARE WE SCREAMING?');
  } else {
    console.log('Hello ' + name + '.');
  }

}

greeting();

