// collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content =this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        }else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let time = hours + ":" + minutes;
    return time;
}

function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    // document.getElementById("userInput").scrollIntoView(false);
    scrollDown();

}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHTML = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHTML);

    // document.getElementById("chat-bar-bottom").scrollIntoView(true);
    scrollDown();
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText == "Let's shop at Tokyos!";
    }

    let userHTML = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML);
    // document.getElementById("chat-bar-bottom").scrollIntoView(true);
    scrollDown();

    setTimeout(() => {
        getHardResponse(userText);
    },1000)
}

function buttonSendText(sampleText) {
    let userHTML = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML);
    // document.getElementById("chat-bar-bottom").scrollIntoView(true);
    scrollDown();
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Loved!")
}


// Press enter to send a message
$("#textInput").keypress(function(e) {
    if(e.which == 13) {
        getResponse();
    }
});

// scrolls down to most recent message
function scrollDown() {
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight;
}