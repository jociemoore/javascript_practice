function formatDate(date) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ,'Oct', 'Nov', 'Dec'];

  return days[date.getDay()] + ' ' + 
         months[date.getMonth()] + ' ' +
         date.getDate() + ' ' + 
         date.getFullYear();
}




function printStatistics(count, startDate, endDate) {
  console.log('Count of Email: ' + count);
  console.log('Date Range: ' + formatDate(startDate) + ' - ' + formatDate(endDate));
}




function mailCount(emailData) {

  var messages = emailData.split(/##\|\|##/);
  var count = messages.length;
  var dates = [];
  var startDate;
  var endDate;

  var getMessageInfo = function (msg) {
    return msg.split(/#\/#/);
  }

  var parseDates = function(msg) {
    
    var extractedDate = msg[2].split('Date: ')[1].split('-');
    var date = new Date();
    var month = Number(extractedDate[0]);
    var dayNum = Number(extractedDate[1]);
    var year = Number(extractedDate[2]);
        
    date.setMonth(month);
    date.setDate(dayNum);
    date.setYear(year);

    return dates.push(date);
  }

  messages.map(getMessageInfo).forEach(parseDates);
  dates = dates.sort(function (a, b) {
    return new Date(a).getTime() - new Date(b).getTime();
  });

  startDate = dates[0];
  endDate = dates[count - 1];

  printStatistics(count, startDate, endDate);
}







mailCount(emailData);


// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016

