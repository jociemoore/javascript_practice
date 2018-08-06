// Example 1

var result = document.querySelector('a').textContent;
console.log(result);








// Example 2

document.querySelector('a').textContent = "step backward";








// Example 3 - with text block

var div = document.querySelector('div');
for (var i = 0; i < div.childNodes.length; i += 1) {
  var node = div.childNodes[i];
  if (node instanceof Text && node.nodeValue.indexOf('The time is' !== -1)) {
    var newText = node.nodeValue.replace(/\d{1,2}:\d{2} [a\p]m/, '9:16 am');
    node.nodeValue = newText;
  }
}







// Example 4 - with span

document.querySelector('.time').textContent = '9:16 am';

