function processReleaseData(data) {
  var validReleases = data.filter(function (movie) {
    return movie.id && movie.title;
  });

  var processedReleases = validReleases.map(function (movie) {
    var filteredData = {};
    filteredData['id'] = movie.id;
    filteredData['title'] = movie.title;

    return filteredData;
  });

  return processedReleases;
}



var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];


processReleaseData(newReleases);

// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }]










///////////////////////
// Further Exploration
///////////////////////

// If it were possible to have an id value of 0, then the condition that the validReleases are filtered on would return false for that movie and it would not be included in the data. 

// change 
// return movie.id && movie.title;
// to 
// return !isNaN(movie.id) && movie.title;

