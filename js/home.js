/* JS for home (user) page */

// updates total time
var time = JSON.parse(localStorage.getItem("totalTime"));

    console.log("Total Secs: "+time.seconds);

    // calculates hours (with remainder)
    var spentHours = time.seconds / 3600;

    // calculates minutes (with remainder)
    var spentMins = (spentHours % 1) * 60;

    // calculates seconds
    var spentSecs = (spentMins % 1) * 60;

// document.getElementById("time-spent-stat").innerHTML = `<p id="time-spent-stat">${time.hours} hr ${time.minutes} min</p>`;
document.getElementById("time-spent-stat").innerHTML = `<p id="time-spent-stat">${Math.floor(spentHours)} hr ${Math.floor(spentMins)} min</p>`;

function logout(){
    location.href='index.html';
}