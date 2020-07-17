var numSquares = 6
var colors = generateRandomColors(numSquares);
var newColorsButton = document.querySelector("#new_tryAgain_Button");
var heading = document.querySelector("h1");
var footer = document.querySelector("footer");
var difficultyButtons = document.querySelectorAll(".diffModeButton");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#messageDisplay");

//Selecting color for answer
var finalColor = colors[Math.floor(Math.random()*colors.length)]
var finalColorDisplay = document.querySelector("h1 span");
finalColorDisplay.textContent = finalColor;

//Click Listener on Squares 
for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        if (this.style.backgroundColor === finalColor){
            messageDisplay.textContent = "CORRECT!"
            correctColor(finalColor);
            heading.style.backgroundColor = finalColor;
            footer.style.backgroundColor = finalColor;
            newColorsButton.textContent = "PLAY AGAIN?";          
        }
        else{
            messageDisplay.textContent = "TRY AGAIN!";
            this.style.backgroundColor = "#212121";
        }
    });
}

//Difficulty Mode Buttons
for(var i=0; i<difficultyButtons.length; i++) {
    difficultyButtons[i].addEventListener("click", function(){
        difficultyButtons[0].classList.remove("selected");
        difficultyButtons[1].classList.remove("selected");
        
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

        reset();
    });
}

//Generate New Colors OR Try Again?
newColorsButton.addEventListener("click", function(){
    reset();
});

//___________________FUNCTIONS______________________
//__________________________________________________

function generateRandomColors(num) {
    var arr =[];
    for (var i=0; i < num; i++){
        arr.push(generateColor());
    }
    return arr;
}

function generateColor(){
    //using math.random for generating no. bwn 0 & 1 , then * by 256
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
    colors = generateRandomColors(numSquares);
    
    finalColor = colors[Math.floor(Math.random()*colors.length)]
    finalColorDisplay.textContent = finalColor;

    if(newColorsButton.textContent === "PLAY AGAIN?") {
        newColorsButton.textContent = "NEW COLORS";
        // messageDisplay.textContent = "";
    }
    messageDisplay.textContent = "";

    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

    heading.style.backgroundColor = "rgb(62, 132, 155)";
    footer.style.backgroundColor = "rgb(62, 132, 155)";
}

function correctColor(color) {
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = color;
    }
}
//_______________________________________________________