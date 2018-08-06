// Example 1 

function add(previousValue, element) {
  return previousValue + element;
}

var count = [1, 2, 3, 4, 5];
count.reduce(add);            // 15











// Example 2

function add(previousValue, element) {
  var sum = previousValue + element;
  console.log(previousValue, element, sum);
  return sum;
}

var count = [1, 2, 3, 4, 5];
console.log(count.reduce(add));

// logs
// 1 2 3
// 3 3 6
// 6 4 10
// 10 5 15
// 15



console.log(count.reduce(add, 0));

// logs
// 0 1 1
// 1 2 3
// 3 3 6 
// 6 4 10
// 10 5 15
// 15










// myReduce

function myReduce(array, func, initial) {
  var final;

  if (initial) {
    final = initial;
  } else {
    final = array[0];
    array = array.slice(1);
  }

  array.forEach(function (element) {
    final = func(final, element);
  });

  return final;
}

var smallest = function (result, value) {
  return result <= value ? result : value;
};

var sum = function (result, value) { 
  return result + value;
};

myReduce([5, 12, 15, 1, 6], smallest);     // 1
myReduce([5, 12, 15, 1, 6], sum, 10);      // 49 










// Example 3

function longestWord(words) {
  return myReduce(words, longest);
}

var longest = function (result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

longestWord(['abc', 'launch', 'targets', '']);

// "targets"










// Example 4 

function longestWord(words) {
  return myReduce(words, function (result, currentWord) {
    return currentWord.length >= result.length ? currentWord : result;
  });
}



