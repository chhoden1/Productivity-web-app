/* JS for session form page */

/* For Session Title input */
function getInputValue() {
    // variable for user input
    //var inputVal = document.getElementsByClassName('session-input')[0].value;
    localStorage.name = document.getElementsByClassName('session-input')[0].value;
    // if input is empty
    if (localStorage.name == "") {
        // alert the user to input something
        alert("Please enter a session title");
    } else {
        // otherwise, continue on with session
        console.log(localStorage.name);
        location.href='session-features.html';
    }
}
