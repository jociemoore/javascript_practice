
function countsOccurrences(list) {
  var counts = {};
  var item;

  list.forEach(function (elem) {
    counts[elem] = counts[elem] || 0;
    counts[elem] += 1;
  });

  for (item in counts) {
    console.log(item + ' => ' + String(counts[item]));
  }
}


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countsOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2