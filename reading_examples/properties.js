// Example 1
var object = {
  a: 1,
  'foo': 2 + 1,
  'two words': 'this works too',
  true: true,
  b: {
    name: 'Jane',
    gender: 'female',
  },
  c: function () {
    return 2;
  },
}







// Example 2
var object = {
  a: "hello",
  b: "world",
};

object.a;    // "hello"
object['b']  // "world"
object.c     // undefined

var foo = {
  a: 1,
  good: true,
  'a name': 'hello',
  person: {
    name: 'Jane',
    gender: 'female',
  },
  c: function () {
    return 2;
  }
};

foo['a name'];    // "hello"
foo['goo' + 'd']; // true
var a = 'a';
foo[a];           // 1
foo.person.name;  // "Jane"
foo.c();          // 2








// Example 3
var object = {};

object.a = 'foo';
object.a;          // "foo"

object['a name'] = 'hello';
object['a name'];  // "hello"

object;            // { a: "foo", "a name": "hello" }









// Example 4
var object  = {};

object.a = 'foo';
object.a;          // "foo"

object.a = "hello";
object.a;          // "hello"

object['a'] = 'world';
object.a;          // "world"









// Example 5
var foo = {
  a: 'hello',
  b: 'world',
};

delete foo.a;
foo;          // { b: "world" }









// Example 6

var nick;

var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

for (nick in nicknames) {
  console.log(nick);
  console.log(nicknames[nick]);
}

// logs:
// joseph
// Joey
// margaret
// Maggie









// Example 7 
var nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
}

Object.keys(nicknames);      // ['joseph', 'margaret']
