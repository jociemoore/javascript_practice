document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('alert');
  button.addEventListener('click', function() {
    var msg = document.getElementById('message').value;
    alert(msg);
  });
});


/*
OR USE GLOBAL EVENT LISTENERS MIXIN

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('alert');
  button.onclick = displayAlert;
});

*/