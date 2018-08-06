// ------------
// Question #1
// ------------

var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';
request.addEventListener('load', function(e) {
  var data = request.response;
  console.log(request.status);
  console.log(data.open_issues);
});
request.send();











// ------------
// Question #2
// ------------

var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.addEventListener('load', function(e) {
  try {
    var data = JSON.parse(request.response);
    console.log(request.status);
    console.log(data.open_issues);
  } catch(e) {
    console.log('The request could not be completed!');
  }
});
request.send();