$(function() {
  var $blinds = $('[id^=blind]');
  var speed = 250;
  var delay = 1500;

  $blinds.each(function(i) {
    var $blind = $blinds.eq(i);
    var totalDelay = (delay * i) + speed;
    var height = $blind.height();

    setTimeout(function() {
      $blind.animate({
        top: '+=' + height,
        height: '-=' + height
      }, speed)
    }, totalDelay);
  });
});