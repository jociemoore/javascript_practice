// ** Cannot use querySelector or querySelectorAll

function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}






// ------------
// Question #1
// ------------

var h1 = document.childNodes[1].lastChild.childNodes[1];

h1.style.color = 'red';
h1.style.fontSize = '48px';









// ------------
// Question #2
// ------------

var body = document.childNodes[1].lastChild;
var count = 0;

walk(body, function (node) {
  if (node.nodeName === 'P') {
    count += 1;
  }
});

console.log(count);   // 5








// ------------
// Question #3
// ------------

walk(document, function (node) {
  if (node.nodeName === 'P') {
    var firstWord = node.textContent.trim().split(' ')[0];
    console.log(firstWord);
  }
});








// ------------
// Question #4
// ------------

var firstParagraph;

walk(document, function (node) {
  if (node.nodeName === 'P' && firstParagraph) {
    node.classList.add('stanza');
  } else if (node.nodeName === 'P' && !firstParagraph) {
    firstParagraph = node;
  }
});




