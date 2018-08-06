$(function() {
  $('input[type=checkbox]').change(function(e) {
    var category = $(this).val();
    var isChecked = $(this).prop('checked');
    var $games = $('main li');

    $games = $games.filter(function(i) {
      var game = $games[i];
      return $(game).attr('data-category') === category;
    });

    if (isChecked) {
      $games.show();
    } else {
      $games.hide();
    }
  });
});