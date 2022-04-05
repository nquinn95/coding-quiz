var questionsIndex = 0;



//keeps track of the time
var timerId;


//gettign variables for elements in the HTML
var questionsEl = document.getElementById("questions");
var timeEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var intitialsEl = document.getElementById("intials");
var startBtn = document.getElementById("start");



//questions for quiz
var questions = [
    {
        title: "What is my first question?",
        choices: ["A", "B", "C","D"],
        answer: "B"
    },
    {
        title: "What is my second question?",
        choices: ["A", "B", "C","D"],
        answer: "A"
    },
    {
        title: "What is my third question?",
        choices: ["A", "B", "C","D"],
        answer: "D"
    },
    {
        title: "What is my first question?",
        choices: ["A", "B", "C","D"],
        answer: "D"
    },
    {
        title: "What is my first question?",
        choices: ["A", "B", "C","D"],
        answer: "C"
    }
];
//variables to keep track of time

var time = questions.length * 15;
//15 seconds per question about to be asked



//Start the quiz
function quizStart(){
    //hide the start screen during the quiz
    var startQuizEl = document.getElementById("start");
    startQuizEl.setAttribute("class", "hide");


    
    // make questions appear

    questionsEl.removeAttribute("class");
    choicesEl.removeAttribute("class");



    getQuestions();

}


//Get check which question that we want
function getQuestions(){

    var currentQuestions = questions[questionsIndex];



}


//click questions and answers
function clickQuestions(){


}







//time count
function clockCountDown(){
   

    
    timeEl.textContent = time;
    time--;

    //check if the user is out of time
    if (time <= 0){
        endQuiz();
    }
}


//end the quiz
function endQuiz(){

    clearInterval(timerId);


}

clockCountDown();

//save high scores


startBtn.onclick = quizStart;