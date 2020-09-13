
// Adding an event listener with a fucntion that starts the quiz
document.getElementById("startBtn").addEventListener("click" , function() {
    // Removes the "main-card" div from the DOM 
    document.getElementById("main-card").remove();
    quiz();
})

//  Creating a function that displays and removes html elements based what user does
function quiz() {
        // Creating every element for quiz card 
        var mainDivElement = document.createElement("div");
        var h2EL = document.createElement("h2");
        var orderedList = document.createElement("ol");
        var li = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");
        var btnEl1 = document.createElement("button");
        var btnEl2 = document.createElement("button");
        var btnEl3 = document.createElement("button");
        var btnEl4 = document.createElement("button");
        var brEl = document.createElement("br");
        var hrEL = document.createElement("hr");
        var pTag = document.createElement("p");

        mainDivElement.setAttribute("id" , "main-card-questions");
        mainDivElement.setAttribute("class" , "container mx-auto p-3 w-50");
    
        // Applying all the nescessary attribues for targeting/ styling
        mainDivElement.setAttribute("id" , "main-card-questions");
        mainDivElement.setAttribute("class" , "container mx-auto p-3 w-50");
    
        h2EL.setAttribute("id" , "questions");
        h2EL.setAttribute("class" , "m-2 mb-3");
    
        orderedList.setAttribute("id" , "olEl");
        orderedList.setAttribute("class" , "mr-auto");

        li.setAttribute("id" , "option1");
        li.setAttribute("class" , "m-2");
        li2.setAttribute("id" , "option2");
        li2.setAttribute("class" , "m-2");
        li3.setAttribute("id" , "option3");
        li3.setAttribute("class" , "m-2");
        li4.setAttribute("id" , "option4");
        li4.setAttribute("class" , "m-2");


        hrEL.setAttribute("class" , "line-break");

        pTag.setAttribute("class" , "text-muted mr-auto pl-4");

        // Pushing main div to the page
        document.body.appendChild(mainDivElement);

        // Adding children
        document.getElementById("main-card-questions").appendChild(orderedList);

        document.getElementById("olEl").appendChild(li);
        document.getElementById("option1").appendChild(btnEl1);

        document.getElementById("olEl").appendChild(li2);
        document.getElementById("option2").appendChild(btnEl2);

        document.getElementById("olEl").appendChild(li3);
        document.getElementById("option3").appendChild(btnEl3);

        document.getElementById("olEl").appendChild(li4);
        document.getElementById("option4").appendChild(btnEl4);

        document.getElementById("main-card-questions").appendChild(brEl);
        document.getElementById("main-card-questions").appendChild(hrEL);
        document.getElementById("main-card-questions").appendChild(pTag);



    

}
