//GLOBAL VARIABLES
        var choices = ["rock", "paper", "scissors"];
        var choicesPics = ["<img src='images/rock.png'>", "<img src='images/paper.png'>", "<img src='images/scissors2.png'>"];
        var results = ["<img src='images/you-win.gif'>", "<img src='images/yo-lose.png'>", "<img src='images/its-a-tie.png'>",]
        var num = Math.floor(Math.random()*choices.length);


// DOCUMENT READY FUNCTION
$( document ).ready(function() {
    $(".row").hide();
    
    $("button").click(function(){
        var userChoice = $("#user-input").val();
        var compChoice = choices[num];
        
        if (userChoice === "rock") {
            $("#user").append(choicesPics[0]);
        } else if(userChoice === "paper") {
            $("#user").append(choicesPics[1]);
        } else if(userChoice === "scissors") {
            $("#user").append(choicesPics[2]);
        }
        
        if (compChoice === "rock") {
            $("#comp").append(choicesPics[0]);
        } else if(compChoice === "paper") {
            $("#comp").append(choicesPics[1]);
        } else if(compChoice === "scissors") {
            $("#comp").append(choicesPics[2]);
        }
        
        if (userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper" || userChoice === "rock" && compChoice === "scissors") {
            $(".row").show();
            $("#winn").append(results[0]);
        } else if(userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock") {
            $(".row").show();
            $("#winn").append(results[1]);
        } else if(userChoice === compChoice) {
            $(".row").show();
            $("#winn").append(results[2]);
        } else if(userChoice !== "rock" || "paper" || "scissors") {
            $("#incorrect-input").append("Haha, wrong");
        }
    });
});
