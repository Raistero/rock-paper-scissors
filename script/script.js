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
    computerScore++;
    return "Computer Wins! Paper beats Rock";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You Win! Rock beats Scissors";
  } else if (humanChoice === "rock" && computerChoice === "rock")
    return "It's a Draw!";

  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "Computer Wins! Scissors beats Paper";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You Win! Paper beats Rock";
  } else if (humanChoice === "paper" && computerChoice === "paper")
    return "It's a Draw!";

  if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "Computer Wins! Rock beats Scissors";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You Win! Scissors beats Paper";
  } else if (humanChoice === "scissors" && computerChoice === "scissors")
    return "It's a Draw!";
}

function resultsLogPrint(userInput) {
  const resultsLog = document.createElement("p");
  resultsLog.textContent = `${playRound(
    userInput,
    getComputerChoice()
  )}. Current score: You ${humanScore} - ${computerScore} Computer`;
  document.querySelector(".results-log-container").appendChild(resultsLog);
}

function printFinalScore() {
  const finalScorePrint = document.createElement("p");
  if (computerScore > humanScore) {
    finalScorePrint.textContent = `Computer Won! The final score is: You ${humanScore} - ${computerScore} Computer`;
    document
      .querySelector(".results-log-container")
      .appendChild(finalScorePrint);
  } else {
    finalScorePrint.textContent = `You Won! The final score is: You ${humanScore} - ${computerScore} Computer`;
    document
      .querySelector(".results-log-container")
      .appendChild(finalScorePrint);
  }
}

function endGame() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  newGameButton.style.display = "inline";
}

const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");
const newGameButton = document.querySelector("#new-game");

//Every handler function will print the result of a game, after a click, if any of the score is less then 5.
//It will then check if it reaches 5 and if it does, it prints the final result of the game.
function handledRock() {
  if (computerScore < 5 && humanScore < 5) {
    resultsLogPrint("rock");
  }

  if (computerScore == 5 || humanScore == 5) {
    printFinalScore();
    // rockButton.removeEventListener("click", handledRock);
    endGame()
  }
}

function handledPaper() {
  if (computerScore < 5 && humanScore < 5) {
    resultsLogPrint("paper");
  }

  if (computerScore == 5 || humanScore == 5) {
    printFinalScore();
    // rockButton.removeEventListener("click", handledPaper);
    endGame()
  }
}

function hanndledScissors() {
  if (computerScore < 5 && humanScore < 5) {
    resultsLogPrint("scissors");
  }

  if (computerScore == 5 || humanScore == 5) {
    printFinalScore();
    // rockButton.removeEventListener("click", hanndledScissors);
    endGame()
  }
}

function handledNewGame() {
  document.querySelector(".results-log-container").innerHTML = "";
  newGameButton.style.display = "none";
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  humanScore = 0;
  computerScore = 0;
}

rockButton.addEventListener("click", handledRock);
paperButton.addEventListener("click", handledPaper);
scissorsButton.addEventListener("click", hanndledScissors);
newGameButton.addEventListener("click", handledNewGame);