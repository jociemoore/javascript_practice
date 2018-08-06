$(function() {
  var allShapes = [];

  function createShapeElement(selectedShape) {
    var $newShape = $('<div></div').appendTo('#canvas');

    switch (selectedShape) {
      case 'circle':
        $newShape.attr('class', 'circle');
        break;
      case 'star':
        $newShape.attr('class', 'star');
        break;
      default: 
        $newShape.attr('class', 'square');
        break;
    }

    return $newShape;
  }

  function positionShape($shape, x, y) {
    if (!y) { y = 0; }
    if (!x) { x = 0; }

    $shape.css({
      'top': y + 'px',
      'left': x + 'px'
    });
  }

  function saveShape($shape, startX, startY, endX, endY, duration) {
    allShapes.push({
      shape: $shape,
      startY: startY,
      startX: startX,
      endY: endY,
      endX: endX,
      duration: duration
    });
  }

  function beginAnimation() {
    allShapes.forEach(function(elem) {
      var $currentShape = elem.shape;

      positionShape($currentShape, elem.startX, elem.startY);
      
      $currentShape.animate({
        top: elem.endY + 'px',
        left: elem.endX + 'px'
      }, Number(elem.duration));
    });
  }

  function stopAnimation() {
    $('div').children().stop();
  }

  $('form').submit(function(event){
    event.preventDefault();

    var startCoordinates = $('#startCoordinates input[type=number]');
    var endCoordinates = $('#endCoordinates input[type=number]');
    var startX = $(startCoordinates[0]).val();
    var startY = $(startCoordinates[1]).val();
    var endX = $(endCoordinates[0]).val();
    var endY = $(endCoordinates[1]).val();
    var selectedShape = $(':checked').val();
    var duration = $('#duration input').val() || 1000;
    console.log(duration)
    var $shape = createShapeElement(selectedShape);

    positionShape($shape, startX, startY);
    saveShape($shape, startX, startY, endX, endY, duration);
    $('form').get(0).reset();
  });

  $('a').click(function(e) {
    e.preventDefault();
    var $target = $(e.target);

    if ($target.text() === 'Start') {
      stopAnimation();
      beginAnimation();
    } else if ($target.text() === 'Stop') {
      stopAnimation();
    }
  });
});



