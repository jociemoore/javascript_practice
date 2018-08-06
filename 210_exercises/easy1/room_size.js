var CONVERSION_METERS_TO_FEET = 10.7639;
var length = prompt('Enter the length of the room in meters: ');
var width = prompt('Enter the width of the room in meters: ');
var areaMeters = (length * width).toFixed(2);
var areaFeet = (areaMeters * CONVERSION_METERS_TO_FEET).toFixed(2);

console.log('The area of the room is ' + areaMeters + ' square meters (' + areaFeet + ' square feet).');











///////////////////////////
// Further Exploration
//////////////////////////


var CONVERSION_METERS_TO_FEET = 10.7639;
var CONVERSION_FEET_TO_METERS = 0.3048;
var length = prompt('Enter the length of the room: ');
var width = prompt('Enter the width of the room: ');
var inputType = prompt('What was the input type: meters or feet?').trim().toLowerCase();

if (inputType === 'meters') {
  var areaMeters = (length * width).toFixed(2);
  var areaFeet = (areaMeters * CONVERSION_METERS_TO_FEET).toFixed(2);

  console.log('The area of the room is ' + areaMeters + ' square meters (' + areaFeet + ' square feet).');
} else {
  var areaFeet = (length * width).toFixed(2);
  var areaMeters = (areaFeet * CONVERSION_FEET_TO_METERS).toFixed(2);

  console.log('The area of the room is ' + areaFeet + ' square feet (' + areaMeters + ' square meters).');
}
