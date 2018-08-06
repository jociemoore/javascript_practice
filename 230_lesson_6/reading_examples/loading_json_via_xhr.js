// Example 1 - using JSON.parse

var request = new XMLHttpRequest();
request.open('GET', 'http://ls-230-book-catalog.herokuapp.com/invalid_book');
request.addEventListener('load', function(event) {
  try {
    var data = JSON.parse(request.response);
    // do something with the data
  } catch(e) {
    console.log('Cannot parse the received response as JSON.');
  }
});
request.send();











// Example 2  - using responseType

var request = new XMLHttpRequest();
request.open('GET','http://ls-230-book-catalog.herokuapp.com/invalid_book');
request.responseType = 'json';
request.addEventListener('load', function(event) {
  // request.response will be equal to the response body or null

  var data = request.response;
});
response.send();
