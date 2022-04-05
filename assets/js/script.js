//variables to keep track of time
var questionsIndex = 0;

//15 seconds per question about to be asked
var time = 75;

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



//Start the quiz
function quizStart(){
    //hide the start screen during the quiz
    var startQuizEl = document.getElementById("start");

    // make questions appear

    questionsEl.removeAttribute("hide");

    //show starting time on the page
    clockCountDown();




    getQuestions()

}


//Get questions to show up
function getQuestions(){

    var currentQuestions = questions[questionsIndex];



}


//click questions and answers
function clickQuestions(){


}



//end the quiz



//time count
function clockCountDown(){
   

    
    timeEl.textContent = time;
    time--;

    //check if the user is out of time
    if (time <= 0){
        endQuiz();
    }
}



function endQuiz(){

    clearInterval(timerId);


}

clockCountDown();

//save high scores


startBtn.onclick = quizStart;