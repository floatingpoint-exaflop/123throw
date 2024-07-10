let userChoice; let compChoice;
const RPS = ["ROCK","PAPER","SCISSORS",];
let wins = 0; let losses = 0; let ties = 0;
let rockCount = 0; let paperCount = 0; let scissorsCount = 0;
let play = document.querySelector('h1');

const results = {
    ROCK: {
        ROCK: "Tie game!",
        PAPER: "OMG! You lost!",
        SCISSORS: "Wow, you won!"
    },
    PAPER: {
        ROCK: "Wow, you won!",
        PAPER: "Tie game!",
        SCISSORS: "OMG! You lost!" 
    },
    SCISSORS: {
        ROCK: "OMG! You lost!",
        PAPER: "Wow, you won!",
        SCISSORS: "Tie game!"
    }
}

function getStatsPrintOut() {
    return `Wins: ${wins}\nLosses: ${losses}\nTies: ${ties}\nTimes you've used Rock: ${rockCount}\n\nTimes you've used Paper: ${paperCount}\nTimes you've used Scissors: ${scissorsCount}`;
}

function game(){
    let startGame = prompt("Hey buddy... Rock, Paper, or Scissors?");
    if (!startGame) {
        return;
    }
    userChoice = startGame.toUpperCase();
    if(!RPS.includes(userChoice)){
        alert("This is not an acceptable value; please try again.")
        start()
    } else {
        console.log(`User has picked ${userChoice}.`);
        alert(`User has picked ${userChoice}.`);
        if (userChoice === 'ROCK'){
            rockCount++;
        } else if (userChoice === 'PAPER'){
            paperCount++;
        } else if (userChoice === 'SCISSORS'){
            scissorsCount++;
        } 
        //math for random computer move
        const random = Math.floor(Math.random() * RPS.length)
        compChoice = RPS[random];
        console.log(`Computer has chosen ${compChoice}.`);
        alert(`Computer has chosen ${compChoice}.`);
        //picking and displaying the results
        const result = results[userChoice][compChoice];
        if( result === "Wow, you won!" ){
            wins++
        } else if( result === "OMG! You lost!" ){
            losses++
        } else {ties++}
        const statsPrintOut = getStatsPrintOut();
        const playAgain = confirm(`${result}\n\nPlay again?\n${statsPrintOut} `);
        console.log(statsPrintOut);
        if (!playAgain) {
            return;
        } else start();
    }
}
//call og function with button
play.addEventListener('click', function (event) {
    event.preventDefault();
    game();
});