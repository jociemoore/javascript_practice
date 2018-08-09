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

function maxRotation(num) {
  for (var i = String(num).length; i > 0; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }

  return num;
}



console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15);
console.log(maxRotation(8703529146) === 7321609845);

