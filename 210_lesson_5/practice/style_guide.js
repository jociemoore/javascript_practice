// Style Guide: https://github.com/airbnb/javascript


// ------------
// Question #1
// ------------

var title = "The Three-Body Problem";


// Violations:
// - Double quotes



// Fix: 

var title = 'The Three-Body Problem';







// ------------
// Question #2
// ------------

var title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;


// Violations:
// - Chaining variable declarations
// - Snakecase for variable naming



// Fix: 

var title = 'The Three-Body Problem';
var author = 'Cixin Liu';
var pageCount = 400;








// ------------
// Question #3
// ------------

var completed = lastPageRead == 400;


// Violations:
// - Use strict equality



// Fix: 

var completed = lastPageRead === 400;








// ------------
// Question #4
// ------------

if (finishedBook())
  console.log('You have finished reading this book');

// Violations:
// - Blockless statement


// Fix: 

if (finishedBook()) {
  console.log('You have finished reading this book');
}









// ------------
// Question #5
// ------------

function read(pages) {
      console.log('You started reading.');
      for (var i=0; i<pages; i++) {
              var message = 'You read page '+i;
              console.log(message);
      }
}

read(400);


// Violations:
// - Spacing aroung the operators
// - Inexplicit coercion of a number
// - Use of ++ to increment

// - Four space indentation
// - Variable declaration position




// Fix: 

function read(pages) {
  var i;
  var message;

  console.log('You started reading.');
  for (i = 0; i < pages; i += 1 ) {
    message = 'You read page ' + String(i);
    console.log(message);
  }
}

read(400);








