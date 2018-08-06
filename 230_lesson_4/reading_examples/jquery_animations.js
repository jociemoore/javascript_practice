// Example 1  -  vanilla javascript

var frame_length = 13;  // delay between each frame
var speed  = 400;    // duration of animation in milliseconds
var steps = Math.round(speed / frame_length);
var end_top = 250;
var end_left = 500;
var $p = document.querySelector('p');   // 'p' has "position: absolute"
var i = 0;

var update = function() {
  $p.style.top = end_top * (i / steps) + 'px';
  $p.style.left - end_left * (i / steps) + 'px'
  i++;
  i < steps && setTimeout(update, frame_length);
};

update();   // start animation loop









// Example 2

$p.fadeIn(250, function() {
  $(this).addClass('visible');
});









// Example 3

$p.slideDown();
$p.slideUp(250);
$p.slideToggle(400, function() {
  console.log('Sliding complete!');
});









// Example 4

$p.slideToggle(400, 'linear', function() {
  console.log('Sliding complete!');
});










// Example 5 - options object

$p.slideToggle({
  duration: 400,
  easing: 'linear',
  complete: function() {
    console.log('Sliding complete!');
  }
});









// Example 6 - animating other CSS properties with method 1

$p.animate({
  left: 500,
  top:  250
}, 400, function() {
  $(this).text('All done!');
});











// Example 7 - animating other CSS properties with method 2

$p.animate({
  left: 500,
  top: 250
}, {
  duration: 1000,
  complete: function() {
    $(this).text('All done!');
  }
});










// Example 8  - chaining

$p.slideUp(250).fadeIn();

$p.slide(250).delay(500).slideDown(250);

$p.stop().fadeToggle(200);









// Example 9

$p. fadeIn(200).animate({
  left: 50,
  top: 50
}).finish();








