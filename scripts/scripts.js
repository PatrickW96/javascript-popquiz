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

    // Loop to create mulitple choice buttons where question answer options will go 
    for (var i = 0; i < 4; i ++) {
        mcBtns = document.createElement("button");
        mcBtns.setAttribute("class" , "m-2 mr-auto");
        document.getElementById("question-card").appendChild(mcBtns);
    }

    var brEl = document.createElement("br");
    document.getElementById("question-card").appendChild(brEl);

    var hrEl = document.createElement("hr");
    hrEl.setAttribute("class" , "line-break");
    document.getElementById("question-card").appendChild(hrEl);

    var pEL = document.createElement("p");
    pEL.setAttribute("class" , "text-muted pl-4");
    document.getElementById("question-card").appendChild(pEL);

    // Creating an object so I can store the quiz
    var cardContent = [
        {
            question : "Which character defines an array?",
            choice1 : "a.{}",
            choice2 : "b.()",
            choice3 : "c.[]",
            choice4 : "d.</>",
            answer : "c.[]",
            questionNum : 1
        },
        {
            question : "Which is the correct syntax for a \"for\" loop?",
            choice1 : "a.for (i=0+i<5+i++)",
            choice2 : "b.for (var i=0; i<5; i++)",
            choice3 : "c.for(vari=0 i<5 i++)",
            choice4 : "d.for {var i=0; i<5; i++)",
            answer : "b.for (var i=0; i<5; i++)",
            questionNum : 2
        },
        {
            question : "Which of the following is a function?",
            choice1 : "a.function{}",
            choice2 : "b.function++",
            choice3 : "c.function.function",
            choice4 : "d.function()",
            answer : "d.function()",
            questionNum : 3
        },
        {
            question : "Which of the following is a string?",
            choice1 : "a.\"5\"",
            choice2 : "b.20",
            choice3 : "c.alert()",
            choice4 : "d.styles.css",
            answer : "a.\"5\"",
            questionNum : 4
        },
        {
            question : "What does \"5\" + 10 = ?",
            choice1 : "a.510",
            choice2 : "b.50",
            choice3 : "c.15",
            choice4 : "d.undefined",
            answer : "a.510",
            questionNum : 5
        }
    ];

    // Starting to display content to appened elemtns 



}





 



