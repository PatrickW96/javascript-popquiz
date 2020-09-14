// Adding an event listener with a fucntion that starts the quiz
document.getElementById("startBtn").addEventListener("click" , function() {
    // Removes the "main-card" div from the DOM 
    document.getElementById("main-card").remove();
    quiz();
})

function quizSetup() {
    // Creating main div and submain children divs
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


}

function displayQuiz (

)




 



