// ------------
// Question #1
// ------------

function delayLog() {
  for (var i = 1; i <= 10; i += 1) {
    setTimeout(function (i) {
      return function() {
        console.log(i + ' seconds later');
      }
    }(i), i * 1000);
  }
}

delayLog();











// ------------
// Question #2
// ------------

setTimeout(function() {   // 1
  console.log("Once");    // 5 
}, 1000);

setTimeout(function() {   // 2
  console.log("upon");    // 7
}, 3000);

setTimeout(function() {   // 3
  console.log("a");       // 6
}, 2000);

setTimeout(function() {   // 4
  console.log("time");    // 8
}, 4000);











// ------------
// Question #3
// ------------

setTimeout(function() {
  setTimeout(function() {
    q();                     // 7
  }, 15);

  d();                       // 3

  setTimeout(function() {
    n();                     // 5
  }, 5);

  z();                       // 4
}, 10);

setTimeout(function() {
  s();                       // 6
}, 20);

setTimeout(function() {
  f();                       // 2
});

g();                         // 1











// ------------
// Question #4
// ------------

function afterNSeconds(callback, time) {
  setTimeout(callback, time * 1000);
}

function test() {
  console.log('this is a test');
}

afterNSeconds(test, 3);








