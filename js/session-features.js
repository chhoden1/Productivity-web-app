/* JS for session w/ features page */

// updates session title by retrieving item from session storage
document.getElementById("session-title").innerHTML = sessionStorage.getItem("sessionTitle");

/* To end session */
function endSession() {
    location.href='session.html';
}

/* For Timer */
// window.document.onload = pomodoro();
var pomodoroBtn = shortBreakBtn = longBreakBtn = false;

function pomodoro() {
    document.getElementsByClassName("timer-digits")[0].innerHTML = "<p>25:00</p>";
    document.getElementsByClassName("btn-pomodoro")[0].style.backgroundColor = "rgba(128, 128, 128, 0.192)";
    document.getElementsByClassName("btn-short-break")[0].style.backgroundColor = "transparent";
    document.getElementsByClassName("btn-long-break")[0].style.backgroundColor = "transparent";
    pomodoroBtn = true;
    shortBreakBtn = longBreakBtn = false;
    // console.log("pomodoroBtn: " + pomodoroBtn, "shortBreakBtn: " + shortBreakBtn, "longBreakBtn: " + longBreakBtn);
}

function shortBreak() {
    document.getElementsByClassName("timer-digits")[0].innerHTML = "<p>05:00</p>";
    document.getElementsByClassName("btn-pomodoro")[0].style.backgroundColor = "transparent";
    document.getElementsByClassName("btn-short-break")[0].style.backgroundColor = "rgba(128, 128, 128, 0.192)";
    document.getElementsByClassName("btn-long-break")[0].style.backgroundColor = "transparent";
    shortBreakBtn = true;
    pomodoroBtn = longBreakBtn = false;
    // console.log("pomodoroBtn: " + pomodoroBtn, "shortBreakBtn: " + shortBreakBtn, "longBreakBtn: " + longBreakBtn, );
}

function longBreak() {
    document.getElementsByClassName("timer-digits")[0].innerHTML = "<p>15:00</p>";
    document.getElementsByClassName("btn-pomodoro")[0].style.backgroundColor = "transparent";
    document.getElementsByClassName("btn-short-break")[0].style.backgroundColor = "transparent";
    document.getElementsByClassName("btn-long-break")[0].style.backgroundColor = "rgba(128, 128, 128, 0.192)";
    longBreakBtn = true;
    pomodoroBtn = shortBreakBtn = false;
    // console.log("pomodoroBtn: " + pomodoroBtn, "shortBreakBtn: " + shortBreakBtn, "longBreakBtn: " + longBreakBtn, );
}

var timerOn = false;
function startTimer() {
    if (!timerOn) {
        timerOn = true;
        document.getElementsByClassName("timer-button-container")[0].innerHTML = "<button onclick='startTimer()'><p>RESET</p></button>";
        if (pomodoroBtn) {
            countdown(60 * 25, document.getElementsByClassName("timer-digits")[0]);
        } else if (shortBreakBtn) {
            countdown(60 * 5, document.getElementsByClassName("timer-digits")[0]);
        } else if (longBreakBtn) {
            countdown(60 * 15, document.getElementsByClassName("timer-digits")[0]);
        }

    } else {
        timerOn = false;
        if (pomodoroBtn) {
            pomodoro();
        } else if (shortBreakBtn) {
            shortBreak();
        } else if (longBreakBtn) {
            longBreak();
        }
        resetTimer();
        document.getElementsByClassName("timer-button-container")[0].innerHTML = "<button onclick='startTimer()'><p>START</p></button>";
    }
    // console.log(timerOn);
}

var downloadTimer;
var timer;
function countdown(duration, display) {
    timer = duration;
    var minutes, seconds;
    clearInterval(downloadTimer);

    downloadTimer = 
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = "<p>" + minutes + ":" + seconds + "</p>";

        if (--timer < 0) {
            timer = duration;
            clearInterval(downloadTimer);
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(downloadTimer);
    if (pomodoroBtn) {
        timer = 60 * 25;
    } else if (shortBreakBtn) {
        timer = 60 * 5;
    } else if (longBreakBtn) {
        timer = 60 * 15;
    }
}

// //----  Sound for Time's Up  ----//
// buzzer = new buzz.sound("https://dl.dropboxusercontent.com/u/7673790/Air%20Horn-SoundBible.com-964603082", {
//   formats: ["mp3"],
//   preload: true
// });


