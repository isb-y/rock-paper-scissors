let playerPoints = 0;
let computerPoints = 0;

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
  let playerSelection_rps = myArray[playerSelection];
  console.log("Player selection: " + playerSelection_rps);
  console.log("Computer selection: " + computerSelection);

  if (playerSelection_rps === computerSelection) {
    console.log("DRAW");
  } else if (playerSelection_rps === "Rock") {
    if (computerSelection === "Paper") {
      computerPoints++;
    } else {
      playerPoints++;
    }
  } else if (playerSelection_rps === "Paper") {
    if (computerSelection === "Scissors") {
      computerPoints++;
    } else {
      playerPoints++;
    }
  } else if (playerSelection_rps === "Scissors") {
    if (computerSelection === "Rock") {
      computerPoints++;
    } else {
      playerPoints++;
    }
  }

  return "Player points:" + playerPoints + ", computerPoints:" + computerPoints;
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("0,1,2 for rock, paper, scissors:", "");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log("");
  if (playerPoints === computerPoints) {
    return "DRAW!";
  }
  if (playerPoints > computerPoints) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

console.log(game());
