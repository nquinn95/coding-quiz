

function showScoreboard(){
    //var playerScores = JSON.parse(window.localStorage.getItem("highscores"));
    var playerScores = [];

    playerScores.sort(function(a,b){

        return b.scores - a.scores;
    });


    playerScores.forEach(function(scores){

        var liEl = document.createElement("li");
        liEl.textContent = socres.initials + " - " + scores.scores;


        var olEl = document.getElementById("highscores");
        olEl.appendChild(liEl);;
    })
};

function deleteScores(){

    window.localStorage.removeItem("highscores");


    window.localStorage.reload();
}


document.getElementById("delete-scores").onclick = deleteScores;

showScoreboard();