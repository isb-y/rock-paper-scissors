let playerPoints = 0;
let computerPoints = 0;

const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection) {
  let playerSelection_rps = myArray[playerSelection];
  const computerSelection = getComputerChoice();

  content0.textContent = "Player selection: " + playerSelection_rps;
  container0.appendChild(content0);
  content1.textContent = "Computer selection: " + computerSelection;
  container1.appendChild(content1);

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

  content2.textContent = "Player points: " + playerPoints;
  container2.appendChild(content2);
  content3.textContent = "Computer points: " + computerPoints;
  container3.appendChild(content3);

  if(playerPoints > 4){
    content4.textContent = "You win";
    container4.appendChild(content4);
  }
  if(computerPoints >4){
    content4.textContent = "You lose";
    container4.appendChild(content4);
  }
  return "Player points:" + playerPoints + ", computerPoints:" + computerPoints;
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

const container0 = document.querySelector('#container0');
const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const container3 = document.querySelector('#container3');
const container4 = document.querySelector('#container4');

const content0 = document.createElement('div');
const content1 = document.createElement('div');
const content2 = document.createElement('div');
const content3 = document.createElement('div');
const content4 = document.createElement('div');

content0.classList.add('content0');
content1.classList.add('content1');
content2.classList.add('content2');
content3.classList.add('content3');
content4.classList.add('content4');
