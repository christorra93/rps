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

function game() {

    for (i = 0 ; i < 5 ; i++) {
        let invalidAnswer = true;

        while(invalidAnswer) {
            player = prompt("Rock paper or scissors?","").toLowerCase();

            if (player === 'rock' || player === 'paper' || player === 'scissors') {
                invalidAnswer = false;
            }
        }

        computer = getComputerChoice();

        playRound(player,computer);
    }

    if (win > lose) {
        console.log(`You won the game! ${win} to ${lose}`);
    } else if (win < lose) {
        console.log(`You lost the game! ${lose} to ${win}`);
    } else {
        console.log("The game is tied!");
    }

}
let player;
let computer;
let win = 0;
let lose = 0;

game();

