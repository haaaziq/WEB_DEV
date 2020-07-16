var colors = generateRandomColors(6);
var newColorsButton = document.querySelector("#new_tryAgain_Button");
var heading = document.querySelector("h1");
var footer = document.querySelector("footer");

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

//Generate New Colors OR Try Again?
newColorsButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    
    if(newColorsButton.textContent === "PLAY AGAIN?") {
        newColorsButton.textContent = "NEW COLORS";
        messageDisplay.textContent = "";
    }

    finalColor = colors[Math.floor(Math.random()*colors.length)]
    finalColorDisplay.textContent = finalColor;

    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    heading.style.backgroundColor = "rgb(62, 132, 155)";
    footer.style.backgroundColor = "rgb(62, 132, 155)";
});

//_______________________________________________________

//Selecting color for answer
var finalColor = colors[Math.floor(Math.random()*colors.length)]
var finalColorDisplay = document.querySelector("h1 span");
finalColorDisplay.textContent = finalColor;

//_______________________________________________________

//Selecting all squares, and providing colors and adding click event
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#messageDisplay");

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

function correctColor(color) {
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = color;
    }
}
//_______________________________________________________

