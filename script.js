let hands = ["rock", "paper", "scissors"];
const playerSelection = prompt('Rock, paper, or scissors?')

function computerPlay() {
    for (let i = 0; i < hands.length; i++) {
        return hands[Math.floor(Math.random() * hands.length)]
    }
}

const computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Tie Game.';
    }  else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock.';
    } else {
        return 'You lose. Better luck next time!';
    }
}
