function greetings(name, job) {
  console.log('Hello, ' + name.join(' ') + '! ' + 
              'Nice to have a ' + job.title + ' ' + job.occupation + ' around.');
}




greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.