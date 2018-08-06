var $apples = $('#apples');
var $message = $('#message');
var $letters = $('#letters');
var $guesses = $('#guesses');
var $body = $('body');
var $document = $(document);

$(document).on('click', function(e) {
  e.preventDefault();
  if ($(e.target).is('a')) {
    new Game();
  }
});

function Game() {
  this.incorrectGuesses = 0;
  this.lettersGuessed = [];
  this.correctGuesses = 0;
  this.selectedWordLetters;
  this.setSelectWordLetters(this.getRandomWord());
  if (this.selectedWordLetters !== []) {
    this.clearDisplay();
    this.createSpaces();
    this.bind();
  }
}

Game.prototype = {
  allowedWrongGuesses: 6,
  setSelectWordLetters: function(word) {
    if (!word) {
      this.displayEmptyDictionaryMessageOnly();
      this.selectedWordLetters.empty();
    } else {
      this.selectedWordLetters = word.toUpperCase().split('');
    }
  },
  getRandomWord: (function() {
    var dictionary = ['apple', 'banana', 'orange', 'pear'];
    return function() {
      var index = Math.floor(Math.random() * dictionary.length);
      return dictionary.splice(index, 1)[0];
    };
  })(),
  isNewValidKeypress: function(keycode, char) {
    var aCode = 97;
    var zCode = 122;
    return keycode >= aCode && keycode <= zCode &&
           !this.lettersGuessed.includes(char)
  },
  evaluateGuess: function(keycode) {
    var char = String.fromCharCode(keycode).toUpperCase();

    if (this.isNewValidKeypress(keycode, char)) { 
      this.addGuess(char);
      this.displayGuess(char);
    
      if (this.selectedWordLetters.includes(char)) {
        this.processGoodGuess(char);
      } else {
        this.processBadGuess();
      }
    }
  },
  processGoodGuess: function(char) {
    var self = this;

    this.selectedWordLetters.forEach(function(letter, index) {
      if (letter === char) {
        self.revealLetter(char, index);
        self.correctGuesses += 1;
      }
    });
  },
  processBadGuess: function() {
    this.incorrectGuesses += 1;
    this.removeApple();
  },
  addGuess: function(char) {
    this.lettersGuessed.push(char);
  },
  playerLost: function() {
    return this.incorrectGuesses === this.allowedWrongGuesses;
  },
  playerWon: function() {
    return this.correctGuesses === this.selectedWordLetters.length;
  },
  isDictionaryEmpty: function() {
    return dictionary.length === 0;
  },
  endGameWithLoss: function() {
    var message = 'Sorry! You\'re out of guesses';
    this.setClass('body', 'lost');
    this.displayMessage(message);
    this.unbind();
  },
  endGameWithWin: function() {
    var message = 'You won!';
    this.setClass('body', 'won');
    this.displayMessage(message);
    this.unbind();
  },
  clearDisplay: function() {
    $message.empty();
    $letters.find('span').remove();
    $guesses.find('span').remove();
    $apples.attr('class', 'guess0');
    $body.attr('class','');
  },
  createSpaces: function() {
    this.selectedWordLetters.forEach(function() {
      $('<span></span>').appendTo($letters);
    });
  },
  displayEmptyDictionaryMessageOnly: function() {
    $message.empty();
    this.displayMessage('Sorry, I\'ve run out of words!');
    $message.find('a').hide();
  },
  displayMessage: function(text) {
    $message.append('<p>' + text + '</p>');
    $message.append('<a href="#">Play another</a>');
  },
  displayGuess: function(char) {
    $('<span></span').appendTo($guesses).text(char);
  },
  removeApple: function() {
    $apples.attr('class', 'guess' + this.incorrectGuesses);
  },
  revealLetter: function(char, index) {
    $letters.find('span:nth-of-type(' + (index + 1)+ ')').text(char);
  },
  setClass: function(target, newClass) {
    $(target).addClass(newClass);
  },
  unbind: function() {
    $document.off('.game');
  },
  bind: function() {
    var self = this;

    $document.on('keypress.game', function(e) {
      e.preventDefault();
      self.evaluateGuess(e.which);
  
      if (self.playerLost()) {
        self.endGameWithLoss();
      } else if (self.playerWon()) {
        self.endGameWithWin();
      }
    });
  }
};


var game = new Game();
