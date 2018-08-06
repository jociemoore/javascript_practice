// Example 1 - regular function

function iterateAndLog(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

var letters = ['h', 'e', 'l', 'l', 'o'];
iterateAndLog(letters);

// h
// e
// l
// l
// o











// Example 2 - recursive function

function recurseAndLog(array) {
  console.log(array);
  if (array.length > 0) {
    console.log(array[0]);
    recurseAndLog(array.slice(1));
  }
}

var letters = ['h', 'e', 'l', 'l', 'o'];
recurseAndLog(letters);

// ['h', 'e', 'l', 'l', 'o']
// h
// ['e', 'l', 'l', 'o']
// e
// ['l', 'l', 'o']
// l
// ['l', 'o']
// l
// ['o']
// o
// []












// Example 3 - walking the tree

function walk(node) {
  console.log(node.nodeName);
  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i]);
  }
}

walk(document.body);











// Example 4 - separation of concerns (like forEach(), but for nodes not arrays)

function walk(node, callback) {
  callback(node);
  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

walk(document.body, function(node) {
  console.log(node.nodeName);
});



