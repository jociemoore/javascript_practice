// Example 1

function prasadOrder() {
  console.log('I am very hungry and would like a salad.');
}

function sueOrder() {
  console.log('I am sort of hungry and would like a sandwich.');
}

function jaiOrder() {
  console.log('I am not hungry and would like a smoothie.');
}









// Example 2 
function buildOrder(hungerLevel, item) {
  return 'I am ' + hungerLevel + 'hungry and would like a ' + item + '.';
}

function prasadOrder() {
  console.log(buildOrder('very', 'salad'));
}

function sueOrder() {
  console.log(buildOrder('sort of', 'sandwich'));
}

function jaiOrder() {
  console.log(buildOrder('not', 'smoothie'));
}







// Example 3
var count = [1, 2, 3, 4, 5];

function iterate(array) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    console.log(array[i]);
  }
}

iterate(count); 

// logs
// 1
// 2
// 3
// 4
// 5






// Example 4 
var count = [1, 2, 3, 4, 5];

function iterate(array, callback) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}


iterate(count, function (number) { console.log(number); });

// logs
// 1 
// 2
// 3
// 4
// 5






// Example 5
var count = [1, 2, 3, 4, 5];

function iterate(array, callback) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

function logger(number) {
  console.log(number);
}

iterate(count, logger);

// logs
// 1
// 2
// 3
// 4
// 5






// Example 6 
function oddOrEven(array) {
  var i;
  var number;

  for (i = 0; i < array.length; i += 1) {
    number = array[i];
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  }
}






// Example 7
function iterate(array, callback) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

function oddOrEven(array) {
  iterate(array, function (number) {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  });
}





// Example 8
function oddOrEven(array) {
  array.forEach(function (number) {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  });
}