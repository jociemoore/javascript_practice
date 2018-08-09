function rotateArray(collection) {
  var copy = [];

  if (!Array.isArray(collection)) { return; }
  if (collection.length === 0) { return collection; }

  collection.forEach(function (elem) {
    copy.push(elem);
  });

  var moveThisElem = copy.shift();
  copy.push(moveThisElem);

  return copy;
}

function rotateRightmostDigits(num, n) {
  var allDigits = String(num).split('');
  var delimiter = allDigits.length - n;
  var unrotatedDigits = allDigits.slice(0, delimiter);
  var rotatedDigits = rotateArray(allDigits.slice(delimiter));
  allDigits = unrotatedDigits.concat(rotatedDigits).join('');

  return Number(allDigits);
}



console.log(rotateRightmostDigits(735291, 1) === 735291); 
console.log(rotateRightmostDigits(735291, 2) === 735219); 
console.log(rotateRightmostDigits(735291, 3) === 735912); 
console.log(rotateRightmostDigits(735291, 4) === 732915); 
console.log(rotateRightmostDigits(735291, 5) === 752913); 
console.log(rotateRightmostDigits(735291, 6) === 352917); 

