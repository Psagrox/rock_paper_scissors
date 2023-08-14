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
        scoreComputer.textContent = scoreComputer ++;

    }else if (opcionUsuario == "Rock" && opcionAleatoria == "Scissors"){
        //IF the User choose Rock and computer choose scissors User Wins
        console.log("User Wins");
        scoreUser.textContent = scoreUser ++;

    }else if (opcionUsuario == "Paper" && opcionAleatoria == "Scissors"){
        //If the User choose Paper and computer choose scissors computer wins
        console.log("Computer Wins");
    }else if (opcionUsuario == "Paper" && opcionAleatoria == "Rock"){
        //IF the User choose Paper and computer choose Rock User Wins
        console.log("User Wins");
    }else if (opcionUsuario == "Scissors" && opcionAleatoria == "Rock"){
        //If the User choose scissors and computer choose Rock computer wins
        console.log("Computer Wins");
    }else {
        //If the User choose scissors and computer choose Rock computer wins
        console.log("User Wins");
    }


})















