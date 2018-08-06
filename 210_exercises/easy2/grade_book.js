function getLetter(average) {
  var grade = '';

  if (average >= 90) {
    grade = 'A';
  } else if (average >= 80) {
    grade = 'B';
  } else if (average >= 70) {
    grade = 'C';
  } else if (average >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return grade;
}

function getGrade(score1, score2, score3) {
  var average = (score1 + score2 + score3) / 3;
  return getLetter(average);
}



console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"