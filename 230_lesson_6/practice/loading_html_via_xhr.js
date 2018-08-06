document.addEventListener('DOMContentLoaded', function() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');
  request.send();

  request.addEventListener('load', function() {
   var store = document.getElementById('store');
   store.innerHTML = request.response;
  });



  store.addEventListener('submit', function(event) {
    event.preventDefault();

    var request = new XMLHttpRequest();




    //////////////////////////
    // USING FORMDATA
    //////////////////////////

    // var form = event.target;
    // var data = new FormData(form);

    // request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action'));
    // request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
    // request.send(data);





    //////////////////////////
    // USING JSON API
    //////////////////////////

    request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

    var data = { 
      name: 'blanket',
      sku: 'b10',
      price: 10000
    };
    var json = JSON.stringify(data);

    request.send(json);




  });

  

  store.addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName != 'A') {
      return;
    }

    event.preventDefault();

    var request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));
    request.send();

    request.addEventListener('load', function(event) {
      store.innerHTML = request.response;
    });
  });
});



// The form was not initially being handled correctly because the click event is on anchors and "save" is a button. Therefore, the default behavior execution is not prevented and a POST request to https://ls-230-web-store-demo.herokuapp.com/products/1 is made.