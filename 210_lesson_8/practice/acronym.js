function acronym(str) {
  var result = '';
  var words = str.split(/[ -]/);

  words.forEach(function (word) {
    return result += word[0].toUpperCase();
  })

  return result;
}





acronym('Portable Network Graphics');                  // "PNG"
acronym('First In, First Out');                        // "FIFO"
acronym('PHP: HyperText Preprocessor');                // "PHP"
acronym('Complementary metal-oxide semiconductor');    // "CMOS"
acronym('Hyper-text Markup Language');                 // "HTML"