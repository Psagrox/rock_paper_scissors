//The user generate an input, which must be Rock, Paper or Scissors
document.getElementById("boton").addEventListener("click",function(){
    let opcion_usuario = prompt("¿que opcion queres? 1.Rock 2.Paper 3.Scissors");
    //variable to store user input
    let opcionUsuario;

    switch (parseInt(opcion_usuario)){
        case 1:
            // User choose Rock
            opcionUsuario = "Rock";
            console.log("You choose: " + opcion_usuario);
            break;
        case 2:
            // User choose Paper
            opcion_usuario = "Paper";
            console.log("You choose: " + opcion_usuario);
            break;
        case 3:
            // User choose Scissors
            opcion_usuario = "Scissors";
            console.log("You choose: " + opcion_usuario);
            break;
        default:
            //Invalid Option
            console.log("The option that you choose: " + opcion_usuario + " is invalid");
            alert("The option that you choose: " + opcion_usuario + " is invalid");
            break;
    }

})




//The computer generate a random responds to the user input

var opcion_compu;
var opciones = ["Rock", "Paper", "Scissors"];

function opcion_compu(opciones){
    return opciones[Math.floor(Math.random()*opciones.length)];
}

var opcionAleatoria = opcion_compu(opciones);
console.log("Computer choose:" + opcionAleatoria);



var count_user;
var count_computer;
if (opcionUsuario == opcionAleatoria) {
    //draft
    console.log("Draft");

}
//If the User choose Rock and computer choose paper computer wins

//IF the User choose Rock and computer choose scissors User Wins

//If the User choose Paper and computer choose Paper is a draft

//If the User choose Paper and computer choose scissors computer wins

//IF the User choose Paper and computer choose Rock User Wins

//If the User choose scissors and computer choose scissors is a draft

//If the User choose scissors and computer choose Rock computer wins

//IF the User choose scissors and computer choose Paper User Wins