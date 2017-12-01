// ------------
// Question #1
// ------------

var today = new Date();





// ------------
// Question #2
// ------------

var today = new Date();
console.log('Today\'s day is ' + today.getDay());





// ------------
// Question #3
// ------------

var today = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = daysOfWeek[today.getDay()];
console.log('Today\'s day is ' + day);







// ------------
// Question #4
// ------------

var today = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = daysOfWeek[today.getDay()];
console.log('Today\'s day is ' + day + ', the ' + today.getDate() + 'th');







// ------------
// Question #5
// ------------

var today = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = daysOfWeek[today.getDay()];

function dateSuffix(date) {
  var suffix;
  if (date == 1 || date == 21 || date == 31) {
    suffix = 'st';
  } else if (date == 2 || date == 22) {
    suffix = 'nd';
  } else if (date == 3 || date == 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return String(date.getDate()) + suffix;
}

console.log('Today\'s day is ' + day + ', the ' 
  + dateSuffix(today.getDate()));








// ------------
// Question #6
// ------------

var today = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = daysOfWeek[today.getDay()];

function dateSuffix(date) {
  var suffix;
  if (date == 1 || date == 21 || date == 31) {
    suffix = 'st';
  } else if (date == 2 || date == 22) {
    suffix = 'nd';
  } else if (date == 3 || date == 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return String(date.getDate()) + suffix;
}

console.log('Today\'s day is ' + day + 
            ', ' + today.getMonth() + ' ' + 
            dateSuffix(today.getDate()));








// ------------
// Question #7
// ------------

var today = new Date();
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var day = daysOfWeek[today.getDay()];
var month = months[today.getMonth()];

function dateSuffix(date) {
  var suffix;
  if (date == 1 || date == 21 || date == 31) {
    suffix = 'st';
  } else if (date == 2 || date == 22) {
    suffix = 'nd';
  } else if (date == 3 || date == 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return String(date.getDate()) + suffix;
}

console.log('Today\'s day is ' + day + 
            ', ' + month + ' ' + 
            dateSuffix(today.getDate()));









// ------------
// Question #8
// ------------

function dateSuffix(date) {
  var suffix;
  if (date == 1 || date == 21 || date == 31) {
    suffix = 'st';
  } else if (date == 2 || date == 22) {
    suffix = 'nd';
  } else if (date == 3 || date == 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return String(date.getDate()) + suffix;
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDate(date) {
  return formattedDay(date) + ', ' + 
         formattedMonth(date) + ' ' + 
         dateSuffix(date);
}

console.log('Today\'s day is ' + formattedDate(new Date()));











// ------------
// Question #9
// ------------

var today = new Date();
console.log(today.getFullYear());    // 2017
console.log(today.getYear());        // 117











// ------------
// Question #10
// ------------

var today = new Date();
console.log(today.getTime());     // 1509821932504











// ------------
// Question #11
// ------------

function dateSuffix(date) {
  var suffix;
  if (date == 1 || date == 21 || date == 31) {
    suffix = 'st';
  } else if (date == 2 || date == 22) {
    suffix = 'nd';
  } else if (date == 3 || date == 23) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  return String(date.getDate()) + suffix;
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDate(date) {
  return formattedDay(date) + ', ' + 
         formattedMonth(date) + ' ' + 
         dateSuffix(date);
}

var today = new Date();
var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log('Tomorrow\'s day is ' + formattedDate(tomorrow));










// ------------
// Question #12
// ------------

var today = new Date();
var nextWeek = new Date(today.getTime());

console.log(today === nextWeek);    // false
// today and nextWeek are not equal because they are different objects.










// ------------
// Question #13
// ------------

var today = new Date();
var nextWeek = new Date(today.getTime());
console.log(today.toDateString() === nextWeek.toDateString());     // true

nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());     // false










// ------------
// Question #14
// ------------

function formatTime(date) {
  var hours = String(date.getHours());
  var minutes = String(date.getMinutes());

  if (hours.length < 2) {
    hours = '0' + hours;
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  return hours + ':' + minutes;
}


console.log(formatTime(new Date(2013, 2, 1, 1, 9)));
