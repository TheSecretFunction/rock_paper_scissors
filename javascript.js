// Function to randomly return rock, paper, or scissors from computer.
function getComputerChoice() {
    const result = Math.floor(Math.random() * 9) + 1;

    if (result >= 0 && result <= 3) {
        computerSelection = "rock";
        return computerSelection;
    }
    else if (result >= 4 && result <= 6) {
        computerSelection = "paper";
        return computerSelection;
    }
    else {
        computerSelection = "scissors";
        return computerSelection;
    }
}

// Function to play single round taking in case-insensitive input and returning string declaring winner or tie.
function singleRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    let outcome;

    if ((playerChoice == "rock") || (playerChoice == "paper") || (playerChoice == "scissors")) {
        if (computerSelection == "rock") {
            switch (playerChoice) {
                case "rock": 
                    console.log('You Tied! Rock ties with Rock');
                    outcome = "tied";
                    return outcome;
                    break;
                case "paper":
                    console.log('You Win! Paper beats Rock');
                    outcome = "win";
                    return outcome;
                    break;
                case "scissors":
                    console.log('You Lose! Rock beats Scissors');
                    outcome = "lose";
                    return outcome;
                    break;
                default: 
                    outcome = "invalid";
                    return outcome;
                    break;
            }
        }
        else if (computerSelection == "paper") {
            switch (playerChoice) {
                case "rock": 
                    console.log('You Lose! Paper beats Rock');
                    outcome = "lose";
                    return outcome;
                    break;
                case "paper":
                    console.log('You Tied! Paper ties with Paper');
                    outcome = "tied";
                    return outcome;
                    break;
                case "scissors":
                    console.log('You Win! Scissors beats Paper');
                    outcome = "win";
                    return outcome;
                    break;
                default: 
                    outcome = "invalid";
                    return outcome;
                    break;
            }
        }
        else {
            switch (playerChoice) {
                case "rock": 
                    console.log('You Win! Rock beats Scissors');
                    outcome = "win";
                    return outcome;
                    break;
                case "paper":
                    console.log('You Lose! Scissors beats Paper');
                    outcome = "lose";
                    return outcome;
                    break;
                case "scissors":
                    console.log('You Tied! Scissors ties with Scissors');
                    outcome = "tied";
                    return outcome;
                    break;
                default: 
                    outcome = "invalid";
                    return outcome;
                    break;  
            }
        }
    }
}

// Function to keep track of each round score.
function scoreKeeping(condition, playerScore, computerScore, i){
    if (condition == "win") {
        playerScore++;
    }
    else if (condition == "lose") {
        computerScore++;
    }
    else if (condition == "tied") {
        playerScore++;
        computerScore++;
    }
    else {
        i--;
    }   

    if (i == 4) {
        if (playerScore > computerScore) {
            console.log('You have won the match.');
        }
        else if (playerScore < computerScore) {
            console.log('You have lost the match.');
        }
        else {
            console.log('There is a tie in the match.');
        }
    }
}

// Function to prompt user for input and utilizing all other functions to complete match of game and reports the match outcome.
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Type rock, paper, or scissors: ");
        if (playerSelection == "") {
            i--;
        }
        else if (playerSelection == null) {
            break;
        }
        let playerChoice = playerSelection.toLowerCase();

        getComputerChoice();
        singleRound(playerChoice, computerSelection);
        scoreKeeping(singleRound(playerChoice, computerSelection), playerScore, computerScore, i);
    }
}

// Execution of the game.
playGame();