//this is to get a random number between 0 and 2.

function getRandomNum() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    switch (getRandomNum()) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(player,com) {
    switch (player) {
        case 'rock':
            if (com === 'scissors') {
                console.log("You win! rock beats scissors.");
            } else if (com === 'paper') {
                console.log("You lose! paper beats rock.");
            }
        case 'paper':
            if (com === 'rock') {
                console.log("You win! paper beats rock.");
            } else if (com === 'scissors') {
                console.log("You lose! scissors beats paper.");
            }
        case 'scissors':
            if (com === 'paper') {
                console.log("You win! scissors beats paper.");
            } else if (com === 'rock') {
                console.log("You lose! rock beats scissors.");
            }
    }
    if (player === com) {
        console.log("It's a tie!");
    }
}

let player;
let computer;