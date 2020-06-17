
//initialize score variables
playerScore = 0;
computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const selections = document.getElementById('selections');
const playerChoice = document.getElementById('playerchoice');
const computerChoice = document.getElementById('computerchoice');
const tinyRock = './media/rocks-tiny.png';
const tinyPaper = './media/send-tiny.png';
const tinyScissors = './media/scissors-tiny.png';

rock.onclick = () => {
  playerSelection = 'rock';
  computerPlay();
  playRound(playerSelection, computerSelection);
  return 'rock';
}

paper.onclick = () => {
  playerSelection = 'paper';
  computerPlay();
  playRound(playerSelection, computerSelection);
  return 'paper';
}

scissors.onclick = () => {
  playerSelection = 'scissors';
  computerPlay();
  playRound(playerSelection, computerSelection);
  return 'scissors';
}

//returns computer's selection
const computerPlay = () => {
  let playOptions = ['rock', 'paper', 'scissors'];
  return computerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];           
}

//plays single round of RPS
const playRound = (playerSelection, computerSelection) => {
  playerSelected();
  computerSelected();
  if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        if (playerScore === 5) {
          selections.innerHTML = 'You win!';
          selections.style.paddingTop = '45px';
          selections.style.textShadow = '2px 2px 3px #458081';
        }
  } else if ((playerSelection === 'scissors' && computerSelection === 'rock') ||
            (playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissors')) {
              computerScore++;
              if (computerScore === 5) {
                selections.innerHTML = 'Computer wins.';
                selections.style.paddingTop = '45px';
                selections.style.textShadow = '2px 2px 3px #458081';
              }
  } 
  keepScore();
}

const playerSelected = () => {
  if (playerSelection === 'rock') {
    playerChoice.innerHTML = '<img src="./media/rocks-tiny.png">';
  } else if (playerSelection ==='paper') {
    playerChoice.innerHTML = '<img src="./media/send-tiny.png">';
  } else if (playerSelection === 'scissors') {
    playerChoice.innerHTML = '<img src="./media/scissors-tiny.png">';
  }
}

const computerSelected = () => {
  if (computerSelection === 'rock') {
    computerChoice.innerHTML = '<img src="./media/rocks-tiny.png">';
  } else if (computerSelection ==='paper') {
    computerChoice.innerHTML = '<img src="./media/send-tiny.png">';
  } else if (computerSelection === 'scissors') {
    computerChoice.innerHTML = '<img src="./media/scissors-tiny.png">';
  }
}

//updates scoreboard after each round
const keepScore = () => {
  document.getElementById('playerscore').textContent = playerScore;
  document.getElementById('computerscore').textContent = computerScore;
}