// Adding an event listener with a fucntion that starts the quiz
document.getElementById("startBtn").addEventListener("click" , function() {
    // Removes the "main-card" div from the DOM 
    document.getElementById("main-card").remove();
    quizSetup();
})

function quizSetup() {
    // Creating main div and children elements
    var mainDiv =  document.createElement("div");
    mainDiv.setAttribute("id" , "question-card");
    mainDiv.setAttribute("class" , "mx-auto p-3 w-50");
    document.body.appendChild(mainDiv);

    var questionsDiv =  document.createElement("div");
    questionsDiv.setAttribute("id" , "questions");
    questionsDiv.setAttribute("class" , "container");
    document.getElementById("question-card").appendChild(questionsDiv);

    var gradeDiv =  document.createElement("div");
    gradeDiv.setAttribute("id" , "answers");
    gradeDiv.setAttribute("class" , "container");
    document.getElementById("question-card").appendChild(gradeDiv);

    var questionDisplay = document.createElement("h2");
    questionDisplay.setAttribute("id" , "question-display");
    questionDisplay.setAttribute("class" , "m2 mb-3");
    document.getElementById("questions").appendChild(questionDisplay);


    // Creating an object so I can store the quiz
    var cardContent = [
        {
            question : "Which character defines an array?",
            choice : ["a.{}" , "b.()" , "c.[]" , "d.</>"],
            answer : "c.[]",
            questionNum : 1
        },
        {
            question : "Which is the correct syntax for a \"for\" loop?",
            choice : ["a.for (i=0+i<5+i++)" , "b.for (var i=0; i<5; i++)" , "c.for(vari=0 i<5 i++)" , "d.for {var i=0; i<5; i++)"],
            answer : "b.for (var i=0; i<5; i++)",
            questionNum : 2
        },
        {
            question : "Which of the following is a function?",
            choice : ["a.function{}" , "b.function++" , "c.function.function" , "d.function()"],
            answer : "d.function()",
            questionNum : 3
        },
        {
            question : "Which of the following is a string?",
            choice : ["a.\"5\"" , "b.20" , "c.alert()" , "d.styles.css"],
            answer : "a.\"5\"",
            questionNum : 4
        },
        {
            question : "What does \"5\" + 10 = ?",
            choice : ["a.510" , "b.50" , "c.15" , "d.undefined"],
            answer : "a.510",
            questionNum : 5
        }
    ];

    questionDisplay.textContent = cardContent[0].question;

    for(var i = 0; i < 4; i++) {
        var mcBtns = document.createElement("button");
        mcBtns.setAttribute("class" , "m-1 mr-auto");
        document.getElementById("question-card").appendChild(mcBtns);    
    }
}




 



