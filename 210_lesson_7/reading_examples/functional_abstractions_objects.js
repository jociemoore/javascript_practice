// Example 1

var myObject = { a: 1, b: 2, c: 3 };

Object.keys(myObject).forEach(function (key) {
  console.log('key: ' + key + ', value: ' + String(myObject[key]));
}); 


// logs
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3








// Example 2

var myObject = { a: 1, b: 2, c: 3 };
var keys = Object.keys(myObject);            // ["a", "b", "c"]
var values = Object.keys(myObject).map(function (key) {
  return myObject[key];
});                                          // [1, 2, 3]










// Example 3 - map

function doubleObjectValues(object) {
  var newObject = {};
  Object.keys(object.forEach(function (key) {
    newObject[key] = object[key] * 2;           // side effect
  });

  return newObject;
}

doubleObjectValues({ a: 1, b: 2, c: 3 });       // { a: 2, b: 4, c: 6 } 











// Example 4 - filter

function keepEvenValues(object) {
  var newObject = {};
  Object.keys(object).forEach(function (key) {
    if (object[key] % 2 === 0) {
      newObject[key] = object[key];             // side effect
    }
  });

  return newObject;
}

keepEvenValues({ a: 1, b: 2, c: 3 });            // { b: 2 }











// Example 5 - reduce

function getTotalFromInvoice(invoice) {
  var total = { total: 0 };
  Object.keys(invoice).forEach(function (key) {
    total.total += invoice[key];
  });

  return total;
}

getTotalFromInvoice({ phone: 1000, internet: 8000, tax: 3000 });

// returns { total: 21000 }


















