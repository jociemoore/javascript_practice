function cleanUp(str) {
  return str.replace(/[^A-Za-z]+/g, '');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "