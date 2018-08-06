// Example 1

console.log(document.getElementById('content'));










// Group 1 - Problem 1

function getParagraphs() {
  var paragraphs = [];
  var body = document.childNodes[2].lastChild;

  for (var i = 0; i < body.childNodes.length; i += 1) {
    if (body.childNodes[i].nodeName === 'P') {
      paragraphs.push(body.childNodes[i])
    }
  }

  return paragraphs;
}

console.log(getParagraphs());











// Group 1 - Problem 2

function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

console.log(walk(document, function (node) {
  if (node.nodeName === 'P') {
    node.classList.add('article-text');
  }
}));










// Problem 3

function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

function getElementsByTagName(tag) {
  var collection = [];

  walk(document, function(node) {
    if (node.nodeName === tag.toUpperCase()) {
      collection.push(node);
    }
  });

  return collection;
}

getElementsByTagName('p').forEach(function(p) {
  p.classList.add('article-text');
});











// Example 2 - HTMLCollection or Nodelist is Array-like

var paragraphs = document.getElementsByTagName('p');

paragraphs.length; // returns a Number
paragraphs[0]; // returns first Element in collection

// below will fail with 'forEach' in some browsers
// paragraphs.forEach(function(paragraph) {
//   console.log(paragraph.textContent);
// };

// Fix 1 - call()
var paragraphArray = Array.prototype.slice.call(paragraphs);
paragraphArray.forEach(function(paragraph) {
  console.log(paragraph.textContent);
});

console.log('--------')

// Fix 2 - for loop
for (var i = 0; i < paragraphs.length; i += 1) {
  var paragraph = paragraphs[i];
  console.log(paragraph.textContent);
}








// Group 2 - Problem 1

var paragraphs = document.getElementsByTagName('p');

var paragraphsArray = Array.prototype.slice.call(paragraphs);
paragraphsArray.forEach(function(p) {
  p.classList.add('article-text');
});











// Group 2 - Problem 2

var introDivs = document.getElementsByClassName('intro');

for (var i = 0; i < introDivs.length; i += 1) {
  var paragraphs = introDivs[i].getElementsByTagName('p');
  for (var j = 0; j < paragraphs.length; j += 1) {
    paragraphs[j].classList.add('article-text');
  }
}












// Example 3 - CSS Selectors

var paragraphs = document.querySelectorAll('.intro p');
for (var i = 0; i < paragraphs.length; i += 1) {
  paragraphs[i].classList.add('article-text');
}









