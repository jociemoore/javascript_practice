// WHY OPERATORS ARE USELESS WITH ARRAYS

// Example 1 
var initials  = ['A', 'H', 'E'];
initials + 'B';   // 'A,H,EB'
initials;         // ['A', 'H', 'E']



// Example 2
initials + ['B'];     // 'A,H,EB'
initials;             // ['A', 'H', 'E']




// Example 3 
[1] * 2       // 2
[1, 2]  * 2   //NaN




// Example 4
var friends = ['Bob', 'Josie', 'Sam'];
var enemies = ['Bob', 'Josie', 'Sam'];
console.log(friends == enemies);     // false
console.log(friends === enemies);    // false




// Example 5 
var friends = ['Bob', 'Josie', 'Sam'];
friends == friends;    // true
friends === friends;   // true




// Example 6 
var friends = ['Bob', 'Josie', 'Sam'];
var roommates = friends;
friends == roommates;     // true
friends === roommates;    // true

