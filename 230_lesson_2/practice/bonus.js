document.addEventListener('DOMContentLoaded', function() {
  var answer, guesses;
  
  var form = document.querySelector('form');
  var input = document.querySelector('#guess');
  var paragraph = document.querySelector('p');
  var link = document.querySelector('a');
  var submitBtn = document.getElementsByTagName('input')[1];

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = "Guess a number from 1 to 100";
    toggleBtn();

  }

  function toggleBtn() {
    var isdisabled = submitBtn.getAttribute('disabled');

    submitBtn.classList.toggle('disable');

    if (isdisabled) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disabled', true);
    }
  }
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!input.value.match(/\d+/)) {
      paragraph.textContent = "Please enter a valid number";
      return;
    } else {
      var guess = parseInt(input.value, 10);
      var message;

      guesses++;
    
      if (guess === answer) {
        message = 'You guessed it! It took you ' + guesses + ' guesses.';
        toggleBtn();
      } else if (guess > answer) {
        message = 'My number is lower than ' + guess;
      } else {
        message = 'My number is higher than ' + guess;
      }
      
      paragraph.textContent = message;
    }
  });

  link.addEventListener('click', function(event) {
    event.preventDefault();
    newGame();
  });
  
  newGame();
});