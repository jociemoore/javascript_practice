
// Example 1 - Without event delegation

function clickHandler(event) {
  var message = document.getElementById('message');
  message.textContent = event.target.textContent + " was clicked!";
}

document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickHandler);
  }
});









// Example 2 - With event delegation

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    var message = document.getElementById('message');
    message.textContent = event.target.textContent + " was clicked!";
  }
});










// Example 3 - Multiple Cases gets messy (Note: not for this HTML)

document.addEventListener('click', function(event) {
  var tag = event.target.tagName;
  if (tag === 'BUTTON') {
    var message = document.getElementById('message');
    message.textContent = event.target.textContent + " was clicked!";
  } else if (tag === 'A') {
    event.preventDefault();
    event.target.classList.toggle('highlight');
  }
});







