// ------------
// Question #1
// ------------

function startCounting() {
  var num = 0;
  return setInterval(function() {
    console.log(num += 1);
  }, 1000);
}










// ------------
// Question #2
// ------------

function stopCounting(action) {
  clearInterval(action);
}



var test = startCounting();