var cardContent = [
    {
        question : "Which character defines an array?",
        choices : ["a.{}", "b.()", "c.[]" , "d.$"],
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

// Adding an event listener with a fucntion that starts the quiz
document.getElementById("startBtn").addEventListener("click" , function() {
    // Removes the "main-card" div from the DOM 
    document.getElementById("main-card").remove();
    // Laying out all the HTML that will be used for the quiz

    // Main div
    var mainDiv =  document.createElement("div");
    mainDiv.setAttribute("id" , "question-card");
    mainDiv.setAttribute("class" , "mx-auto p-3 w-50");
    document.body.appendChild(mainDiv);
    // Question div
    var questionsDiv =  document.createElement("div");
    questionsDiv.setAttribute("id" , "questions");
    questionsDiv.setAttribute("class" , "container");
    document.getElementById("question-card").appendChild(questionsDiv);
    // Answer Div
    var answerDiv =  document.createElement("div");
    answerDiv.setAttribute("id" , "answers");
    answerDiv.setAttribute("class" , "container");
    document.getElementById("question-card").appendChild(answerDiv);
    // Question
    var questionH1 = document.createElement("h1");
    questionH1.setAttribute("id" , "question-display");
    questionH1.setAttribute("class" , "m2 mb-3");
    document.getElementById("questions").appendChild(questionH1);
    // Buttons(4)
    for (var a = 0; a < 4; a ++) {
        mcBtns = document.createElement("button");
        mcBtns.setAttribute("class" , "m-2 mr-auto button");
        mcBtns.classList.add("button-" +a);
        document.getElementById("question-card").appendChild(mcBtns);
    }    
    // Line break
    var brEl = document.createElement("br");
    document.getElementById("question-card").appendChild(brEl);
    // Horizontal rule
    var hrEl = document.createElement("hr");
    hrEl.setAttribute("class" , "line-break");
    document.getElementById("question-card").appendChild(hrEl);
    // Paragraph
    var gradeEL = document.createElement("p");
    gradeEL.setAttribute("id" , "question-grade");
    gradeEL.setAttribute("class" , "text-muted pl-4  mr-auto grade");
    document.getElementById("question-card").appendChild(gradeEL);

    displayContent();
})

// Function to display content based on conditions 
function displayContent() {
    c = 0;
    var pageNumber;
    var question = cardContent[c].question;
    var questionDisplayed = document.getElementById("question-display");
    questionDisplayed.innerHTML = "";

    if (pageNumber = cardContent[c].questionNum) {
        questionDisplayed.innerHTML = question;

        for (var d = 0; d < 4; d++) {
            var choiceDisplay = document.querySelector(".button-" + d);
            choiceDisplay.innerHTML = cardContent[c].choices[d];  
        }

        for (var b = 0; b < 4; b++) {

            var buttonClicker = document.querySelector(".button-" + b);
            buttonClicker.addEventListener("click" , function(event) {
            console.log("buttons work")
    
            var targetClick = event.target.innerHTML;
            console.log(targetClick);
    
            if (targetClick !== cardContent[c].answer) {
                var grade = document.getElementById("question-grade");
                grade.innerHTML = "Incorrect.";
            } else {
                var grade = document.getElementById("question-grade");
                grade.innerHTML = "Correct.";
            }
            });
        }          
    }
}

// function countIterator() {
//       c++; 
//       displayContent;
// }




