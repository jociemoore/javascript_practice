// Strings to numbers
Number('1');   // 1
Number('abc123');  // NaN

parseInt('123', 10);  // 123
parseInt('123.12', 10);  // 123
parseInt('123.12');  // 123
parseFloat('123.12');  // 123.12




// Numbers to strings
String(123);
String(1.23);

(123).toString();
(123.12).toString();

// not recommended
123 + '';
'' + 123.12;




// Booleans to strings
String(true);
String(false);

true.toString();
false.toString();




// Primatives to Booleans
var a = 'true';
var b = 'false';
a === 'true';
b === ' true';

Boolean(null); // false
Boolean(NaN);  // false
Boolean(0);  // false
Boolean('');  // false
Boolean(false);  // false
Boolean(undefined); // false
Boolean('abc'); // true
Boolean(123); // true
Boolean('true') // true
Boolean('false'); // true

!!(null);
!!(NaN);
!!(0);
!!('');
!!(false);
!!(undefined);
!!('abc');
!!(123);
!!('true');
!!('false');