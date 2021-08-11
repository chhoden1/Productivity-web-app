/* JS for session w/ features page */

// updates session title by retrieving item from session storage
document.getElementById("session-title").innerHTML = sessionStorage.getItem("sessionTitle");

/* To end session */
function endSession() {
    storeData();
    location.href='session.html';
}

function storeData () {
    var oldTimeData = localStorage.getItem("totalTime");
    if (oldTimeData === null) {
        totalTime = {
            seconds: 0
        };
        localStorage.setItem("totalTime", JSON.stringify(totalTime));
    }
    calculateTime();
}

function calculateTime() {
    // seconds, minutes, hours, days
    var time = JSON.parse(localStorage.getItem("totalTime"));

    // add counter to seconds
    time.seconds += counter;

    localStorage.setItem('totalTime', JSON.stringify(time));
    console.log("Seconds: " + time.seconds);
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


/* For Todo List */
// creates global variables for task feature objects
const inputBox = document.querySelector(".inputArea input");
const addBtn = document.querySelector(".inputArea button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".bottom button");


// if user inputs something, user can click on addBtn
inputBox.onkeyup = () => {
    // stores user input into variable
    let userEnteredValue = inputBox.value;
    if (userEnteredValue.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}

showTasks();

// when addBtn is clicked
addBtn.onclick = () => {
    // stores user input into variable
    let userEnteredValue = inputBox.value;
    let getLocalStorageData = localStorage.getItem("New Todo");
    // if no tasks yet
    if (getLocalStorageData == null) {
        window.listArray = []; // create new empty list
    } else {
        // else, parse data
        listArray = JSON.parse(getLocalStorageData);
    }
    // add user input to the list
    listArray.push(userEnteredValue);
    // replace value of "New Todo" item with added task
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
    // addBtn stays inactive until user inputs another task
    addBtn.classList.remove('active');
}

function showTasks() {
    // 
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTaskNumb = document.querySelector(".pendingTasks");
    pendingTaskNumb.textContent = listArray.length;
    if (listArray.length > 0) {
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fa fa-trash" style="color:#2e6873"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index) {
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
}

deleteAllBtn.onclick = () => {
    listArray = [];
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();
  console.log("here");
}


/* Timer for time logs */
// let counter = 0;
window.onload = function(){
    setInterval(count, 1000);
  };
  
  let counter = 0;
  function count(){
    counter++;
    // console.log("Count: " + (counter + JSON.parse(localStorage.getItem("totalTime")).seconds));
  }
  
  function logout(){
    location.href='index.html';
}