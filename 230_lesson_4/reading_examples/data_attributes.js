$(function() {

  // Example 1
  
  var $a = $('a[data-block=gold]');

  console.log($a.attr('data-block'));     // gold
  console.log($a.data('block'));          // gold

  $a.data('block', 'silver');

  console.log($a.attr('data-block'));     // gold
  console.log($a.data('block'));          // silver








  // Practice 1

  $('a').click(function(e) {
    e.preventDefault();
    var target = e.target;

    $('article').css('display', 'none');

    if ($(target).attr('data-block') === 'gold') {
      $('article[data-block=gold]').css('display', 'block');
    } else if ($(target).attr('data-block') === 'silver') {
      $('article[data-block=silver]').css('display', 'block')
    } else if ($(target).attr('data-block') === 'bronze') {
      $('article[data-block=bronze]').css('display', 'block');
    }
  });



  // Alternative 

  // $('a').on('click', function(e) {
  //   e.preventDefault();

  //   $('article').hide().filter('[data-block=]' + $(this).attr('data-block') + ']').show();
  // })








  // Plain JS Alternative
  
  var gold = document.getElementById('gold');
  
  console.table(gold.dataset);
  gold.dataset.block = 'silver';
  gold.dataset.sponsor = 'Newmans\'s Own';
  delete gold.dataset.block;


});