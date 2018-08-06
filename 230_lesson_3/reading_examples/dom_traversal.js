$(function() {
  // Example 1
  var $p = $('p');
  $p.parent('.highlight').css('color', 'blue');




  // Example 2
  // $('#javascript').closest('ul').addClass('categories');




  // Example 3
  $('#javascript').parents('ul').addClass('categories');




  // Example 4
  console.log($('ul#navigation').find('li').length);
  console.log($('ul#navigation').children().length);




  // Example 5
  var $css = $('#css').closest('li');
  $css.nextAll().hide();
  $css.prevAll().hide();




  // Example 6
  $css.siblings().show();
});
