$(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var keyCode = $('input[type=text]').val().charCodeAt(0);

    $(document).off('keypress').on('keypress', function(e) {
      if (e.which !== keyCode) {
        return;
      }
      $('a').trigger('click')
    });
  });

  $('a').click(function(e) {
    e.preventDefault();
    $('#accordion').slideToggle();
  });
});