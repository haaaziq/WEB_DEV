var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var scoreInput = document.querySelector("input");

var p1ScoreDisplay = document.querySelector("#p1Display");
var p2ScoreDisplay = document.getElementById("p2Display");
var totalScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var totalScore = 5;
var gameOver = false;

scoreInput.addEventListener("change", function(){
    totalScoreDisplay.textContent = this.value;
    totalScore = Number(this.value);
    reset();
});

p1Button.addEventListener("click", function(){
    if(gameOver === false){
        p1Score++;
        p1ScoreDisplay.textContent = p1Score;
        if(p1Score === totalScore){
            p1ScoreDisplay.classList.add("winner");
            gameOver = true;
            alert("GAME OVER, Player 1 WINS!");
        }
    }
});

p2Button.addEventListener("click", function(){
    if(gameOver === false){
        p2Score++;
        p2ScoreDisplay.textContent = p2Score;
        if (p2Score === totalScore){
            p2ScoreDisplay.classList.add("winner");
            gameOver = true;
            alert("GAME OVER, Player 2 WINS!");
        }
    }
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisplay.textContent = 0;
    p2ScoreDisplay.textContent = 0;
    p2ScoreDisplay.classList.remove("winner");
    p1ScoreDisplay.classList.remove("winner");
    gameOver = false;
}

//_______________________________TODO______________________
var todos = document.querySelectorAll("li");

for (var i=0; i<todos.length; i++){
    todos[i].addEventListener("mouseover", function(){
        // this.style.color = "green";
        this.classList.add("green");
    });

    todos[i].addEventListener("mouseout", function(){
        // this.style.color = "black";
        this.classList.remove("green");
    });

    todos[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}