var form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();





  /////////////
  // HARDCODED
  /////////////

  // var data = 'title=Effective%20JavaScript&author=David';





  /////////////
  // MANUALLY
  /////////////

  // var keysAndValues = [];

  // for (var i = 0; i < form.elements.length; i++) {
  //   var element = form.elements[i];
  //   var key = encodeURIComponent(element.name);
  //   var value = encodeURIComponent(element.value);
  //   keysAndValues.push(key + '=' + value);
  // }

  // var data = keysAndValues.join('&');





  /////////////
  // USING API
  /////////////

  var data = new FormData(form);







  var request = new XMLHttpRequest();
  request.open('POST', 'http://ls-230-book-catalog.herokuapp.com/books');
  // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request.addEventListener('load', function() {
    if (request.status === 201) {
      console.log('This book was added to the catalog: ' + request.responseText);
    }
  });

  request.send(data);
});
