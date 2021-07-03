"use strict";

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const randomNumber = Math.trunc(Math.random() * 3 + 1);
  let computerPlayResult;
  if (randomNumber === 1) {
    return (computerPlayResult = "ROCK");
  } else if (randomNumber === 2) {
    return (computerPlayResult = "PAPER");
  } else {
    return (computerPlayResult = "SCISSORS");
  }
}

function playRound(playerSelection, computerSelection) {
  const playerResult = playerSelection.toUpperCase();
  let playRoundResult;
  if (playerResult === computerSelection) {
    playRoundResult = "Draw";
  } else if (
    (playerResult === "ROCK" && computerSelection === "SCISSORS") ||
    (playerResult === "PAPER" && computerSelection === "ROCK") ||
    (playerResult === "SCISSORS" && computerSelection === "PAPER")
  ) {
    playRoundResult = `Player Wins! ${playerResult} wins ${computerSelection}`;
    playerScore += 1;
  } else {
    playRoundResult = `Computer Wins! ${computerSelection} wins ${playerResult}`;
    computerScore += 1;
  }
  console.log(playRoundResult);
  return playRoundResult;
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
}

console.log(game());
console.log(playerScore, computerScore);
