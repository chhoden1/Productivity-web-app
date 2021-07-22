/* JS for session form page */

/* For Session Title input */
function getInputValue() {
    var inputVal = document.getElementsByClassName('session-input')[0].value;
    if (inputVal == "") {
        alert("Please enter a session title");
    } else {
        console.log(inputVal);
        hide();
        document.getElementById("Session-title").innerHTML = inputVal;
    }
}
// makes form disappear after clicking "start" button
var sessionForm = document.getElementsByClassName('Session-form');
function hide() {
    sessionForm[0].style.display = 'none';
}

// makes form reappear after clicking "end" button
function showForm() {
    sessionForm[0].style.display = "contents";
}


