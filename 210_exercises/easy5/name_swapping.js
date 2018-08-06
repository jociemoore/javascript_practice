
function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"








////////////////////////
// Further Exploration
////////////////////////

function swapName(name) {
  var lastname = name.slice(name.lastIndexOf(' ') + 1);
  name = name.replace(lastname, '');
  return (lastname + ', ' + name).trim();
}

console.log(swapName('Joseph Francis Roberts'));    // "Roberts, Joseph Francis"


