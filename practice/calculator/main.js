$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var num1 = parseInt($('input[type=number]')[0].value, 10);
    var num2 = parseInt($('input[type=number]')[1].value, 10);
    var op = $('select').val();
    var result;

    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      default:
        result = num1 / num2;
        break;
    }

    $('h1').text(result);
  });
});