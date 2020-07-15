// var firstName = prompt("Your first name?")
// var lastName = prompt("Your last name?")
// var age = prompt("Your age?")
// console.log("Your name is " + firstName + " " + lastName + ".")
// console.log("And your age is " + age + " years.")

// // alert(typeof(age))
// alert("You're " + age*365.25 + " days old.")

//FUNCTIONS PROBLEM SET

    //function declaration
// function isEven(num) {
//     if (num%2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

//function expression
var isEven = function(num) {
    return num%2===0;
}

    //function declaration
function factorial(num) {
    if (num === 0 || num===1){
        return 1;
    }
    else{
        return num*factorial(num-1);
    }
}

//function expression
var kebabToSnake = function(str) {  // OR function kebabToSnake(str) {}
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

// TODO LIST

// var what_to_do = prompt("What would you like to do?");
// var todos = []

// while(what_to_do !== "quit"){
//     var what_to_do = prompt("What would you like to do?");
//     if (what_to_do === "new"){
//         var todo = prompt("Add Todo.");
//         todos.push(todo);
//         alert(todo + " added.")
//     }
//     else if (what_to_do === "list"){
//         console.log("************");
//         todos.forEach(function(to_do, i){
//             console.log(i+1 + ": " + to_do);
//         });
//         console.log("************");
//     }
//     else if (what_to_do === "delete"){
//         var index = prompt("Enter the number?");
//         //splice() to remove particular item
//         console.log(todos[Number(index-1)]+ " removed.")
//         todos.splice(Number(index-1), 1);
//     }
// }
// alert("OK!, you quit the Todo App")

function printReverse(arr){
    for(var i=arr.length-1; i>=0; i--){
        console.log(arr[i])
    }
}

var isUniform = function(arr) {
    same = arr[0];
    len = 0;
    arr.forEach(function(item) {
        if (item === same){
            len++;
        }
    });
    if(len===arr.length){
        return true;
    }
    else{
        return false;
    }
}

function sumArray(arr) {
    sum = 0;
    arr.forEach(function(num){
        sum += num;
    });
    return sum;
}

function max(arr){
    maxm = arr[0];
    arr.forEach(function(num){
        if(num > maxm){
            maxm = num;
        }
    });
    return maxm;
}

var movieDB = [
    {
        name: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        name: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        name: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        name: "Les Miserables",
        rating: 3.5,
        hasWatched: false
    },
];

function printMovieDB() {
    movieDB.forEach(function(movie){
        if (movie.hasWatched){
            console.log("You have watched \""+ movie.name+"\" - "+movie.rating+" stars.")
        }
        else{
            console.log("You have not seen \""+ movie.name+"\" - "+movie.rating+" stars.")
        }
    });
}
alert("JS Methods.. ACTIVE");
//JS Methods
var comments = {};
comments.data = ["nice!", "good", "I hate this!!", "Not bad :)"];
//adding method
comments.print = function(){
    this.data.forEach(function(comment){
        console.log(comment);
    });
};