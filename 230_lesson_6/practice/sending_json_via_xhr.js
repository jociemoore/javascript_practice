var request = new XMLHttpRequest();
request.open('POST', 'http://ls-230-book-catalog.herokuapp.com/books');
request.setRequestHeader('Content-Type', 'application/json');

var data = { title: 'Programming Ruby', author: 'Dave Thomas' };
var json = JSON.stringify(data);

request.send(json);



// This will send the following: 

// POST /books HTTP/1.1
// Host: ls-230-book-catalog.herokuapp.com
// Connection: keep-alive
// Content-Length: 51
// Pragma: no-cache
// Cache-Control: no-cache
// Origin: null
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36
// Content-Type: application/json
// Accept: */*
// Accept-Encoding: gzip, deflate
// Accept-Language: en-US,en;q=0.8

// { "title":"Programming Ruby", "author":"Dave Thomas" }









