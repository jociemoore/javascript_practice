

// ------------
// Question #1
// ------------

var wordCount = 0;
var headings = document.querySelectorAll('h2');

for (var i = 0; i < headings.length; i += 1) {
  wordCount += headings[i].textContent.split(' ').length;
}

console.log(wordCount);









// ------------
// Question #2
// ------------

var toc1 = document.getElementById('toc');
var toc2 = document.getElementsByClassName('toc')[0];
var toc3 = document.querySelector('#toc');

console.log(toc1);
console.log(toc2);
console.log(toc3);









// ------------
// Question #3
// ------------

var links = document.querySelectorAll('.toc a');
var linksArray = Array.prototype.slice.call(links);
linksArray.forEach(function(link, index) {
  if (index % 2 === 0) {
    link.style.color = 'green';
  }
});







// ------------
// Question #4
// ------------

var captions = document.querySelectorAll('.thumbcaption');
var captionsArray = Array.prototype.slice.call(captions);

captionsArray = captionsArray.map(function(caption) {
  return caption.textContent.trim(); 
});

console.log(captionsArray);








// ------------
// Question #5
// ------------

function getScientificClassification() {
  var taxonomyTable = document.querySelector('.biota');
  var rows = taxonomyTable.querySelectorAll('tr');
  var rowsArray = Array.prototype.slice.call(rows);
  var startIndex;
  var rank;
  var polarBearTaxonomy = {};

  rowsArray.forEach(function (row, index) {
    var links = row.getElementsByTagName('a');
    var linksArray = Array.prototype.slice.call(links);

    linksArray.forEach(function(link) {
      if (link && link.hasAttribute('title') && 
          link.getAttribute('title') === 'Taxonomy (biology)') {
        startIndex = index;
      }
    });

  });

  for (var i = 1; i <= 8; i += 1) {
    rank = rowsArray[startIndex + i].getElementsByTagName('td');
    polarBearTaxonomy[rank[0].textContent] = rank[1].textContent;
  }

  return polarBearTaxonomy;
}



console.log(getScientificClassification());


