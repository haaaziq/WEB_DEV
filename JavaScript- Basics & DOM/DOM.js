var button = document.querySelector("button");
var body = document.querySelector("body");
var text = document.querySelector("p");
var isPurple = false;
button.addEventListener("click", function(){
    // body.classList.toggle("purple");
    if(isPurple){
        body.style.background = "white";
        button.textContent = "PURPLE";
        body.style.color = "black";
        text.textContent = "NORMAL Colors"
    }
    else{
        body.style.background = "purple";
        body.style.color = "white";
        button.textContent = "WHITE";
        text.textContent = "color changed to purple.";
    }
    isPurple = !isPurple;
});