// Establishing elements to put onto the cover page 
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var btnEl = document.createElement("button");

h1El.textContent = "JavaScript Pop Quiz";
pEl.textContent = "Try to answer the following javascript related questions before time runs out. Wrong answers will subtract 10 seconds of the clock. Good Luck!";
btnEl.textContent = "Start Quiz";

// Adding elements to main div wrapper
document.getElementById("main-wrapper").appendChild(h1El);
document.getElementById("main-wrapper").appendChild(pEl);
document.getElementById("main-wrapper").appendChild(btnEl);

//  Adding necessary attributes
document.getElementById("main-wrapper").setAttribute("style" , "display:grid; place-items:center; text-align:center; margin:20% auto;")
btnEl.setAttribute("class" , "m-1;")
btnEl.setAttribute("id" , "startBtn");

// Adding an event listener to activate the quiz and act as cover page killswitch
document.getElementById("main-wrapper").addEventListener("click" , function() {
    document.getElementById("main-wrapper").remove();
})


// Creating var to hold question and answer values
var questions = ["Which is the key sign of an array?" , "Which is the correct syntax for a \"for\" loop?" , "Which of the following is a function?" , "Which of the following is a string?" , "What does \"5\" + 10 = ?"];
var answers = ["[]" , "for (var i = 0; i < x; i++)" , "function()" , "Welcome to the beginging" , "510"];


// Creating a loop to clear and print to the page the correct HTML elements for each question
for (var i = 0; i < questions.length; i++) {
    
    }
