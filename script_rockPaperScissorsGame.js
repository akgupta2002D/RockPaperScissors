const gameHands = ["rock", "paper", "scissors"];

        let getComputerChoice = () => {
            let randomComputerInt = Math.floor((Math.random() * 3));
            return gameHands[randomComputerInt];
        };

        let humanScore = 0;
        let computerScore = 0;
        let rounds = 3; // Default to 3 rounds
        let currentRound = 0; // Track current round

        function playRound(humanChoice, computerChoice) {
            if (humanChoice == computerChoice) {
                return `It's a tie! ${computerChoice} == ${humanChoice}`;
            } else if (humanChoice == gameHands[0] && computerChoice == gameHands[1] ||
                       humanChoice == gameHands[1] && computerChoice == gameHands[2] ||
                       humanChoice == gameHands[2] && computerChoice == gameHands[0]) {
                computerScore += 1;
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            } else {
                humanScore += 1;
                return `You win! ${humanChoice} beats ${computerChoice}`;
            }
        }

        function updateScoreBoard() {
            document.getElementById('humanScore').textContent = humanScore;
            document.getElementById('computerScore').textContent = computerScore;
        }

        const playGameButton = document.getElementById('startGame');
        const resultDiv = document.getElementById('showResult');
        const gameOptions = document.getElementById("gameContinueOrExit");
        const playAgain = document.createElement("button");
        const exit = document.createElement("button");
        const showGameDiv = document.getElementById("showGame");
        const startGameDiv = document.getElementById("startGameDiv");

        const rockButton = document.createElement("button");
        const paperButton = document.createElement("button");
        const scissorsButton = document.createElement("button");
        const startAnotherGameButton = document.createElement("button"); // New button

        playGameButton.addEventListener("click", () => {
            rounds = document.querySelector('input[name="rounds"]:checked').value;
            startGameDiv.style.display = 'none';
            playGame();
        });

        function playGame() {
            resultDiv.textContent = "";
            gameOptions.textContent = "";

            rockButton.textContent = "rock";
            paperButton.textContent = "paper";
            scissorsButton.textContent = "scissors";

            showGameDiv.innerHTML = ''; // Clear previous buttons
            showGameDiv.appendChild(rockButton);
            showGameDiv.appendChild(paperButton);
            showGameDiv.appendChild(scissorsButton);

            // Add event listeners to buttons
            rockButton.onclick = () => handlePlayerChoice('rock');
            paperButton.onclick = () => handlePlayerChoice('paper');
            scissorsButton.onclick = () => handlePlayerChoice('scissors');

            playAgain.textContent = "Play Again";
            exit.textContent = "Exit";

            gameOptions.innerHTML = ''; // Clear previous options
            gameOptions.appendChild(playAgain);
            gameOptions.appendChild(exit);

            playAgain.onclick = () => playGame();
            exit.onclick = () => endGame();

            updateScoreBoard(); // Ensure scoreboard is up-to-date
        }

        function handlePlayerChoice(choice) {
            const computerChoice = getComputerChoice();
            resultDiv.textContent = playRound(choice, computerChoice);
            updateScoreBoard();
            currentRound++;
            if (currentRound >= rounds) {
                endGame();
            }
        }

        function endGame() {
            showGameDiv.textContent = "";
            resultDiv.textContent = "";
            gameOptions.textContent = "";

            startAnotherGameButton.textContent = "Start Another Game";
            document.getElementById('game').appendChild(startAnotherGameButton);

            startAnotherGameButton.onclick = () => {
                startAnotherGameButton.remove();
                resetGame();
            };
        }

        function resetGame() {
            humanScore = 0;
            computerScore = 0;
            currentRound = 0; // Reset the round count
            updateScoreBoard();
            startGameDiv.style.display = 'block';
        }
