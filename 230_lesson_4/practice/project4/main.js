var $apples = $('#apples');
var $message = $('#message');
var $letters = $('#letters');
var $guesses = $('#guesses');
var $body = $('body');
var $document = $(document);

$(document).on('click', function(e) {
  e.preventDefault();
  if ($(e.target).is('a')) {
    Object.create(Game).init();
  }
});

var Game = (function() {
  var dictionary = ['apple', 'banana', 'orange', 'pear'];
  var allowedWrongGuesses = 6;
  var incorrectGuesses;
  var lettersGuessed;
  var correctGuesses;
  var selectedWordLetters;

  function setSelectWordLetters(word) {
    selectedWordLetters = word.toUpperCase().split('');
  }

  var getRandomWord = (function() {
    return function() {
      var index = Math.floor(Math.random() * dictionary.length);
      return dictionary.splice(index, 1)[0];
    };
  })();
  
  function isNewValidKeypress(keycode, char) {
    var aCode = 97;
    var zCode = 122;
    return keycode >= aCode && keycode <= zCode &&
           !lettersGuessed.includes(char)
  }

  function evaluateGuess(keycode) {
    var char = String.fromCharCode(keycode).toUpperCase();

    if (isNewValidKeypress(keycode, char)) { 
      addGuess(char);
      displayGuess(char);
    
      if (selectedWordLetters.includes(char)) {
        processGoodGuess(char);
      } else {
        processBadGuess();
      }
    }
  }

  function processGoodGuess(char) {
    selectedWordLetters.forEach(function(letter, index) {
      if (letter === char) {
        revealLetter(char, index);
        correctGuesses += 1;
      }
    });
  }

  function processBadGuess() {
    incorrectGuesses += 1;
    removeApple();
  }

  function addGuess(char) {
    lettersGuessed.push(char);
  }
  
  function playerLost() {
    return incorrectGuesses === allowedWrongGuesses;
  }
  
  function playerWon() {
    return correctGuesses === selectedWordLetters.length;
  }

  function isDictionaryEmpty() {
    return dictionary.length === 0;
  }

  function endGameWithLoss() {
    var message = 'Sorry! You\'re out of guesses';
    setClass('body', 'lost');
    displayMessage(message);
    unbind();
  }
  
  function endGameWithWin() {
    var message = 'You won!';
    setClass('body', 'won');
    displayMessage(message);
    unbind();
  }

  function clearData() {
    incorrectGuesses = 0;
    correctGuesses = 0;
    lettersGuessed = [];
  }

  function clearDisplay() {
    $message.empty();
    $letters.find('span').remove();
    $guesses.find('span').remove();
    $apples.attr('class', 'guess0');
    $body.attr('class','');
  }

  function createSpaces() {
    selectedWordLetters.forEach(function() {
      $('<span></span>').appendTo($letters);
    });
  }

  function displayEmptyDictionaryMessageOnly() {
    $message.empty();
    displayMessage('Sorry, I\'ve run out of words!');
    $message.find('a').hide();
  }

  function displayMessage(text) {
    $message.append('<p>' + text + '</p>');
    $message.append('<a href="#">Play another</a>');
  }

  function displayGuess(char) {
    $('<span></span').appendTo($guesses).text(char);
  }

  function removeApple() {
    $apples.attr('class', 'guess' + incorrectGuesses);
  }

  function revealLetter(char, index) {
    $letters.find('span:nth-of-type(' + (index + 1)+ ')').text(char);
  }

  function setClass(target, newClass) {
    $(target).addClass(newClass);
  }

  function unbind() {
    $document.off('.game');
  }

  function bind() {
    $document.on('keypress.game', function(e) {
      e.preventDefault();
      evaluateGuess(e.which);
  
      if (playerLost()) {
        endGameWithLoss();
      } else if (playerWon()) {
        endGameWithWin();
      }
    });
  }

  return {
    init: function() {
      if (isDictionaryEmpty()) {
        displayEmptyDictionaryMessageOnly();
        return;
      }
      
      setSelectWordLetters(getRandomWord());
      clearData();
      clearDisplay();
      createSpaces();
      bind();
    },
  }
})();

var game = Object.create(Game).init();
