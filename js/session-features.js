/* JS for session w/ features page */

// updates session title by retrieving item from session storage
document.getElementById("session-title").innerHTML = sessionStorage.getItem("sessionTitle");

/* To end session */
function endSession() {
    location.href='session.html';
}