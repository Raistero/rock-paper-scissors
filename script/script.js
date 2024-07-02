let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) return "rock";
  else if (choice == 2) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return "Computer Wins! Paper beats Rock";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    return "You Win! Rock beats Scissors";
  } else if (humanChoice === "rock" && computerChoice === "rock")
    return "It's a Draw!";

  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return "Computer Wins! Scissors beats Paper";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return "You Win! Paper beats Rock";
  } else if (humanChoice === "paper" && computerChoice === "paper")
    return "It's a Draw!";

  if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return "Computer Wins! Rock beats Scissors";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return "You Win! Scissors beats Paper";
  } else if (humanChoice === "scissors" && computerChoice === "scissors")
    return "It's a Draw!";
}

function resultsLogPrint(userInput) {
  const resultsLog = document.createElement("p");
  resultsLog.textContent = `${playRound(
    userInput,
    getComputerChoice()
  )} Current score: You ${humanScore} - ${computerScore} Computer`;
  document.body.appendChild(resultsLog);
}

const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");

function handledRock() {
  resultsLogPrint("rock");
}

function handledPaper() {
  resultsLogPrint("paper");
}

function hanndledScissors() {
  resultsLogPrint("scissors");
}

rockButton.addEventListener("click", handledRock);
paperButton.addEventListener("click", handledPaper);
scissorsButton.addEventListener("click", hanndledScissors);