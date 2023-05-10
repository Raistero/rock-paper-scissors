function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber <= 33) {
    return "Rock";
  } else if (randomNumber <= 66) {
    return "Paper";
  } else 
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.at(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
  if (playerSelection === computerSelection) {
    return `It's a draw`;
  } else if (playerSelection === "Rock" && computerSelection === "Paper"){
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}