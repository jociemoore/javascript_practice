// Example 1 -- create and append a paragraph

var paragraph = document.createElement('p');
paragraph.textContent = 'This is a test.';
document.body.appendChild(paragraph);









// Example 2 -- create text node and append to paragraph

var text = document.createTextNode('This is another test');
var paragraph = document.createElement('p');
paragraph.appendChild(text);
document.body.appendChild(paragraph);









// Example 3 -- clone a node

var paragraph2 = paragraph.cloneNode(true);
document.body.appendChild(paragraph2);









// Exmaple 4 -- remove node

paragraph.remove();
paragraph2.remove();