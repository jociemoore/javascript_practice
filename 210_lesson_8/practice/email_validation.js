function isValidEmail(email) {
  return !!(email.match(/^[A-Za-z0-9]+@[A-Za-z]+(\.[A-Za-z]+)+$/));
  // return /^[A-Za-z0-9]+@[A-Za-z]+(\.[A-Za-z]+)+$/.test(email);
}





isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false
