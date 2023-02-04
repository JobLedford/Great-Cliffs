//Script for Partner Photos
var photos = []; //Declare an empty array to store image element
var fileNames = []; //To store image file names
var imageList = []; //To store HTML list that contain an image
var openList = "<li class='partner'>"; //Declare a variable to contain the open list tag
var closeList = "</li>"; //Declare a variable to contain close tag list

//Create a loop to create 6 images starting with the index of 0
for (var i = 0; i < 6; i++) {
  fileNames = [
    "partner-bustour",
    "partner-cabinrental",
    "partner-campingadv",
    "partner-collegetours",
    "partner-rentalbike",
    "partner-tourgroup",
  ]; //Create image file name and store in the array
  photos.push("<img src='images/partners/" + fileNames[i] + ".png'>"); //Assemble file names into image element
  image = openList + photos[i] + closeList; //Assemble image element from array with list elements and store in a variable
  imageList.push(image); //Store(push) the assembled list codes into an array
}

//Display all six image codes stored in the array
document.getElementById("partners").innerHTML = imageList.join(" ");

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
