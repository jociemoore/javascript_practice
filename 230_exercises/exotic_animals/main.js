$(function() {
  $('img').on({
    mouseover: function(e) {
      this.timeout = setTimeout(function() {
        showCaption(e);
      }, 2000);
    },
    mouseout: function(e) {
      clearTimeout(this.timeout);
      hideCaption(e);
    }
  });

  function showCaption(e) {
    var $target = $(e.target);
    $target.next().fadeIn();
  }

  function hideCaption(e) {
    var $target = $(e.target);
    $target.next().fadeOut();
  }
});