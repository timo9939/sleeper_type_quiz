console.log("js work")




function calculateScore() {
    let resultText;

    if (score >= 10) {
        resultText = "You are an Early Bird (Lark).";
    } else if (score >= 7) {
        resultText = "You are an Intermediate (Hummingbird).";
    } else if (score >= 4) {
        resultText = "You are a Biphasic Sleeper.";
    } else {
        resultText = "You are a Night Owl.";
    }
}