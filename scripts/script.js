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
    return `It's a draw!`;
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
  } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return "Incorrect choice entered";
  }
}

function getGameResult (result) {
  if (result.charAt(4) === "W") {
    return "W";
  } else if(result.charAt(4) === "L") {
    return "L";
  } else {
    return "D";
  }
}

let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0

for(let i = 1; i <= 5; i++) {
  let playerChoice = prompt("Insert your choice:", "Rock, Paper or Scissors");
  let roundPlay = playRound(playerChoice, getComputerChoice());
  if (getGameResult(roundPlay) === "W") {
    console.log(roundPlay);
    winCounter++;
  } else if(getGameResult(roundPlay) === "L") {
    console.log(roundPlay);
    loseCounter++;
  } else if (getGameResult(roundPlay) === "D"){
    console.log(roundPlay);
    drawCounter++;
  } else {
    console.log(roundPlay);
  }
}

if(winCounter > loseCounter) {
  console.log(`You Won! Result: You ${winCounter} - ${loseCounter} Computer (${drawCounter} Draw)`);
} else if (winCounter < loseCounter) {
  console.log(`You Lost! Result: You ${winCounter} - ${loseCounter} Computer (${drawCounter} Draw)`);
} else {
  console.log(`It's a Draw! Result: You ${winCounter} - ${loseCounter} Computer`);
}