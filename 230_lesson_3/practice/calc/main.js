function $(id) {
  return document.getElementById(id);
}

document.addEventListener('DOMContentLoaded', function() {
  $('calc').addEventListener('submit', function(e) {
    e.preventDefault();

    var num1 = parseInt($('numerator').value, 10);
    var num2 = parseInt($('denominator').value, 10);
    var op = $('operator').value;
    var h1 = $('result');
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
    
    h1.textContent = result;
  });
});