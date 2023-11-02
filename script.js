function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return 'Tie!';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper')
    || (playerSelection === 'scissors' && computerSelection === 'rock')
    || (playerSelection === 'paper' && computerSelection === 'scissors'))
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    else{
        return `You Win! ${playerSelection} beats ${computerSelection}`;} 
  }

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scizors'];
    let indexChoice;
    indexChoice = Math.floor(Math.random()*choices.length);
    return choices[indexChoice];
    }

function getPlayerSelection() {
    let choices = ['rock', 'paper', 'scissors'];
    while (true) {
        let playerChoice = prompt("Rock, paper, or scissors? ").toLowerCase();
        if (playerChoice === null || playerChoice.trim() === "") {
            console.log("Invalid choice. Please choose from 'rock', 'paper', or 'scissors'.");
            continue
        }
        if (choices.includes(playerChoice)) {
            return playerChoice;
        }
        console.log("Invalid choice. Please choose from 'rock', 'paper', or 'scissors'.");
    }
}
    
function game() {
    let userScore = 0;
    let computerScore = 0;
    while (userScore < 5 && computerScore < 5){
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == `You Lose! ${computerSelection} beats ${playerSelection}`){
            console.log(roundResult);
            computerScore++;
        }
        else if (roundResult == `You Win! ${playerSelection} beats ${computerSelection}`){
            userScore++;
            console.log(roundResult);
        }
        else{
            console.log(roundResult);
        }
    }
    if (userScore<computerScore){
        console.log(`Game over! You lost! User score: ${userScore} | Computer score: ${computerScore}`)
    }
    else if (userScore>computerScore){
        console.log(`Game over! You won! User score: ${userScore} | Computer score: ${computerScore}`)
    }
}


game()