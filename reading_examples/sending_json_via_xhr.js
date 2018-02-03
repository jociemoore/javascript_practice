// Example 1 - send string

var request = new XMLHttpRequest();
request.open('POST', 'http://ls-230-book-catalog.herokuapp.com/books');

var data = 'title=Programming%20Ruby&author=Dave%20Thomas';

request.send(data);










// Example 2 - send JSON

var request = new XMLHttpRequest();
request.open('POST', 'http://ls-230-book-catalog.herokuapp.com/books');
request.setRequestHeader('Content-Type', 'application/json');

var data = { title: 'Programming Ruby', author: 'Dave Thomas' };
var json = JSON.stringify(data);

request.send(json);