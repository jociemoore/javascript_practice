$(function() {
  var $thumbnails = $('li');
  var MAX_INDEX = 3;
  var MIN_INDEX = 0;
  var prev = $('a').first();
  var next = $('a').last();


  function advanceSlidesTo(index) {
    var $displayed = $('figure').find('img');
    var selected = $thumbnails[index];
    var selectedSrc;
    var selectedAlt;
    var selectedTitle;

    $displayed.fadeOut(200);
    $('.selected').removeClass('selected');
    $(selected).addClass('selected');

    selectedSrc = $(selected).find('img').attr('src');
    selectedAlt = $(selected).find('img').attr('alt');
    selectedTitle = $(selected).find('img').attr('title');

    $displayed.attr('src', selectedSrc);
    $displayed.attr('alt', selectedAlt);
    $displayed.attr('title', selectedTitle);
    $displayed.fadeIn(200);
  }

  function displayButtons(index) {
    if (index === MIN_INDEX) {
      $(prev).hide();
    } else if (index === MAX_INDEX) {
      $(next).hide();
    } else {
      $(prev).show();
      $(next).show();
    }
  }

  $thumbnails.click(function(e) {
    var $this = $(this);
    var index = $thumbnails.index($this);

    advanceSlidesTo(index);
  });

  $('a').click(function(e) {
    e.preventDefault();
    var index = $thumbnails.index($('.selected'));

    // OPTION 1 - LOOP THUMBNAILS
    if (e.target === prev[0]) {
      index = index <= 0 ? MAX_INDEX : index - 1;
    } else if (e.target === next[0]) {
      index = index >= 3 ? MIN_INDEX : index + 1;
    }

    // OPTION 2 - STOP AT MIN/MAX THUMBNAILS
    // if (e.target === prev[0]) {
    //   index = index - 1;
    // } else if (e.target === next[0]) {
    //   index = index + 1;
    // }
    // displayButtons(index);

    advanceSlidesTo(index);
  });
});



