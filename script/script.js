let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3) + 1;
   if (choice == 1) 
    return "rock";
  else if (choice == 2)
    return "paper";
  else 
    return "scissors";
}

function getHumanChoice(){
  return prompt("Please write your choice(rock, paper or scissors): ").toLowerCase().trim();
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return "Computer Wins! Paper beats Rock";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    return "You Win! Rock beats Scissors";
  } else if (humanChoice === "rock" && computerChoice === "rock")
    return "It's a Draw!";
  
  if(humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return "Computer Wins! Scissors beats Paper";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return "You Win! Paper beats Rock";
  } else if (humanChoice === "paper" && computerChoice === "paper")
    return "It's a Draw!";

  if(humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return "Computer Wins! Rock beats Scissors";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return "You Win! Scissors beats Paper";
  } else if (humanChoice === "scissors" && computerChoice === "scissors")
    return "It's a Draw!";
}

function playGame() {
  let gameCounter = 0;
  do {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Current score: You ${humanScore} - ${computerScore} Computer`);
    gameCounter += 1;
  } while(gameCounter < 5);

  let result;
  if(humanScore > computerScore) {
    result = `You've won! Final score: ${humanScore} - ${computerScore}`;
    console.log(result);
    return result;
  } else if(humanScore < computerScore) {
    result = `You've lost! Final score: ${computerScore} - ${humanScore}`;
    console.log(result);
    return result;
  } else {
    result = `It's a draw! Final score: You ${humanScore} - ${computerScore} Computer`;
    console.log(result);
    return result;
  }
}

playGame();