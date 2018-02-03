// ** Cannot use querySelector or querySelectorAll

function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}







// ------------
// Question #5
// ------------

var imageCount = 0;
var pngCount = 0;

walk(document, function (node) {
  if (node.nodeName === 'IMG') {
    imageCount += 1;
  }
});

walk(document, function (node) {
  if (node.nodeName === 'IMG') {
    var ext = node.getAttribute('src').slice(-3).toLowerCase();
    if (ext === 'png') {
      pngCount += 1;
    }
  }
});

console.log(imageCount);
console.log(pngCount);








// ------------
// Question #6
// ------------

walk(document, function (node) {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});





