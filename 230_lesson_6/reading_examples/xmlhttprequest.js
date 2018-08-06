// Example 1

var request = new XMLHttpRequest();
request.open('GET', '/path');
request.send();

request.responseText;   // null
request.status;         // null
request.statusText;     // null



// After request completes, the following are set to the values from the response.

// request.responseText;
// request.status;
// request.statusText;
// request.getResponseHeader('Content-Type');
// request.readyState;


request.addEventListener('load', function(event) {
  var request = event.target; // the XMLHttpRequest object

  request.responseText;
  request.status;
  request.statusText;
  request.getResponseHeader('Content-Type');
  request.readyState;

});