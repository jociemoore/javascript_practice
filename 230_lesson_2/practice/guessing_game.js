
document.addEventListener('DOMContentLoaded', function() {
  var answer = Math.floor(Math.random() * 100) + 1;
  var submitBtn = document.getElementsByTagName('input')[1];
  var newGameBtn = document.getElementsByTagName('a')[0];
  var paragraph = document.querySelector('p');

  submitBtn.addEventListener('click', compare);
  newGameBtn.addEventListener('click', start);

  function compare(event) {
    event.preventDefault();
    var guess = parseInt(document.getElementById('guess').value, 10);
    var message;

    if (guess > answer) {
      message = "My number is lower than " + String(guess);
    } else if (guess < answer) {
      message = "My number is higher than " + String(guess);
    } else {
      message = String(guess) + " is my number!"
    }

    paragraph.textContent = message;
  }

  function start(event) {
    // event.preventDefault();
    answer = Math.floor(Math.random() * 100) + 1;
    paragraph.textContent = "Guess a number from 1 to 100"; 
    // yes, this code will work because it will reassign the old message in paragraph.textContent to this new one.
  }

  start();
});