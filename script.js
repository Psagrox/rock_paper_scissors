/*
//The user generate an input, which must be Rock, Paper or Scissors
document.getElementById("boton").addEventListener("click",function(){
    let opcion_usuario = prompt("¿que opcion queres? 1.Rock 2.Paper 3.Scissors");
    //variable to store user input
    let opcionUsuario;

    switch (parseInt(opcion_usuario)){
        case 1:
            // User choose Rock
            opcionUsuario = "Rock";
            console.log("You choose: " + opcionUsuario);
            break;
        case 2:
            // User choose Paper
            opcionUsuario = "Paper";
            console.log("You choose: " + opcionUsuario);
            break;
        case 3:
            // User choose Scissors
            opcionUsuario = "Scissors";
            console.log("You choose: " + opcionUsuario);
            break;
        default:
            //Invalid Option
            console.log("The option that you choose: " + opcion_usuario + " is invalid");
            alert("The option that you choose: " + opcion_usuario + " is invalid");
            break;
    }





    //The computer generate a random responds to the user input

    var opcion_compu;
    var opciones = ["Rock", "Paper", "Scissors"];

    function opcion_compu(opciones){
        return opciones[Math.floor(Math.random()*opciones.length)];
    }

    var opcionAleatoria = opcion_compu(opciones);
    console.log("Computer choose: " + opcionAleatoria);

    //The variables that will hold the score
    var scoreUser = document.getElementById("userScore");
    var scoreComputer = document.getElementById("computerScore");

    if (opcionUsuario == opcionAleatoria) {
        //draft
        console.log("Draft");

    }else if (opcionUsuario == "Rock" && opcionAleatoria == "Paper"){
        //If the User choose Rock and computer choose paper computer wins
        console.log("Computer Wins");
        scoreComputer.textContent = parseInt(scoreComputer.textContent) +1;

    }else if (opcionUsuario == "Rock" && opcionAleatoria == "Scissors"){
        //IF the User choose Rock and computer choose scissors User Wins
        console.log("User Wins");
        scoreUser.textContent = parseInt(scoreUser.textContent) +1;

    }else if (opcionUsuario == "Paper" && opcionAleatoria == "Scissors"){
        //If the User choose Paper and computer choose scissors computer wins
        console.log("Computer Wins");
        scoreComputer.textContent = parseInt(scoreComputer.textContent) +1;

    }else if (opcionUsuario == "Paper" && opcionAleatoria == "Rock"){
        //IF the User choose Paper and computer choose Rock User Wins
        console.log("User Wins");
        scoreUser.textContent = parseInt(scoreUser.textContent) +1;

    }else if (opcionUsuario == "Scissors" && opcionAleatoria == "Rock"){
        //If the User choose scissors and computer choose Rock computer wins
        console.log("Computer Wins");
        scoreComputer.textContent = parseInt(scoreComputer.textContent) +1;

    }else {
        //If the User choose scissors and computer choose Rock computer wins
        console.log("User Wins");
        scoreUser.textContent = parseInt(scoreUser.textContent) +1;
    }


})
*/

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
function updateScore (userChoice, randomChoice){
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
}

//Assign events of clicks of the buttons
rockButton.addEventListener("click", function(){
    var userChoice = "Rock";
    var randomChoice = computerChoice(options);
    console.log("You choose: " + userChoice);
    console.log("Computer choose: " + randomChoice);
    updateScore(userChoice, randomChoice);
});

scissorsButton.addEventListener("click", function(){
    var userChoice = "Scissors";
    var randomChoice = computerChoice(options);
    console.log("You choose: " + userChoice);
    console.log("Computer choose: " + randomChoice);
    updateScore(userChoice, randomChoice);
});

paperButton.addEventListener("click", function(){
    var userChoice = "Paper";
    var randomChoice = computerChoice(options);
    console.log("You choose: " + userChoice);
    console.log("Computer choose: " + randomChoice);
    updateScore(userChoice, randomChoice);
});

//Function to generate randomChoice
var options = ["Rock", "Paper", "Scissors"];

function computerChoice(options){
    return options[Math.floor(Math.random() * options.length)];
}











