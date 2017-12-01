function totalArea(rectangles) {
  var calculateArea = function (rect) {
    var height = rect[0];
    var width = rect[1];
    return height * width;
  }

  var sum = function (total, area1) {
    return total += area1;
  }

  return rectangles.map(calculateArea).reduce(sum);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);    // 141











function totalSquareArea(rectangles) {
  // filter out non-square rectangles
  // call totalAres function

  var squares = rectangles.filter(function (rect) {
    return rect[0] === rect[1];
  });

  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles);    // 121



