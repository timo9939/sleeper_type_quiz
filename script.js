const questionDisplay= document.getElementById("question_title")
const answer_choice1_display=document.getElementById("answer_choice1")
const answer_choice2_display=document.getElementById("answer_choice2")
const answer_choice3_display=document.getElementById("answer_choice3")
const answer_choice4_display=document.getElementById("answer_choice4")
let currentQuestionIndex=0

// Get the questions and answer choices from the question_List.json
async function loadQuestions() {
    const response = await fetch('question_List.json');
    const data = await response.json();
    

    questions = data.questions;    


    displayQuestion();
}

loadQuestions()

function displayQuestion(){
// Display Question (Get the question from the question_List.json )
questionDisplay.innerText=questions[currentQuestionIndex].question    
console.log(questions[currentQuestionIndex].question)

choice1 =questions[currentQuestionIndex].options[0].text
choice2 =questions[currentQuestionIndex].options[1].text
choice3 =questions[currentQuestionIndex].options[2].text
choice4 =questions[currentQuestionIndex].options[3].text

answer_choice1_display.innerText=choice1
answer_choice2_display.innerText=choice2
answer_choice3_display.innerText=choice3
answer_choice4_display.innerText=choice4


}

function nextQuestion(){
    console.log("next button clicked")
    currentQuestionIndex++
    console.log(`currentQuestionIndex is ${currentQuestionIndex}`)
    // displayQuestion()
}

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

// window.onload = loadQuestions