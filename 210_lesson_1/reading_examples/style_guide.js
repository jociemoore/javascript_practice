// camelCase
var myNumber = 26;
var myString = 'Double 13';
var myArray = [13, 13];
var myObject = {
  count: 26,
}
var myObject2 {
  myNumber: 26,
  myMethod: function() {}
}
var addValues = function(a,b) {
  return a + b;
}




// Using curly braces
if(myObject.myNumber > 26) {
  console.log('Number is greater than 26');
} else {
  console.log('Number is less than or equal to 26');
}




// Bad Spacing
i=0;
while(i<15){
  i+=1;
}

// Good Spacing
i = 0;
while (i < 15) {
  i += 1;
}




// Bad Declarations
var firstName = 'Shane',
    lastName = 'Riley',
    dog = ['Josie', 'Libby'];

// Good Declarations
var firstName = 'Shane';
var lastName = 'Riley';
var dogs = ['Josie', 'Riley'];
