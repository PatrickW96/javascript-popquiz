
// Adding an event listener with a fucntion that starts the quiz
document.getElementById("startBtn").addEventListener("click" , function() {
    document.getElementById("main-card").remove();

    //HTML is now removed from current page
    // Adding new elements to the document
    var mainDivElement = document.createElement("div");
    var h2EL = document.createElement("h2");
    var olEL = document.createElement("ol");

    // Adding necessary attributes to elements
    mainDivElement.setAttribute("id" , "main-card-questions");
    mainDivElement.setAttribute("class" , "container mx-auto p-3 w-50");

    h2EL.setAttribute("id" , "questions");
    h2EL.setAttribute("class" , "m-2 mb-3");

    olEL.setAttribute("id" , "olEL")
    h2EL.setAttribute("class" , "mr-auto")

    // Creating an array to hold all the quiz questions
    var questions = ["Which character defines an array?" , "Which is the correct syntax for a \"for\" loop?" , "Which of the following is a function?" , "Which of the following is a string?" , "What does \"5\" + 10 = ?"];

    // Creating a loop so the quiz loops through question array
    for (var i = 0; i < questions.length; i++) {
        h2EL.textContent = questions[i];
        console.log(questions[i]);


        // Decide how you would like to do the loop to loop through the questions.
        // Also think about how you are going to produce the answers.
    }

    })

// Creating var to hold question and answer values
// var answers = ["[]" , "for (var i = 0; i < x; i++)" , "function()" , "Welcome to the beginging" , "510"];

// // Creating a loop to clear and print to the page the correct HTML elements for each question
// for (var i = 0; i < questions.length; i++) {

//     // First I create some HTML elements to store the quiz data
//     var mainDiv = document.createElement("div").setAttribute("id" , "main-wrapper");
//     var h1El = document.createElement("h1");
//     var olEl = document.createElement("ol");
//     var liEl = document.createElement("li");
//     var btnEl = document.createElement("button");

//     // Adding contents to elements 
//     h1El.textContent = questions[i];


//     //Pushing the elements onto the DOM
//     document.body.getElementById("main-wrapper").appendChild(h1El); 
// }
// })


//     // Adding contents to the elements 
//     h1El.textContent = questions[i];
//     document.getElementById("main-wrapper").appendChild(h1El);
//     }
