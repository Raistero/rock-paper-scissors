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

function finishGame() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
  newGameButton.style.visibility = "visible";
  return;
}

const rock = document.querySelectorAll("button")[0];
const paper = document.querySelectorAll("button")[1];
const scissors = document.querySelectorAll("button")[2];
const newGameButton = document.querySelectorAll("button")[3];
const resultLog = document.querySelector(".result");

let result ="";
let winCounter = 0;
let loseCounter = 0;
let drawCounter = 0;

function checkWin () {
  if (winCounter === 5) {
    const winLine = `You Won! Result: You ${winCounter} - ${loseCounter} Computer (${drawCounter} Draw)`;
    roundLog(winLine);

    finishGame();
    return;
  }

  if (loseCounter === 5) {
    let loseParagraph = document.createElement("p");
    loseParagraph.textContent = `You Lost! Result: You ${winCounter} - ${loseCounter} Computer (${drawCounter} Draw)`;
    resultLog.appendChild(loseParagraph);
    
    finishGame();
    return;
  }
}

function roundLog(textLine) {
  const paragraph = document.createElement("p");
  resultLog.appendChild(paragraph);
  paragraph.textContent = textLine;
}

function decideRound(choice) {
  result = playRound(choice, getComputerChoice());
  if(getGameResult(result) === 'W') {
    winCounter++;
  } else if (getGameResult(result) === 'L') {
    loseCounter++;
  } else {
    drawCounter++;
  }
}

rock.addEventListener("click", () => {
  decideRound("rock");
  roundLog(result);
  checkWin();
});
  
paper.addEventListener("click", () => {
  decideRound("paper");
  roundLog(result);
  checkWin();
});
  
scissors.addEventListener("click", () => {
  decideRound("scissors");
  roundLog(result);
  checkWin();
});

newGameButton.addEventListener("click", () => {
  winCounter = 0;
  loseCounter = 0;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  newGameButton.style.visibility = "hidden";
  while(resultLog.firstChild) {
    resultLog.removeChild(resultLog.firstChild);
  }
})
