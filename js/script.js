//GLOBAL VARIABLES
        var choices = ["rock", "paper", "scissors"];
        var choicesPics = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        var results = ["images/you-win.gif", "images/you-lose.png", "images/its-a-tie.png",];


// DOCUMENT READY FUNCTION
$( document ).ready(function() {
    
    $(".container").hide();
    $(".row").hide();
    $("#clear-button").hide();
    
    $("#ready-button").click(function(){
         $(".container").show();
         $("#instructions").hide();
    });
    
    $("#play-button").click(function(){
        var num = Math.floor(Math.random()*2);
        var usersInput = $("#user-input").val();
        var userChoice = usersInput.toLowerCase();
        var compChoice = choices[num];
        
        if (userChoice === "rock") {
            $("#user").attr("src", choicesPics[0]);
        } else if(userChoice === "paper") {
             $("#user").attr("src", choicesPics[1]);
        } else if(userChoice === "scissors") {
            $("#user").attr("src", choicesPics[2]);
        } else if(userChoice !== "rock" || "paper" || "scissors") {
            $("#incorrect-input").html("You have to type in an ACTUAL choice to comply with the code properly, man :/");
            // $("button").css("margin-bottom", "20px");
        }
        
        if (compChoice === "rock") {
            $("#comp").attr("src", choicesPics[0]);
        } else if(compChoice === "paper") {
            $("#comp").attr("src", choicesPics[1]);
        } else if(compChoice === "scissors") {
            $("#comp").attr("src", choicesPics[2]);
        }
        
        if (userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper" || userChoice === "rock" && compChoice === "scissors") {
            $(".row").show();
            $("#play-button").hide();
            $("#clear-button").show();
            $("#winn").attr("src", results[0]);
            $("#incorrect-input").empty();
        } else if(userChoice === "rock" && compChoice === "paper" || userChoice === "paper" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "rock") {
            $(".row").show();
            $("#play-button").hide();
            $("#clear-button").show();
            $("#winn").attr("src", results[1]);
            $("#incorrect-input").empty();
        } else if(userChoice === compChoice) {
            $(".row").show();
            $("#play-button").hide();
            $("#clear-button").show();
            $("#winn").attr("src", results[2]);
            $("#incorrect-input").empty();
        }
        
        $("#clear-button").click(function() {
            $("#user").attr("src", "");
            $("#comp").attr("src", "");
            $("#winn").attr("src", "");
            $(".row").hide();
            $("#play-button").show();
            $("#clear-button").hide();
        });
    });
});