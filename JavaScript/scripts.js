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

