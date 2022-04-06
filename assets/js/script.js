var questionsIndex = 0;



//keeps track of the time
//var timerId;


//gettign variables for elements in the HTML
var questionsEl = document.getElementById("questions");
var timeEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var intitialsEl = document.getElementById("intials");
var startBtn = document.getElementById("start");
var questionAppearedEl = document.getElementById("q-title");
var countDown;


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

// var time = questions.length * 15; commented out for testing

var time = 5;
//15 seconds per question about to be asked



//Start the quiz
function quizStart(){

    // make questions appear
    questionsEl.removeAttribute("class");
    questionAppearedEl.removeAttribute("class");
    
    //make choices appear
    choicesEl.removeAttribute("class");

    // timer = setInterval(clockCountDown, 1000);
    // timeEl.textContent = time;


    clockCountDown();
    getQuestions();
    clickAnswers();


}



//Get check which question that we want
function getQuestions(){
    //gets a question from the questions using question index
    var currentQuestion = questions[questionsIndex].title;
    questionAppearedEl.textContent = currentQuestion;
    var choicesBtn = "";
    //for loop to get the current question and choices based off of questionsIndex
    //loop gets all the choices based on the questions index that we increase on the get answers function below
    for(var i = 0; i < questions[questionsIndex].choices.length; i++){
        var currentChoice = questions[questionsIndex].choices[i];
        //each choice becomes its own button
        choicesBtn = choicesBtn + `
        <button> ${currentChoice} </button>
        </br>`;
        
        //questionsEl.appendChild(questionAppearedEl, currentQuestion)
    }
    choicesEl.innerHTML = choicesBtn;
}

//choice button click and 
//right or wrong answer
//questions index ++ to move to the next question in the array.
//execute getQestion function for next question


//click questions and answers
function clickAnswers(event){

    //assigning a variable to choicesEl.textcontent to get the answers
    var allAnswers = choicesEl.textContent;
    console.log(allAnswers);
    

    

    //increase questionsIndex
    questionsIndex++;

}







//time count
function clockCountDown(){
   
    //interval
    countDown = setInterval(function(){
        timeEl.textContent = time;
        time--;
    
        if (time < 0){


            endQuiz();
        }
    },1000);

    //timeEl = countDown;
    // console.log(timeEl);

    //check if the user is out of time
    
}


//end the quiz
function endQuiz(){

    console.log("endQuiz check")

    clearInterval(countDown);

}



//save high scores


startBtn.onclick = function(){
    quizStart();
}
