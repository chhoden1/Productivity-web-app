/* JS for session w/ features page */

// updates session title
document.getElementById("session-title").innerHTML = localStorage.name;

/* To end session */
function endSession() {
    location.href='session.html';
}