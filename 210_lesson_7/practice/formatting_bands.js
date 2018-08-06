var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(function (band) {
    var byLetter = function (char, index) {
        if (index === 0) {
          char = char.toUpperCase();
        } 
        
        if (char.match(/\./)) {
          char = '';
        }

        return char;
    }

    var byWord = function (word) {
      return word.split('').map(byLetter).join('');
    }

    var updatedData = {};

    updatedData.name = band.name.split(' ').map(byWord).join(' ');
    updatedData.country = 'Canada';
    updatedData.active = band.active;

    return updatedData;
  });
}

processBands(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]




