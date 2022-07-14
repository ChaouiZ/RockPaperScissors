const hands = ["rock", "paper", "scissors"];
let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    for (let i = 0; i < hands.length; i++) {
        return hands[Math.floor(Math.random() * hands.length)]
    }
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Tie.';
    }  else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win! Rock beats scissors.';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissors beats paper.';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper beats rock.';
    } else {
        computerScore++;
        return 'You lose. Better luck next time!';
    }
};

function game() {
    for (let i = 1; i <= 5; i++) {
        computerSelection = computerPlay(); 
        playerSelection = prompt('Rock, paper or scissors?'); 
        playRound(playerSelection, computerSelection);
        console.log(`
    Player: ${playerSelection} 
        Score: ${playerScore} 
    Computer: ${computerSelection} 
        Score: ${computerScore}`);
    };

    if (playerScore > computerScore) {
        console.log('Congratulations! You win!');
    } else if (computerScore > playerScore) {
        console.log('Oh no! You lost! Better luck next time.');
    } else {
        console.log('Tie game!');
    }
    
    
};

game();

