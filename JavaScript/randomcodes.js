/* ------ RANDOM CODES ------ */

//Function to generate combination of chracters
function generateCode() {
    var code = ' '; //Initialize null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    //Generate character multiple times using a loop
    for(i = 0; i < 8; i++) {
        var char = Math.random()*str.length; //random select a character from the variable and then store in a new variable 
        code += str.charAt(char) //accumulate the generated character into a string of 8 characters
    }
    return code; //return the final accumulated string when loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

//Activate function
disableButton();