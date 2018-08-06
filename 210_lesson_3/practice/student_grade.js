function calculateAverage(scores, numberOfScores) {
  var total = 0;
  for (i in scores) {
    total += Number(scores[i]);
  }
  return total / numberOfScores;
}

function getGrade(average) {
  var grade;
  if (average >= 90) {
    grade = 'A';
  } else if (average >= 70) {
    grade = 'B';
  } else if (average >= 50) {
    grade = 'C';
  } else {
    grade = 'F';
  }
  return grade;
}

function whatsMyGrade() {
  var scores = [];
  var counter = 0;
  var numberOfScores = prompt('Enter the total number of scores: ');

  while (counter < numberOfScores) {
    counter++;
    var score = prompt('Enter score ' + counter + ': ');
    scores.push(score);
  }
  var average = calculateAverage(scores, numberOfScores);
  var grade = getGrade(average);
  console.log('Based on the average of your 3 scores your letter grade is "' + grade + '".');
}

whatsMyGrade();