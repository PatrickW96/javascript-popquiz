var questions = ["Which is the key sign of an array?" , "Which is the correct syntax for a \"for\" loop?" , 
    "Which of the following is a function?" , "Which of the following is a string?" , "What does \"5\" + 10 = ?"];

var answers = ["[]" , "for (var i = 0; i < x; i++)" , "function()" , "Welcome to the beginging" , "510"];

for (var i = 0; i < questions.length; i++) {
    var question = document.getElementById("questions");
    var questionEl = document.createElement("h2");

    questionEl.textContent = questions[i];
    question.innerHTML = questionEl;
}

 