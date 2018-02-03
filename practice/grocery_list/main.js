$(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    var item = $('input[type=text]')[0].value;
    var quantity = $('input[type=text]')[1].value || 1;

    $('ul').append('<li>' + quantity + ' ' + item + '</li>');
    $('form').get(0).reset();
  });
});