
// Adding an event listener with a fucntion that starts the quiz
document.getElementById("startBtn").addEventListener("click" , function() {
    // Removes the "main-card" div from the DOM 
    document.getElementById("main-card").remove();
    quiz();
})


//  Creating a function that displays and removes html elements based what user does
function quiz() {
    // Creating, setting attributes ,and pushing main div into DOM
    var brEl = document.createElement("br");
    var hrEl = document.createElement("hr");
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id" , "main-card-questions");
    mainDiv.setAttribute("class" , "mx-auto p-3 w-50");
    document.body.appendChild(mainDiv);


    // Array to hold questions and answers
    var questions = ["Which character defines an array?" , "Which is the correct syntax for a \"for\" loop?" , "Which of the following is a function?" , "Which of the following is a string?" , "What does \"5\" + 10 = ?"];
    var mulitChoice = [["a.{}" , "b.()" , "c.[]" , "d.</>"], ["a.for (i=0+i<5+i++)" , "b.for (var i=0; i<5; i++)" , "c.for(vari=0 i<5 i++)" , "d.for {var i=0; i<5; i++)"],
        ["a.function{}" , "b.function++" , "c.function.function" , "d.function()"], ["a.\"5\"" , "b.20" , "c.alert()" , "d.styles.css"], ["a.510" , "b.50" , "c.15" , "d.undefined"]];
    var trueAnswers = ["c.[]" , "b.for (var i=0; i<5; i++)" , "d.function()" , "a.\"5\"" , "a.510"];

    for (var i = 0; i < questions.length; i++) {
        console.log(i)

    // Question 1
        if (i < 1) {
            var question = document.createElement("h2");
            question.setAttribute("id" , "question");
            question.setAttribute("class" , "m-2 mb-3");
            document.getElementById("main-card-questions").appendChild(question);

            var questionDisplayed = document.getElementById("question");
            questionDisplayed.textContent = questions[i];

            for (var j = 0; j < 4; j++) {
                var choicesBtns = document.createElement("button");
                choicesBtns.setAttribute("id" , "choices");
                choicesBtns.setAttribute("class" , "m-1 mr-auto");
                document.getElementById("main-card-questions").appendChild(choicesBtns);
                choicesBtns.textContent = mulitChoice[i][j];
            }
        }
    }
}     
