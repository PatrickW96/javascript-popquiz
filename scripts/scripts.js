// var questions = ["Which is the key sign of an array?" , "Which is the correct syntax for a \"for\" loop?" , 
//     "Which of the following is a function?" , "Which of the following is a string?" , "What does \"5\" + 10 = ?"];

// var answers = ["[]" , "for (var i = 0; i < x; i++)" , "function()" , "Welcome to the beginging" , "510"];

// for (var i = 0; i < questions.length; i++) {
//     var question = document.getElementById("questions");
//     var questionEl = document.createElement("h2");

//     questionEl.textContent = questions[i];
//     question.innerHTML = questionEl;
// }

// Establishing elements to put onto the page 
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var btnEl = document.createElement("button");

h1El.textContent = "JavaScript Pop Quiz";
pEl.textContent = "Try to answer the following javascript related questions before time runs out. Wrong answers will subtract 10 seconds of the clock. Good Luck!";
btnEl.textContent = "Start Quiz";

 