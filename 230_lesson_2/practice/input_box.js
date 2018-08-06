var cursorToggle;

document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('.text-field');

  document.addEventListener('click', function(event) {
    var target = event.target;

    if (target.classList.contains('text-field') ||
        target.classList.contains('content')) {
      textField.classList.add('focused');

      if (!cursorToggle) {
        cursorToggle = setInterval(function() {
          textField.classList.toggle('cursor');
        }, 500);
      }
    } else {
      clearInterval(cursorToggle);
      cursorToggle = null;
      textField.classList.remove('focused');
      textField.classList.remove('cursor');
    }
  });

  document.addEventListener('keydown', function(event) {
    var contentField = document.querySelector('.content');
    var content = contentField.textContent;
    var key = event.key;

    if (textField.classList.contains('focused')) {
      if (event.which === 8) {
        event.preventDefault();
        contentField.textContent = content.slice(0, content.length - 1);
      } else {
        contentField.textContent = content + key;
      }
    }
  });
});


