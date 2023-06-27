let playerPoints = 0;
let computerPoints = 0;

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

let gameplayEnabled = true;

function enableGameplay() {
  gameplayEnabled = true;
}

function disableGameplay() {
  gameplayEnabled = false;
}


function playAgain() {
  // Reset points
  // Update points display
  playerPoints = 0;
  computerPoints = 0;
  updatePoints('', '', playerPoints, computerPoints);

  // Enable gameplay
  enableGameplay();

  // Clear winner text
  winner.textContent = '';

  // Hide the play again button
  playAgainButton.style.display = 'none';
}


function playRound(playerSelection) {
  if (!gameplayEnabled) {
    return;
  }

  let playerSelection_rps = myArray[playerSelection];
  const computerSelection = getComputerChoice();



  if (playerSelection_rps === computerSelection) {
    if (round_Winner) {
      round_Winner.textContent = 'DRAW!!!';
    }
  } else if (playerSelection_rps === "Rock") {
    if (computerSelection === "Paper") {
      if (round_Winner) {
        round_Winner.textContent = 'Computer wins round!';
      }
      computerPoints++;
    } else {
      if (round_Winner) {
        round_Winner.textContent = 'Player wins round!';
      }
      playerPoints++;
    }
  } else if (playerSelection_rps === "Paper") {
    if (computerSelection === "Scissors") {
      if (round_Winner) {
        round_Winner.textContent = 'Computer wins round!';
      }
      computerPoints++;
    } else {
      if (round_Winner) {
        round_Winner.textContent = 'Player wins round!';
      }
      playerPoints++;
    }
  } else if (playerSelection_rps === "Scissors") {
    if (computerSelection === "Rock") {
      if (round_Winner) {
        round_Winner.textContent = 'Computer wins round!';
      }
      computerPoints++;
    } else {
      if (round_Winner) {
        round_Winner.textContent = 'Player wins round!';
      }
      playerPoints++;
    }
  }
  updatePoints(playerSelection_rps, computerSelection, playerPoints, computerPoints);

  if (computerPoints >= 5 || playerPoints >= 5) {
    if (computerPoints > 4) {
      winner.textContent = 'You lose :(';
    } else {
      winner.textContent = 'You win !!!';
    }
    // Show the play again button
    playAgainButton.style.display = 'block';
    // Call disableGameplay() initially to prevent gameplay
    disableGameplay();
  }
  return "Player points:" + playerPoints + ", computerPoints:" + computerPoints;
}

// Function to update the player points
function updatePoints(playerSelection_rps, computerSelection, playerPoints, computerPoints) {
    player_Selection.textContent = 'Player selected: ' + playerSelection_rps;
    comp_Selection.textContent = 'Computer selected: ' + computerSelection;
    player_Points.textContent = 'Player points: ' + playerPoints;
    comp_Points.textContent = 'Computer points: ' + computerPoints;
}


// Function to reset the player points to zero
function resetPoints(id) {
  const pointsElement = document.querySelector(id);
  if (pointsElement) {
    pointsElement.textContent = 'Player points: 0';
  }
}

function game() {
  const playerSelection = prompt("0,1,2 for rock, paper, scissors:", "");
  console.log(playRound(playerSelection));
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


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
var i = -1;
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playRound(button.id);
  });
});

// Select individual child elements by their IDs
const player_Selection = document.querySelector('#playerselection');
const comp_Selection = document.querySelector('#compselection');
const player_Points = document.querySelector('#playerpoints');
const comp_Points = document.querySelector('#comppoints');
const round_Winner = document.querySelector('#roundwinner');
const winner = document.querySelector('#winner');

const playAgainButton = document.querySelector('#play-again-button');
playAgainButton.addEventListener('click', playAgain);

// Set text content for each individual container
player_Selection.textContent = 'Player selected: -';
comp_Selection.textContent = 'Computer selected: -';
player_Points.textContent = 'Player points: -';
comp_Points.textContent = 'Computer points: -';
round_Winner.textContent = '';
winner.textContent = '';