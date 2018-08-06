/*
INPUT: 3 integers
OUTPUT: string --> classification

RULES:
- Right --> angle1 = 90, angle2 < 90, angle3 < 90
- Acute --> angle1 < 90, angle2 < 90, angle3 < 90
- Obtuse --> angle1 > 90, angle2 < 90, angle3 < 90

- valid --> angle1 + angle2 + angle3  == 180 AND all angles > 0

- all angles are integers
- all angles are in degrees

- check if the angles meet any of the condition
- return corresponding classification name or invalid

DATA STRUCTURE:
- array

ALGORITHM:
- initialize an array of angles
    -- sort array of angles
- initialize type var 
- isValid(array) --> guard clause to check if triangle is valid
  -- angle1 + angle2 + angle3  == 180
  -- all angles > 0
- if the first angle is 90 --> type is RIGHT
- if the first angle is > 90 --> type is OBTUSE
- else --> type is ACUTE
- return type

*/




// TEST CASES

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
// negative inputs??


