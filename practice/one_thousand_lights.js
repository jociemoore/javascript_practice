/*

INPUT: integer
OUTPUT: array of integers

KEY WORDS: 
- switch
- lights
- on/off
- repetitions
- toggle

RULES:
- on every repetition made, you start at the last switch plus one, and then proceed through every switch that is a multiple of that number

DATA STRUCTURE:
array of true and false

ALGORITHM:
- guard clause for 0 - prints 'There are no switches'

- create an array with true values -- the number of true values should match the number of switches

- iterate through the array one time for every switch starting at index 1 (if length of the array is >= 2)
  - iterate through starting with i and adding (i + 1) to each iteration
    - reassign the value at the index position to its opposite

- map over the reulting array and transform the true values to their index + 1

- filter the array for the integer values only

MANUAL TEST:
[1, 4]
[1]

*/






function toggleRepetively(switchboard) {
  var i;
  var j;

  if (switchboard.length === 1) { return switchboard }; 

  for (i = 1; i < switchboard.length; i += 1) {
    for (j = i; j < switchboard.length; j += (i + 1)) {
        switchboard[j] = !switchboard[j];
    }
  }

  return switchboard;
}


function getOnLights(switchNum) {
  if (switchNum) { return switchNum; }
}


function getSwitchNums(isOn, index) {
  if (isOn) {
    return index + 1;
  }
}


function lightsOn(switches = 0) {
  var i;
  var switchboard = [];

  if (switches === 0) { return 'There are no switches'; }

  for (i = 0; i < switches; i += 1) {
    switchboard.push(true);
  }

  switchboard = toggleRepetively(switchboard);

  return switchboard.map(getSwitchNums).filter(getOnLights);
}







// GIVEN TEST CASES
console.log(lightsOn(5));   // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// GENERIC TEST CASES
console.log(lightsOn(10)); // [1, 4, 9]
console.log(lightsOn(21)); // [1, 4, 9, 16]

// EDGE TEST CASES
console.log(lightsOn(1));  // [1]
console.log(lightsOn());   // 'There are no switches'
console.log(lightsOn(0));  // 'There are no switches'

// lightsOn(-1); ??
// lightsOn(0.5);  ??



