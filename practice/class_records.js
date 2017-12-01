
function sum(total, value) {
  return total + value;
}



function average(numbers) {
  var total = numbers.reduce(sum);

  return total / numbers.length;
}




function findLetterGrade(numberGrade) {
  var letter = '';

  if (numberGrade >= 93) {
    letter = 'A';
  } else if (numberGrade >= 85) {
    letter = 'B';
  } else if (numberGrade >= 77) {
    letter = 'C';
  } else if (numberGrade >= 69) {
    letter = 'D';
  } else if (numberGrade >= 60) {
    letter = 'E';
  } else {
    letter = 'F';
  }

  return letter;
}






function generateExamReport(scores) {
  var i;
  var gradesByExam = [];
  var gradesByStudent = Object.keys(scores).map(function (student) {
    return scores[student].scores.exams;
  });
  
  for (i = 0; i < gradesByStudent.length - 1; i += 1) {
    gradesByExam.push([]);
    gradesByStudent.forEach(function (grades) {
      gradesByExam[i].push(grades[i]);
    })
  }

  return gradesByExam.map(function (grades) {
    grades = grades.sort(function(a, b) {
      return a - b;
    });

    return {
      average: average(grades),
      minimum: grades[0],
      maximum: grades[grades.length - 1],
    }
  });
}




function calculateStudentGrades(scores) {
  return Object.keys(scores).map(function (student) {
    var examAverage = average(scores[student].scores.exams);
    var examScore = examAverage * 0.65;

    var exerciseTotal = scores[student].scores.exercises.reduce(sum);
    var exerciseScore = exerciseTotal * 0.35;
    
    var numberGrade = Math.round(examScore + exerciseScore);
    var letterGrade = findLetterGrade(numberGrade);
    
    return String(numberGrade) + ' (' + letterGrade + ')';
  });
}





function generateClassRecordSummary(scores) {
  return {
    studentGrades: calculateStudentGrades(scores),
    exams: generateExamReport(scores),
  }
}






///////////////////////////////////////////////////


var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


generateClassRecordSummary(studentScores);

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
