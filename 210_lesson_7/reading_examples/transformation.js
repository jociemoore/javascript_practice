// Example 1

var count = [1, 2, 3, 4, 5];
var doubled = count.map(function (number, index, array) {
  return number * 2;
});

console.log(doubled);

// logs [2, 4, 6, 8, 10]






// myMap

function myMap(array, func) {
  var result = [];

  array.forEach(function (element) {
    result.push(func(element));
  });

  return result;
}

var plusOne = function (n) { return n + 1 };

myMap([1, 2, 3, 4], plusOne);
// [2, 3, 4, 5]












// Example 2 
function getBooksTitle(books) {
  return books.myMap(books, getTitle);
}


var books = [
  {
    title: 'Javascript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
    edition: '1st',
  }, 
  {
    title: 'Eloquent Javascript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, Javascript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
]

getTitle = function (book) {
  return book['title'];
}

getBooksTitle(books);

// [
//    "Javascript and JQuery: Interactive Front-End Web Development",
//    "Eloquent Javascript: A Modern Introduction to Programming",
//    "Learning Web Design: A Beginner's Guide to HTML, CSS, Javascript, and Web Graphics"
// ]












// Example 3

function getBooksTitle(books) {
  return myMap(books, function (book) {
    return book['title'];
  });
}

var books = [
  {
    title: 'Javascript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
    edition: '1st',
  }, 
  {
    title: 'Eloquent Javascript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, Javascript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
]

getBooksTitle(books);

// [
//    "Javascript and JQuery: Interactive Front-End Web Development",
//    "Eloquent Javascript: A Modern Introduction to Programming",
//    "Learning Web Design: A Beginner's Guide to HTML, CSS, Javascript, and Web Graphics"
// ]





