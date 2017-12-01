// Example 1 

function compareScores(score1, score2) {
  if (score 1 < score2) {
    return -1;
  } else if (score1 > score2) {
    return 1;
  } else {
    return 0;
  }
}

var scores = [88, 50, 60, 99, 12, 23];
scores.sort(compareScores);            // [12, 23, 50, 60, 88, 99]
scores;                                // [12, 23, 50, 60, 88, 99]


cd




// Example 2

function compareFunction(item1, item2) {
  if (item1 is less than item2 based on some criteria) {
    return -1;
  } else if (item1 is greater than item2 based on some criteria) {
    return 1;
  } else { // item1 and item2 are equal
    return 0;
  }
}








// Example 3 

var studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92},
  { name: 'StudentC', grade: 91.8},
  { name: 'StudentD', grade: 95.23},
  { name: 'StudentE', grade: 91.81},
];

function compareGrades(student1, student2) {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
}

studentGrades.sort(compareGrades);









// Example 4

var studentGrades = [
  { name: 'StudentA', grade: 90.1 },
  { name: 'StudentB', grade: 92},
  { name: 'StudentC', grade: 91.8},
  { name: 'StudentD', grade: 95.23},
  { name: 'StudentE', grade: 91.81},
];

studentGrades.sort(function (student1, student2) {
  if (student1.grade < student2.grade) {
    return 1;
  } else if (student1.grade > student2.grade) {
    return -1;
  } else {
    return 0;
  }
});
