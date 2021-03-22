var timer = document.getElementById("timer")
var seconds = 120
var score = 0
var i = 0
var questionContainer = document.getElementById("questionContainer")
var question = document.getElementById("question")
var answer = document.getElementById("answer")
var questionList = ["What is my favourite colour?", "What car do I drive?", "How old am I?"]
var answerList = ["A: Green B: Orange C: Blue", "A: Toyota Camry B: Suburu BRZ C: Tesla Series S", "A: 12 B: 29 C: 21"]
var correctAnswers = [2, 1, 3]
var submitContainer = document.getElementById("submitContainer")
var submitButton = document.getElementById("submit")
var nickname = document.getElementById("nickname")



questionContainer.style.display = "none";
submitContainer.style.display = "none";

function displayQuestion(){
    questionContainer.style.display = "block";
    question.innerHTML = questionList[i]
    answer.innerHTML = answerList[i]
}

strt.onclick = function strt() {
    countdown = window.setInterval(function(){
        if (i > 2) {
            seconds
            document.getElementById("timer").innerHTML = "Time: " + (120 - seconds) + " second/s";
        }
        else if (seconds>0) {
            seconds--;
            document.getElementById("timer").innerHTML = "Time: " + seconds;
        }
        else {
            clearInterval(countdown);
            $(".quizContainer").html("GAME OVER");
        }
    },1000);
    displayQuestion();
    document.getElementById("strt").style.display = "none";
}


function userAnswer(answerChosen){
    if (answerChosen === correctAnswers[i]) {
        score++
    }
    i++
    question.innerHTML = questionList[i]
    answer.innerHTML = answerList[i] 

    if (i > 2) {
        questionContainer.innerHTML = "Score: " + score
        submitContainer.style.display = "initial";
        
    }
}

submitButton.onclick = function submit(){
    sessionStorage.setItem(nickname, score)
}
