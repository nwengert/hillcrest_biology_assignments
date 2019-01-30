
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

var platyNotesDate = new Date(2019, 0, 10)
console.log(months[platyNotesDate.getMonth()] + " " + platyNotesDate.getDay())

console.log(platyNotesDate.toDateString())

var today = new Date()
console.log("Today is: " + today.toDateString())

console.log(platyNotesDate.getDate())

Date.daysBetween = function( date1, date2 ) {
    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;
  
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
  
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
      
    // Convert back to days and return
    return Math.round(difference_ms/one_day); 
  }