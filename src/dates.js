
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


var platyNotesDate = new Date(2018, 11, 24)
console.log(months[platyNotesDate.getMonth()] + " " + platyNotesDate.getDay())

console.log(platyNotesDate.toDateString())

var today = new Date()
console.log("Today is: " + today.toDateString())

Date.daysBetween = function( date1, date2 ) {
    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;
  
    // Convert both dates to milliseconds
    var today_ms = today.getTime();
    var platyNotesDate_ms = platyNotesDate.getTime();
  
    // Calculate the difference in milliseconds
    var difference_ms = today_ms - platyNotesDate_ms;
      
    // Convert back to days and return
    return Math.floor(difference_ms/one_day);      //get this to round down?
  }
  console.log("today day = " + today.getDate())
  console.log("assigned day = " + platyNotesDate.getDate())
  console.log("Christmas was " + Date.daysBetween() + " days ago")