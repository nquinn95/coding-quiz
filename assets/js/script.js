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
        title: "What is my fourth question?",
        choices: ["A", "B", "C","D"],
        answer: "D"
    },
    {
        title: "What is my fifth question?",
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



}



//Get check which question that we want
function getQuestions(){
    //gets a question from the questions using question index
    console.log(questionsIndex);
    var currentQuestion = questions[questionsIndex].title;
    questionAppearedEl.textContent = currentQuestion;
    var choicesBtn = "";
    //for loop to get the current question and choices based off of questionsIndex
    //loop gets all the choices based on the questions index that we increase on the get answers function below
    for(var i = 0; i < questions[questionsIndex].choices.length; i++){
        var currentChoice = questions[questionsIndex].choices[i];
        //each choice becomes its own button
        choicesBtn = choicesBtn + `
        <button class="answer"> ${currentChoice} </button>
        </br>`;
        
        //questionsEl.appendChild(questionAppearedEl, currentQuestion)
    }
    choicesEl.innerHTML = choicesBtn;
}

//choice button click and 
//right or wrong answer
//questions index ++ to move to the next question in the array.
//execute getQestion function for next question




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

function getAnswer(event){
    console.log(event.target);
    if(event.target.matches(".answer")){
        console.log(event.target.textContent);
        //check to see the text content on the button is the same as questions[questionsindex].answer  if they are the same show correct.  if htey are not the same take 10 seconds off the time
        questionsIndex++;
        getQuestions();
    }
}


//save high scores
document.querySelector(".wrapper").addEventListener("click", getAnswer);



startBtn.onclick = function(){
    quizStart();
}
