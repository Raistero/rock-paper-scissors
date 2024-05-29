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

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

console.log(playRound(humanChoice, computerChoice));