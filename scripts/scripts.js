var cardContent = [
    {
        question : "Which character defines an array?",
        choices : ["a.{}", "b.()", "c.[]" , "d.$"],
        answer : "c.[]",
    },
    {
        question : "Which is the correct syntax for a \"for\" loop?",
        choices : ["a.for (i=0+i<5+i++)", "b.for (var i=0; i<5; i++)","c.for(vari=0 i<5 i++)","d.for {var i=0; i<5; i++)"],
        answer : "b.for (var i=0; i<5; i++)",
    },
    {
        question : "Which of the following is a function?", 
        choices : ["a.function{}", "b.function++", "c.function.function", "d.function()"],
        answer : "d.function()",
    },
    {
        question : "Which of the following is a string?",
        choices : ["a.\"5\"", "b.20", "c.alert()", "d.styles.css"],
        answer : "a.\"5\"",
    },
    {
        question : "What does \"5\" + 10 = ?",
        choices : ["a.510", "b.50", "c.15", "d.undefined"],
        answer : "a.510",
    }
];

var c = 0;
var seconds = 50;
var score = 0;
var setTimer;

// Adding an event listener with a fucntion that starts the quiz
document.getElementById("startBtn").addEventListener("click" , function() {
    // Removes the "main-card" div from the DOM 
    document.getElementById("main-card").remove();
    // MOVED ALL THE CODE THAT WAS HERE TO -> createQuestionTemplate function
        // That way we can resuse the code. 
        // Basically we make sure the whole card is deleted before start adding the new questions
    createQuestionTemplate();
    displayContent();
    setTimer = setInterval(quizTimer , 1000);
    quizTimer();
});

// Laying out all the HTML that will be used for the quiz
function createQuestionTemplate() {
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
};


// Function to display content based on conditions 
function displayContent() {
    var card = document.querySelector('#question-card');
    card.remove();
    createQuestionTemplate();

    if (c > 4) {
        endQuiz();
    };

    var question = cardContent[c].question;
    var questionDisplayed = document.getElementById("question-display");
    questionDisplayed.textContent = "";

        questionDisplayed.textContent = question;

        for (var b = 0; b < 4; b++) {
            var buttonClicker = document.querySelector(".button-" + b);
            buttonClicker.textContent = cardContent[c].choices[b]; 
            buttonClicker.addEventListener("click" , function(event) {
            event.stopPropagation();
            handleClick(event);
            })
        };  
};

// Function for click events that take place during the quiz
function handleClick(event) {
    console.log('Current: ', c)
    console.log(cardContent[1].answer)

    var grade = document.getElementById("question-grade");
    var targetClick = event.target.textContent;
    console.log(targetClick);

    if (targetClick !== cardContent[c].answer) {
        document.getElementById('question-grade').classList.add('alert-danger')
        grade.textContent = "Incorrect.";
        seconds -= 10;
        goToNext();
    } else if (targetClick == cardContent[c].answer) {
        document.getElementById('question-grade').classList.add('alert-success')
        grade.textContent = "Correct.";
        score += 100;
        goToNext();
    };
};


function goToNext() {
    c++;
    setTimeout(function() {
        displayContent();
    }, 500)
};

function endQuiz() {
    clearInterval(setTimer);
    document.getElementById("question-card").remove();
    endGameTemplate();
    endTemplateDisplay();
};


function endGameTemplate() {
    // Adding main div
    var cardDiv =  document.createElement("div");
    cardDiv.setAttribute("id" , "end-card");
    cardDiv.setAttribute("class" , "container p-3 w-50");
    document.body.appendChild(cardDiv);
    // Adding h1
    var h1El =  document.createElement("h1");
    h1El.setAttribute("class" , "mr-auto p-1 h1-tag");
    document.getElementById("end-card").appendChild(h1El);
    // Adding p
    var pEl =  document.createElement("p");
    pEl.setAttribute("class" , "mr-auto p-1 p-tag");
    document.getElementById("end-card").appendChild(pEl);
    // Adding form
    var formEL =  document.createElement("form");
    formEL.setAttribute("id" , "form");
    formEL.setAttribute("class" , "row mr-auto mb-2 p-2");
    document.getElementById("end-card").appendChild(formEL);
    // Nesting label in formEl
    var labelEl =  document.createElement("label");
    labelEl.setAttribute("class" , "col m-1 label-tag");
    document.getElementById("form").appendChild(labelEl);
    // Nesting input in formEl
    var inputEL =  document.createElement("input");
    inputEL.setAttribute("class" , "col input-tag form-control");
    inputEL.setAttribute("type" , "userInitials");
    document.getElementById("form").appendChild(inputEL);
    // Nesting button in formEL
    var sumbitBtn =  document.createElement("button");
    sumbitBtn.setAttribute("id" , "submitBtn");
    sumbitBtn.setAttribute("class" , "col mx-3 p-0 submit");
    document.getElementById("form").appendChild(sumbitBtn);
    // Line break
    var brEl = document.createElement("br");
    document.getElementById("end-card").appendChild(brEl);
    // Horizontal rule
    var hrEl = document.createElement("hr");
    hrEl.setAttribute("class" , "line-break2");
    document.getElementById("end-card").appendChild(hrEl);  
};

function endTemplateDisplay() {
    var allDone = document.querySelector(".h1-tag");
    allDone.textContent = "All Done!"

    var pTag = document.querySelector(".p-tag");
    pTag.textContent = "Your Final Score is : " + score + " !!!";

    var labelTag = document.querySelector(".label-tag");
    labelTag.textContent = "Enter Initials: ";

    var buttonTag = document.querySelector(".submit");
    buttonTag.textContent = "Submit";

    document.querySelector('.submit').addEventListener('click' , btnClick);
};

function btnClick() {
    document.getElementById("end-card").remove();

    displayhighScoreTemplate();
    setTimeout(5000);
};

function displayhighScoreTemplate() {
    var divContainer = document.createElement('div');
    divContainer.setAttribute('id' , 'highScoreDiv');
    divContainer.setAttribute('class' , 'container p-3 w-50');
    document.body.append(divContainer);

    var highScore = document.createElement('h2');
    highScore.setAttribute('class' , 'highScoreText');
    document.getElementById('highScoreDiv').append(highScore);

    var listScore = document.createElement('ul');
    listScore.setAttribute('id' , 'highScoreList');
    listScore.setAttribute('class' , 'container p-3 w-50');
    document.getElementById('highScoreDiv').append(listScore);

    var listedItem = document.createElement('li');
    listedItem.setAttribute('id' , 'userScore');

    document.querySelector('.highScoreText').textContent = "HIGH SCORE";
};

// function reCreateMain() {
//     document.getElementById("highScoreDiv").remove();

//     var container = document.createElement('div');
//     container.setAttribute('id' , 'main-card');
//     container.setAttribute('class' , 'container mx-auto p-3 w-50 text-center');
//     document.body.append(container);

//     var title = document.createElement('h1');
//     title.setAttribute('class' , 'm-2');
//     title.textContent = "Javascript Pop Quiz";
//     document.getElementById('main-card').append(title);

//     var paragraph = document.createElement('p');
//     paragraph.setAttribute('class' , 'm-2');
//     paragraph.textContent = "Try to answer the following javascript related questions before time runs out. Wrong answers will subtract 10 seconds of the clock. Good Luck!";
//     document.getElementById('main-card').append(paragraph);


//     var btn = document.createElement('button');
//     btn.setAttribute('id' , 'startBtn');
//     btn.setAttribute('class' , 'm-2');
//     btn.textContent = "Start Quiz";
//     document.getElementById('main-card').append(btn);

//     seconds = 50;
//     timer = document.getElementById('timer');
//     timer.textContent = seconds;
// };

function quizTimer() {
    timer = document.getElementById('timer');
    seconds--;
    timer.textContent = seconds;

    if (seconds == 0) {
        clearInterval(setTimer);
        endQuiz();
    }; 
};