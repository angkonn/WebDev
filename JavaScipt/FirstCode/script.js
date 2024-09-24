// Select the first 'button' element on the page and store it in the variable 'hellobtn'
let hellobtn = document.querySelector('button');

// Add an event listener to 'hellobtn' that listens for a 'click' event and runs the 'showmsg' or 'inputmsg' function when the button is clicked
// hellobtn.addEventListener('click', showmsg);
hellobtn.addEventListener('click', inputmsg);


function inputmsg() {
    
    // alert("Hello World!");
    let name= prompt('Enter the name of student');
    let roll= prompt('Enter the roll of student');
    hellobtn.textContent = 'Roll no ' + roll +': '+ name;


}




// In JavaScript, several functions can display results or messages similar to alert, but with different behaviors:

// alert(message):
// Displays a message in a pop-up dialog box with an "OK" button.
// Example: alert("Hello World!");


// console.log(message):
// Prints a message to the browser's developer console, which is useful for debugging.
// Example: console.log("Hello World!");


// document.write(message):
// Writes directly to the HTML document. It overwrites the content of the webpage if used after the page has loaded.
// Example: document.write("Hello World!");


// prompt(message):
// Displays a dialog box that prompts the user for input. It has an input field and "OK" and "Cancel" buttons.
// Example: prompt("Enter your name:");


// confirm(message):
// Displays a dialog box with a message and "OK" and "Cancel" buttons. It returns true if "OK" is pressed and false if "Cancel" is pressed.
// Example: confirm("Do you want to continue?");
