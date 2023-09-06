const rps = document.querySelector('#container');

const score = document.querySelector('#score p');
const resultDiv = document.querySelector('#result');
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
        result.textContent = "It's a tie!";
        score.textContent = `Your score: ${win} - computer score:${lose}`;
    }

    if(win == 5){
        result.textContent = `You win the game!`;
        replayGame();
    } else if(lose == 5){
        result.textContent = `The computer wins the game!`;
        replayGame();
    }
}

function replayGame(){
    const btn = document.createElement('button');
    btn.textContent = "Play Again";
    btn.style.display = 'block';
    btn.style.margin = '10px auto';
    document.body.insertBefore(btn,resultDiv);
    rps.removeEventListener('click',playRound);

    btn.addEventListener('click',() => {
        result.textContent = '';
        score.textContent = '';
        win = 0;
        lose = 0;
        rps.addEventListener('click',playRound);
        document.body.removeChild(btn);
    });
}

rps.addEventListener('click',playRound);


