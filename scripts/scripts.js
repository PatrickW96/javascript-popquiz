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

    var questionH1 = document.createElement("h1");
    questionH1.setAttribute("id" , "question-display");
    questionH1.setAttribute("class" , "m2 mb-3");
    document.getElementById("questions").appendChild(questionH1);

    // Loop to create mulitple choice buttons where question answer options will go 
    for (var i = 0; i < 4; i ++) {
        mcBtns = document.createElement("button");
        mcBtns.setAttribute("class" , "m-2 mr-auto button");
        mcBtns.classList.add("button-" +i);
        document.getElementById("question-card").appendChild(mcBtns);
    }
    var brEl = document.createElement("br");
    document.getElementById("question-card").appendChild(brEl);

    var hrEl = document.createElement("hr");
    hrEl.setAttribute("class" , "line-break");
    document.getElementById("question-card").appendChild(hrEl);

    var pEL = document.createElement("p");
    pEL.setAttribute("class" , "text-muted pl-4 grade");
    document.getElementById("question-card").appendChild(pEL);

    displayContent();
}

// Creating a function that displays content based on conditions
function displayContent() {
    // Creating an object so I can store the quiz
    var cardContent = [
        {
            question : "Which character defines an array?",
            choices : ["a.{}", "b.()", "c.[]" , "d.</>"],
            answer : "c.[]",
            questionNum : 1
        },
        {
            question : "Which is the correct syntax for a \"for\" loop?",
            choices : ["a.for (i=0+i<5+i++)", "b.for (var i=0; i<5; i++)","c.for(vari=0 i<5 i++)","d.for {var i=0; i<5; i++)"],
            answer : "b.for (var i=0; i<5; i++)",
            questionNum : 2
        },
        {
            question : "Which of the following is a function?", 
            choices : ["a.function{}", "b.function++", "c.function.function", "d.function()"],
            answer : "d.function()",
            questionNum : 3
        },
        {
            question : "Which of the following is a string?",
            choices : ["a.\"5\"", "b.20", "c.alert()", "d.styles.css"],
            answer : "a.\"5\"",
            questionNum : 4
        },
        {
            question : "What does \"5\" + 10 = ?",
            choice1 : ["a.510", "b.50", "c.15", "d.undefined"],
            answer : "a.510",
            questionNum : 5
        }
    ];

    // Display var
    var questionDisplayer = 0;
    var answerDisplayer = 0;

    // Starting to display content to appened elemtns 
    var questionDisplayed = document.getElementById("question-display");
    questionDisplayed.textContent = cardContent[questionDisplayer].question;

    var mcDisplayed1 = document.querySelector(".button-0");
    mcDisplayed1.textContent = cardContent[questionDisplayer].choices[answerDisplayer];
    answerDisplayer++;

    var mcDisplayed2 = document.querySelector(".button-1");
    mcDisplayed2.textContent = cardContent[questionDisplayer].choices[answerDisplayer];
    answerDisplayer++;

    var mcDisplayed3 = document.querySelector(".button-2");
    mcDisplayed3.textContent = cardContent[questionDisplayer].choices[answerDisplayer];
    answerDisplayer++;

    var mcDisplayed4 = document.querySelector(".button-3");
    mcDisplayed4.textContent = cardContent[questionDisplayer].choices[answerDisplayer];
    answerDisplayer++;
    
    for (var b = 0; b < 4; b++) {
        var buttonClick = document.querySelector(".button-" + b);
        console.log(buttonClick)
        buttonClick.addEventListener("click" , function () {
            console.log(questionDisplayer)

            questionDisplayer++
            answerDisplayer = 0;


        })
    }
}






 



