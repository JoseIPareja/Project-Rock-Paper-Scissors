function playRound(playerSelection, computerSelection) {  
    if (playerSelection == 'rock') {
      if (computerSelection == 'scissors') {
        return 'win';
      } else if (computerSelection == 'paper') {
        return 'loss';
      } else {
        return 'tie';
      } 
    }
    if (playerSelection == 'paper') {
      if (computerSelection == 'rock') {
        return 'win';
      } else if (computerSelection == 'scissors') {
        return 'losss';
      } else {
        return 'tie';
      } 
    }
    if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        return 'loss';
      } else if (computerSelection == 'paper') {
        return 'win';
      } else {
        return 'tie';
      } 
    }
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const games = 5;
    
    for (let i = 0; i < games; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        function computerPlay() { return (["paper","scissors","rock"])[Math.random() * 3 | 0]; }
        let computerSelection = computerPlay();

        let round = playRound(playerSelection, computerSelection);
        if (round === "tie") {
            console.log("It's a tie");
        } else if (round === "win") {
            console.log("Player wins");
            playerScore++;
        } else if (round === "loss") {
            console.log("Computer wins");
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("YAY, You are the winner!!");
    } else {
        console.log("GAME OVER")
    }
}
console.log(game())