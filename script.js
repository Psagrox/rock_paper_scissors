
//I get the references of the buttons
var rockButton = document.getElementById("rockButton");
var paperButton = document.getElementById("paperButton");
var scissorsButton = document.getElementById("scissorsButton");

//I get the references of the elements of the score in the HTML
var scoreUser = document.getElementById("userScore");
var scoreComputer = document.getElementById("computerScore");

//Function to update the score
var userChoice;
var randomChoice;

var log = document.getElementById("log");


function updateScore (userChoice, randomChoice){
    if (parseInt(scoreUser.textContent) < 5 && parseInt(scoreComputer.textContent) < 5){
        log.textContent = "";
        if (userChoice == randomChoice){
            console.log("Draft");
        } else if (
            (userChoice == "Rock" && randomChoice == "Scissors") ||
            (userChoice == "Paper" && randomChoice == "Rock") ||
            (userChoice == "Scissors" && randomChoice == "Paper")
        ) {
            console.log("User Wins");
            scoreUser.textContent = parseInt(scoreUser.textContent) + 1;
        } else {
            console.log("Computer Wins");
            scoreComputer.textContent = parseInt(scoreComputer.textContent) + 1;
        }
        if (parseInt(scoreUser.textContent) == 5){
            console.log("User Wins");
            log.textContent = "User Wins";
        } else if (parseInt(scoreComputer.textContent) == 5){
            console.log("Computer Wins");
            log.textContent = "Computer Wins";
        }
} else {
    //game finished so it is reseat
    console.log("Game over");
    scoreUser.textContent = 0;
    scoreComputer.textContent = 0;
    log.textContent = "Game over";
    matchDetails.textContent = "Please choose an option to start again"
}
}

var matchDetails = document.getElementById("matchDetails");

//Assign events of clicks of the buttons
rockButton.addEventListener("click", function(){
    var userChoice = "Rock";
    var randomChoice = computerChoice(options);
    console.log("You choose: " + userChoice);
    console.log("Computer choose: " + randomChoice);
    matchDetails.textContent = ("You choose: " + userChoice + " | " + "Computer choose: " + randomChoice);
    updateScore(userChoice, randomChoice);
});

scissorsButton.addEventListener("click", function(){
    var userChoice = "Scissors";
    var randomChoice = computerChoice(options);
    console.log("You choose: " + userChoice);
    console.log("Computer choose: " + randomChoice);
    matchDetails.textContent = ("You choose: " + userChoice + " | " + "Computer choose: " + randomChoice);
    updateScore(userChoice, randomChoice);
});

paperButton.addEventListener("click", function(){
    var userChoice = "Paper";
    var randomChoice = computerChoice(options);
    console.log("You choose: " + userChoice);
    console.log("Computer choose: " + randomChoice);
    matchDetails.textContent = ("You choose: " + userChoice + " | " + "Computer choose: " + randomChoice);
    updateScore(userChoice, randomChoice);
});

//Function to generate randomChoice
var options = ["Rock", "Paper", "Scissors"];

function computerChoice(options){
    return options[Math.floor(Math.random() * options.length)];
}











