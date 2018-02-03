$(function() {
  var target;
  var $bio;

  function toggleModal(e, target) {
      e.preventDefault();
      $bio.fadeToggle(200);
  }

  $(document).click(function(e) {
    target = e.target;

    if ($(target).is('#team a > img') ||
        $(target).is('#team li > div') ||
        $(target).attr('class') === 'close') {
      $bio = $(target).parents('li').find('div');
      toggleModal(e, target);
    }
  });

  $(document).keyup(function(e) {
    var key = e.which;

    if (key === 27 && $bio.css('display') === 'block') {
     toggleModal(e, target);
    }
  });
});