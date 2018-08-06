// var DEGREES_TO_MINUTES = 60;
// var MINUTES_TO_SECONDS = 60;



// function format(num, padding = true) {
//   var formattedNum = String(num);

//   if (padding && formattedNum.length < 2) {
//     formattedNum = '0' + formattedNum;
//   }

//   return formattedNum;
// }


// function dms(angle) {
//   var degrees = Math.floor(angle);
//   var minutes = Math.floor((angle % 1) * DEGREES_TO_MINUTES);
//   var seconds = Math.round((((angle % 1) * DEGREES_TO_MINUTES) % 1) * MINUTES_TO_SECONDS);

//   degrees = format(degrees, false);
//   minutes = format(minutes);
//   seconds = format(seconds);

//   return degrees + '°' + minutes + '\'' + seconds + '\"';
// }


// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00"











///////////////////////
// Further Exploration
///////////////////////


var DEGREES_TO_MINUTES = 60;
var MINUTES_TO_SECONDS = 60;



function format(num, padding = true) {
  var formattedNum = String(num);

  if (padding && formattedNum.length < 2) {
    formattedNum = '0' + formattedNum;
  }

  return formattedNum;
}


function dms(angle) {
  var negative = angle < 0 ? '-' : '';
  var degrees = Math.floor(Math.abs(angle));
  var minutes = Math.floor(Math.abs((angle % 1) * DEGREES_TO_MINUTES));
  var seconds = Math.round(((Math.abs((angle % 1) * DEGREES_TO_MINUTES) % 1) * MINUTES_TO_SECONDS));

  degrees = format(degrees, false);
  minutes = format(minutes);
  seconds = format(seconds);

  return negative + degrees + '°' + minutes + '\'' + seconds + '\"';
}


console.log(dms(-30));          // -30°00'00"
console.log(dms(30));          // 30°00'00"
console.log(dms(-76.73));       // -76°43'48"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(-254.6));       // -254°35'59"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(-93.034773));   // -93°02'05"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(-360));         // -360°00'00" or 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
