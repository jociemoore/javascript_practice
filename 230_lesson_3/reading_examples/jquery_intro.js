// Example 1 - DOM ready callback

$(document).ready(function() {
  // DOM is ready; img tags not loaded
});









// Example 2 - window ready callback

$(window).ready(function() {
  // DOM is ready; img tags loaded too
});








// Example 3 - shortcut

$(function() {
  // DOM is ready
});








// Example 4

var $content = jQuery('#content');
var $sameContent = $('#content');








// Example 5 

console.log($content.jquery);








// Example 6

$content.css('font-size', '18px');          // setter
console.log($content.css('font-size'));     // getter








// Example 7

var width = $content.width();
$content.width(width / 2);
console.log($content.width());








// Example 8 - Multiple CSS properties

$content.css({
  'font-size': '18px',   // if given as a number, jQuery will convert to string and add 'px'
  color: '#b00b00'
});








// Example 9 - Alternate formatting

$content.css({
  fontSize: '18px',
  color: '#b00b00'
});













