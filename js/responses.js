function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "I am stressed") {
        return "Take a break!";
    } else if (input == "Hello") {
        return "Hello there!";
    } else if (input == "bye") {
        return "Talk to you later!";
    } else if (input == "goodbye") {
        return "Have a great day!";
    } else if (input == "bye") {
        return "Have a lovely day!";
    } else if (input == "I am frustrated") {
        return "Take a deep breath and take some break from work.";
    } else if (input == "Feeling frustrated") {
        return "Take a deep breath and take some break from work.";
    } else if (input == "Hi") {
        return "Hey! How are you doing?";
    } else if (input == "hi") {
        return "Hey! How are you doing?";
    } else if (input == "I am doing good") {
        return "That's awesome! What can I help you with today?";
    }else if (input == "I am stressed") {
        return "Enjoy a cup of coffee!";
    }else if (input == "good") {
        return "That's great! How can I help you?";
    }else if (input == "I had a stressful day.") {
        return "You need to relax.";
    }else if (input == "I am stressed.") {
        return "Try listening to songs.";
    }else if (input == "I am tired.") {
        return "Get a power nap.";
    }else if (input == "feeling tired") {
        return "Get some snacks and take a break from your study session.";
    }else {
        return "Try asking something else!";
    }
}