// Example 1 - indexOf

var language = 'Javascript';

language.indexOf('S');    // 4
language.indexOf('s');    // -1
language.indexOf('ipt');  // 7








// Example 2 - lastIndexOf

var state = 'Mississippi';

state.lastIndexOf('i');     // 10
state.lastIndexOf('s');     // 6
state.lastIndexOf('sp');    // -1







// Example 3 - replace

var state = 'Mississippi';

state.replace('s', 'q');      // "Miqsissippi"








// Example 4 - replace globally with regex

var state = 'Mississippi';

state.replace(/s/g, 'q');       // "Miqqiqqippi"







// Example 5 - split

var state = 'Mississippi';

state.split('');     // ["M", "i", "s", "s", "i", "s", "s", "i", "p", "p", "i"]
state.split('s');    // ["Mi", "", "i", "", "ippi"]
'1, 2, 3, 4, 5, 6'.split(', ');    // ["1", "2", "3", "4", "5", "6"]






// Example 6 - substr

var state = 'Mississippi';

state.substr(6);      // "sippi"
state.substr(-5);     // "sippi"
state.substr(6, 3)    // "sip"








// Example 7 - substring

var state = 'Mississippi';

state.substr(6, 3);       // "sip"
state.substring(6, 3);    // "sis"







// Example 8 - lowercase and uppercase

var exclamation = "Go team! We're number 1!";

exclamation.toUpperCase();     // "GO TEAM! WE'RE NUMBER 1!"
exclamation.toLowerCase();     // "go team! we're number 1!"





