// ------------
// Question #1
// ------------

function objectHasProperty(obj, str) {
  for (key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
}

var pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true








// ------------
// Question #2
// ------------

function incrementProperty(object, propertyName) {
  var keys = Object.keys(object);

  if (keys.indexOf(propertyName === -1)) {
    object[propertyName] = 0;
  }

  object[propertyName]++;
  return object[propertyName];
}

var wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }








// ------------
// Question #3
// ------------

function copyProperties(obj1, obj2) {
  for (key in obj1) {
    obj2[key] = obj1[key];
  }
  
  return Object.keys(obj1).length;
}

var hal = {
  model: 9000,
  enabled: true,
};

var sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }









// ------------
// Question #4
// ------------

function wordCount(string) {
  var words = string.split(' ');
  var counts = {};
  for (i in words) {
    if (counts[words[i]]) {
      counts[words[i]]++;
    } else {
      counts[words[i]] = 1;
    }
  }
  return counts;
}


wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }







