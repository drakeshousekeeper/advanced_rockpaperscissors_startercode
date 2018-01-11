//GLOBAL VARIABLES
        var choices = ["rock", "paper", "scissors"];
        var choicesPics = ["<img src='images/rock.png'>", "<img src='images/paper.png'>", "<img src='images/scissors.png'>"];
        var results = ["<img src='images/you-win.gif'>", "<img src='images/you-lose.png'>", "<img src='images/its-a-tie.png'>",];


// DOCUMENT READY FUNCTION
$( document ).ready(function() {
    
    $(".row").hide();
    $("#clear-button").hide();
    
    $("#play-button").click(function(){
        var num = Math.floor(Math.random()*2);
        var usersInput = $("#user-input").val();
        var userChoice = usersInput.toLowerCase();
        var compChoice = choices[num];
        
        if (userChoice === "rock") {
            $("#user").html(choicesPics[0]);
        } else if(userChoice === "paper") {
             $("#user").html(choicesPics[1]);
        } else if(userChoice === "scissors") {
            $("#user").html(choicesPics[2]);
        } else if(userChoice !== "rock" || "paper" || "scissors") {
            $("#incorrect-input").html("You have to type in an ACTUAL choice to comply with the code properly, man :/");
        }
        
        if (compChoice === "rock") {
            $("#comp").html(choicesPics[0]);
        } else if(compChoice === "paper") {
            $("#comp").html(choicesPics[1]);
        } else if(compChoice === "scissors") {
            $("#comp").html(choicesPics[2]);
        }
        
        if (userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper" || userChoice === "rock" && compChoice === "scissors") {
            $(".row").show();
            $("#play-button").hide();
            $("#clear-button").show();
            $("#winn").html(results[0]);
            $("#incorrect-input").empty();
        } else if(userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock") {
            $(".row").show();
            $("#play-button").hide();
            $("#clear-button").show();
            $("#winn").html(results[1]);
            $("#incorrect-input").empty();
        } else if(userChoice === compChoice) {
            $(".row").show();
            $("#play-button").hide();
            $("#clear-button").show();
            $("#winn").html(results[2]);
            $("#incorrect-input").empty();
        }
        
        $("#clear-button").click(function() {
            $("#user").html("");
            $("#comp").html("");
            $("#winn").html("");
            $(".row").hide();
            $("#play-button").show();
            $("#clear-button").hide();
        });
    });
});