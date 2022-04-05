//variables to keep track of time
var questionsIndex = 0;

//15 seconds per question about to be asked
var time = questions.length*15;

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
    },
];


//Start the quiz
function quizStart(){
    //hide the start screen during the quiz
    var startQuizEl = document.getElementById("start");

    // make quetions appear



    //show starting time on the page


    getQuestions()

}


//Get questions to show up



//click questions and answers



//end the quiz



//time coiunt



//save high scores