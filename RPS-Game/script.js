let userScore = 0;
let compScore = 0;
let drawScore = 0;

const options = document.querySelectorAll('.img');
for (let choice of options) {
    choice.addEventListener('click', () => {
        let userChoice = choice.id;
        const choices = ['rock', 'paper', 'scissor'];
        compChoice = choices[Math.floor(Math.random()*3)];
        document.querySelector('.playerC').innerText = userChoice;
        document.querySelector('.compC').innerText = compChoice;
        if (userChoice === compChoice) {
            drawScore++;
            displayScore();
        } else if (userChoice === 'rock' && compChoice === 'paper') {
            compScore++;
            displayScore();
        } else if (userChoice === 'rock' && compChoice === 'scissor') {
            userScore++;
            displayScore();
        } else if (userChoice === 'paper' && compChoice === 'rock') {
            userScore++;
            displayScore();
        } else if (userChoice === 'paper' && compChoice === 'scissor') {
            compScore++;
            displayScore();
        } else if (userChoice === 'scissor' && compChoice === 'paper') {
            userScore++;
            displayScore();
        } else if (userChoice === 'scissor' && compChoice === 'rock') {
            compScore++;
            displayScore();
        } else {
            console.log('something went wrong!');
        }
    })
}


function displayScore() {
    document.getElementById('wins').innerText = 'Wins:'+ userScore;
    document.getElementById('draw').innerText = 'Draw:'+  drawScore;
    document.getElementById('losses').innerText = 'Losses:'+ compScore;
}
