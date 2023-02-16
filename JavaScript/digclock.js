//create a time data function
function currentTime() {
  //Declare variables
  var d = new Date(); //Get current date
  var hr = d.getHours(); //Get current hours
  var min = d.getMinutes(); //Get current minutes
  var sec = d.getSeconds(); // Get current seconds
  var ampm; //Declare empty variale to store AM and PM

  //Add 0 to single digits for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }
  //Add 0 to single digits for minutes
  if (min < 10) {
    min = "0" + min;
  }

  //Determine AM or PM string
  if (hr == 12) {
    ampm = "PM"; //Set to PM
  } else if (hr > 12) {
    hr -= 12; //Deduct 12 from hours greater than 12 (military time)
    ampm = "PM"; //Set to PM
  } else {
    ampm = "AM"; //Set to AM
  }

  //Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm;

  //Display current local time and time zone on HTML elements
  document.getElementById("clock").innerText = time; //Adding time

  //Run time data function every 1 second
  setInterval(currentTime, 1000); //setting timer

  var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
  var timeDiff = hr - utchr; //To store time difference between GMT hour and local hour
  var adjTimeDiff = Math.abs(timeDiff); //To store time difference converted to positive number
  var timeZone; //To store the 4 time zones (PT,MT,CT,ET)

  //Determine timezone
  if (adjTimeDiff == 6) {
    timeZone = "CT";
  } else if (adjTimeDiff == 7) {
    timeZone = "ET";
  } else if (adjTimeDiff == 5) {
    timeZone = "MT";
  } else if (adjTimeDiff == 4) {
    timeZone = "PT";
  } else {
    timeZone = utchr;
  }
}

//Intial run of time data function
currentTime();
