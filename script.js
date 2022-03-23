const userscore = document.querySelector('.userscore');
const computerscore = document.querySelector('.computerscore');
const comment = document.querySelector('.comment'); 

function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
    playerSelection = this.dataset.button;
    computerSelection = computerPlay();


    if (playerSelection == 'rock') {
      if (computerSelection == 'scissors') {
        return console.log('win'), comment.textContent = 'win', ++playerScore, userscore.textContent = `${playerScore}`; 
      } else if (computerSelection == 'paper') {
        return console.log('loss'), comment.textContent = 'loss', ++computerScore, computerscore.textContent = `${computerScore}`;
      } else {
        return console.log('tie'), comment.textContent = 'tie';
      } 
    }
    if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        return console.log('win'), comment.textContent = 'win', ++playerScore, userscore.textContent = `${playerScore}`;
      } else if (computerSelection == 'scissors') {
        return console.log('loss'), comment.textContent = 'loss', ++computerScore, computerscore.textContent = `${computerScore}`;
      } else {
        return console.log('tie'), comment.textContent = 'tie';
      } 
    }
    if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        return console.log('loss'), comment.textContent = 'loss', ++computerScore, computerscore.textContent = `${computerScore}`;
      } else if (computerSelection == 'paper') {
        return console.log('win'), comment.textContent = 'win', ++playerScore, userscore.textContent = `${playerScore}`;
      } else {
        return console.log('tie'), comment.textContent = 'tie';
      } 
    }
}

const rockbutton = document.querySelector('.rockbutton');
const paperbutton = document.querySelector('.paperbutton');
const scissorsbutton = document.querySelector('.scissorsbutton');
rockbutton.addEventListener('click', playRound);
paperbutton.addEventListener('click', playRound);
scissorsbutton.addEventListener('click', playRound);

rockbutton.addEventListener('touchstart', playRound);
paperbutton.addEventListener('touchstart', playRound);
scissorsbutton.addEventListener('touchstart', playRound);
