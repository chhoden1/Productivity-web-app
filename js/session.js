/* JS for session form page */

/* For Session Title input */
function getInputValue() {
    // stores user input in window session storage
    sessionStorage.setItem("sessionTitle", document.getElementsByClassName('session-input')[0].value);
    var userInput = sessionStorage.getItem("sessionTitle");
    // if input is empty
    if (userInput == "") {
        // alert the user to input something
        alert("Please enter a session title");
    } else {
        // otherwise, continue on with session
        console.log(userInput);
        location.href='session-features.html';
    }
}

function logout(){
    location.href='index.html';
}
