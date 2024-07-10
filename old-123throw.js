//confirm asks user for true/false (in browser you'll get immutable buttons like Cancel and OK)
//prompt asks user for input

//ask user Rock/Paper/Scissors>>>>defined as the user input
//user gives it
//display what user picked
//else we tell them they failed the easiest game ever
//system picks random Rock/Paper/Scissors>>>>>defined as the computer's input
//display what system picked
//decide who won
//display the message

// let startGame = prompt("Hey buddy... Rock, Paper, or Scissors?");
// console.log(`User has picked ${startGame}.`)
// const RPS = ["Rock","Paper","Scissors"];

let userChoice;
let compChoice;
const RPS = ["Rock","Paper","Scissors",];
let wins = 0;
let losses = 0;
let ties = 0;

function genRandomNumber(min, max){
    return Math.floor(Math.random()
    * (max - min + 1) + min)
  }

function randomRPS(){
    const systemChoice = genRandomNumber(0, RPS.length -1);
    console.log(`System has picked ${RPS[systemChoice]}.`);
    alert(`System has picked ${RPS[systemChoice]}.`);
    compChoice = RPS[systemChoice];
    determineWinner()
}

const results = {
    Rock: {
        Rock: "Tie game!",
        Paper: "OMG! You lost!",
        Scissors: "Wow, you won!"
    },
    Paper: {
        Rock: "Wow, you won!",
        Paper: "Tie game!",
        Scissors: "OMG! You lost!" 
    },
    Scissors: {
        Rock: "OMG! You lost!",
        Paper: "Wow, you won!",
        Scissors: "Tie game!"
    }
}

function start(){
    let startGame = prompt("Hey buddy... Rock, Paper, or Scissors?");
    if( !RPS.includes(startGame) ){
        alert("This is not an acceptable value; please capitalize the first letter of your choice, too.")
        start()
    } else {
        console.log(`User has picked ${startGame}.`);
        alert(`User has picked ${startGame}.`);
        userChoice = startGame;
        randomRPS()
    }
}

function determineWinner(){
    const result = results[userChoice][compChoice];
    

    if( result === "Wow, you won!" ){
        wins++
    } else if( result === "OMG! You lost!" ){
        losses++
    } else {ties++}
    console.log(`${result} Wins:${wins} Losses:${losses} Ties:${ties}`);
    alert(`${result} Wins:${wins} Losses:${losses} Ties:${ties}`);
    const playAgain = confirm("Play again?");
    start()
}

start()

// if (startGame === "Rock" && randomRPS(systemChoice) === "Scissors"){
//     console.log("Wow, you win!")
// }
//     else if (startGame = Rock) and (randomRPS(systemChoice) = Paper)
// { console.log("Wow, you suck!")} 
//     else if (startGame = Rock) and (randomRPS(systemChoice) = Rock)
//     { console.log("Wow, a tie game!")} 
//     else if (startGame = Paper) and (randomRPS(systemChoice) = Rock)
//         { console.log("Wow, you win!")} 
//     else if (startGame = Paper) and (randomRPS(systemChoice) = Scissors){ console.log("Wow, you suck!")} 
//     else if (startGame = Paper) and (randomRPS(systemChoice) = Paper){ console.log("Wow, a tie game!")} 
//     else if (startGame = Scissors) and (randomRPS(systemChoice) = Paper){ console.log("Wow, you win!")} 
//     else if (startGame = Scissors) and (randomRPS(systemChoice) = Rock){ console.log("Wow, you suck!")} 
//     else if (startGame = Scissors) and (randomRPS(systemChoice) = Scissors) { console.log("Wow, a tie game!")} 
// else console.log("Wtf is wrong with you? You broke my toy!")
