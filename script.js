const rps = document.querySelector('#container');

const score = document.querySelector('#score p');

const result = document.querySelector('#result p');

let win = 0;
let lose = 0;

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

function playRound(e) {

    let com = getComputerChoice();

    switch (e.target.textContent) {
        case 'rock':
            if (com === 'scissors') {
                win++;
                result.textContent = "You win! rock beats scissors.";
                score.textContent = `Your score: ${win} - computer score:${lose}`;
                
            } else if (com === 'paper') {
                lose++;
                result.textContent = "You lose! paper beats rock.";
                score.textContent = `Your score: ${win} - computer score:${lose}`;
            }
            break;
        case 'paper':
            if (com === 'rock') {
                win++;
                result.textContent = "You win! paper beats rock.";
                score.textContent = `Your score: ${win} - computer score:${lose}`;
            } else if (com === 'scissors') {
                lose++;
                result.textContent = "You lose! scissors beats paper.";
                score.textContent = `Your score: ${win} - computer score:${lose}`;
            }
            break;
        case 'scissors':
            if (com === 'paper') {
                win++;
                result.textContent = "You win! scissors beats paper.";
                score.textContent = `Your score: ${win} - computer score:${lose}`;
            } else if (com === 'rock') {
                lose++;
                result.textContent = "You lose! rock beats scissors.";
                score.textContent = `Your score: ${win} - computer score:${lose}`;
            }
            break;
    }

    if (e.target.textContent === com) {
        result.textContent = "Its a tie!";
        score.textContent = `Your score: ${win} - computer score:${lose}`;
    }
}

rps.addEventListener('click',playRound);


