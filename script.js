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

function playRound() {
    switch (player) {
        case 'rock':
            if (com === 'scissors') {
                console.log("You win! rock beats scissors.");
                win++;
            } else if (com === 'paper') {
                console.log("You lose! paper beats rock.");
                lose++;
            }
            break;
        case 'paper':
            if (com === 'rock') {
                console.log("You win! paper beats rock.");
                win++;
            } else if (com === 'scissors') {
                console.log("You lose! scissors beats paper.");
                lose++;
            }
            break;
        case 'scissors':
            if (com === 'paper') {
                console.log("You win! scissors beats paper.");
                win++;
            } else if (com === 'rock') {
                console.log("You lose! rock beats scissors.");
                lose++;
            }
            break;
    }

    if (player === com) {
        console.log("It's a tie!");
    }
}


let win = 0;
let lose = 0;

game();

