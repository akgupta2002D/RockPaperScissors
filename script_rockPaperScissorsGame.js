
const gameHands = ["rock", "paper", "scissors"]

let getComputerChoice = () => {
    let randomComputerInt = Math.floor((Math.random() *3) );
    return gameHands[randomComputerInt]
} 

let getHumanChoice = () => {
    console.log("0 - Rock, 1 - Paper, 2 - Scissors")
    let choice = parseInt(prompt("Enter your choice for the round "));
    while (choice < 0 || choice > 2 ){
        choice = parseInt(prompt("Enter a correct choice: "));
    }
    return gameHands[choice];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        
        return `Its a tie! ${computerChoice} == ${humanChoice}`;
    }
    else if (humanChoice == gameHands[0] && computerChoice == gameHands[1]){
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if (humanChoice == gameHands[1] && computerChoice == gameHands[2]){
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if (humanChoice == gameHands[2] && computerChoice == gameHands[0]){
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else{
        humanScore += 1;
        return `You Win! ${humanChoice} beats ${computerChoice}`
    }
}


function playGame() {

    console.log("WELCOME TO ROCK PAPER AND SCISSORS")
    console.log("Let's Find out if you are lucky??")
    console.log("===================================")


     
    for (let i = 1; i <= 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`=========== Round: ${i}===============`)

    }

    console.log(`=========== GAME OVER ===============`)

    console.log(`Final Scores: `)
    console.log(`Human Score = ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
    console.log(`Ties: ${5 - (computerScore + humanScore)}`)

}

playGame()

