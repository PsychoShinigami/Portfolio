const buttons = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset-btn');
const winner = document.querySelector('.result-box')

const turn = document.querySelector('.Cturn');
let turnX = true;
turn.innerText = 'x';
turn.classList.remove('o')
turn.classList.add('x')

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

resetBtn.addEventListener('click', () => {
    resetGame()
})

for (let btn of buttons) {
    btn.addEventListener('click', () => {
        if (turnX) {
            turn.innerText = 'o';
            turn.classList.remove('x')
            turn.classList.add('o');
            btn.innerText = "x";
            btn.classList.add('x');
            btn.classList.remove('o');
            turnX = false;
        }

        else {
            turn.innerText = 'x';
            turn.classList.remove('o')
            turn.classList.add('x')
            btn.innerText = "o";
            btn.classList.add('o');
            btn.classList.remove('x');
            turnX = true;
        }
        btn.disabled = true;
        checkWinner();
    })
}

const resetGame = () => {
    for (btn of buttons) {
        btn.disabled = false;
        btn.innerText = "";
        winner.innerText = "";
    }
}

const checkWinner = () => {
    hasWinner = false;
    for (let pattern of winPattern) {
        if (buttons[pattern[0]].innerText === 'x' && buttons[pattern[1]].innerText === 'x' && buttons[pattern[2]].innerText === 'x') { 
            winner.innerText = "X WON THE GAME!";
            hasWinner = true;
            for (btn of buttons) {
                btn.disabled = true;
            }
            return;
        } else if (buttons[pattern[0]].innerText === 'o' && buttons[pattern[1]].innerText === 'o' && buttons[pattern[2]].innerText === 'o') {
            winner.innerHTML = "O WON THE GAME!";
            hasWinner = true;
            for (btn of buttons) {
                btn.disabled = true;
            }
            return;
        }
    }
    
    if (!hasWinner) {
        let allFilled = true;
        for (let btn of buttons) {
            if (btn.innerText === "") {
                allFilled = false;
                break;
            }
        }
        if (allFilled) {
            winner.innerText = "IT'S A DRAW!";
        }
    }
}