//GLOBAL VARIABLES
        var choices = ["rock", "paper", "scissors"];
        var num = Math.floor(Math.random()*choices.length);


// DOCUMENT READY FUNCTION
// $( document ).ready(function() {
//      $(".row").hide();
//
//      $("button").click(function(){
//              var userChoice = $("#user-input").val();
//              var compChoice = choices[num]
//
//              if (userChoice === "rock" && compChoice === "scissors") {
//                      $(".row").show();
//                      $("#user").append("<img src='images/rock.png'>");
//                      $("#comp").append("<img src='images/scissors2.png'>");
//                      $("#winn").append("<img src='images/you-win.gif'>");
//              } else if(userChoice === "paper" && compChoice === "rock") {
//                      $(".row").show();
//                      $("#user").append("<img src='images/paper.png'>");
//                      $("#comp").append("<img src='images/rock.png'>");
//                      $("#winn").append("<img src='images/you-win.gif'>");
//              } else if(userChoice === "scissors" && compChoice === "paper") {
//                      $(".row").show();
//                      $("#user").append("<img src='images/scissors2.png'>");
//                      $("#comp").append("<img src='images/paper.png'>");
//                      $("#winn").append("<img src='images/you-win.gif'>");
//              } else if(userChoice === "rock" && compChoice === "paper") {
//                      $(".row").show();
//                      $("#user").append("<img src='images/rock.png'>");
//                      $("#comp").append("<img src='images/paper.png'>");
//                      $("#winn").append("<img src='images/you-lose.png'>");
//              } else if(userChoice === "paper" && compChoice === "scissors") {
//                      $(".row").show();
//                      $("#user").append("<img src='images/paper.png'>");
//                      $("#comp").append("<img src='images/scissors.png'>");
//                      $("#winn").append("<img src='images/you-lose.png'>");
//              } else if(userChoice === "scissors" && compChoice === "rock") {
//                      $(".row").show();
//                      $("#user").append("<img src='images/scissors.png'>");
//                      $("#comp").append("<img src='images/rock.png'>");
//                      $("#winn").append("<img src='images/you-lose.png'>");
//              } else if(userChoice === "rock" && compChoice === "rock") {
//                      $(".row").show();
//                      $("#user").append("<img src='images/rock.png'>");
//                      $("#comp").append("<img src='images/rock.png'>");
//                      $("#winn").append("<img src='images/its-a-tie.png'>");
//              } else if(userChoice === "paper" && compChoice === "paper") {
//                      $(".row").show();
//                      $("#user").append("<img src='images/paper.png'>");
//                      $("#comp").append("<img src='images/paper.png'>");
//                      $("#winn").append("<img src='images/its-a-tie.png'>");
//              } else if(userChoice === "scissors" && compChoice === "scissors") {
//                      $(".row").show();
//                      $("#user").append("<img src='images/scissors.png'>");
//                      $("#comp").append("<img src='images/scissors.png'>");
//                      $("#winn").append("<img src='images/its-a-tie.png'>");
//              } else if(userChoice !== "rock" || "paper" || "scissors") {
//                      $("#incorrect-input").append("Ha ha, wrong");
//              }
//
//      });
// });
