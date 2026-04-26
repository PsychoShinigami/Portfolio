let ActualNumber=Math.floor(Math.random()*100)+1;
let Lives = 5;

function updateLives(){
    Lives--;
    document.getElementById("lives-num").innerText = Lives;
    let heartToHide = document.getElementById('lives-img' + (Lives + 1));
    if (heartToHide) {
        heartToHide.style.visibility = "hidden";
    }
    if (Lives === 0) {
        document.getElementById('hint').innerText = "Game Over! Your soul is lost." + " The soul number was " + ActualNumber;
        document.getElementById('submit-btn').disabled = true;
        return true;
    }
    return false;
}

document.getElementById('submit-btn').addEventListener('click', function() {
    let userGuess = Number(document.getElementById('guess-input').value);
    if (userGuess !== ActualNumber) {
        let isGameOver = updateLives();
        if (!isGameOver) {
            if (userGuess < ActualNumber) {
                document.getElementById('hint').innerText = "Too Low...";
            } else if (userGuess > ActualNumber) {
                document.getElementById('hint').innerText = "Too High...";
            }
        }
    } else {
        document.getElementById('hint').innerText = "You found it! Your soul survives.";
    }
});

document.getElementById('reset-btn').addEventListener('click', function() {
    ActualNumber = Math.floor(Math.random() * 100) + 1;
    Lives = 5;
    document.getElementById("lives-num").innerText = Lives;
    document.getElementById('hint').innerText = "Game Ready. Choose your fate.";
    document.getElementById('guess-input').value = "";
    document.getElementById('submit-btn').disabled = false;
    for (let i = 1; i <= 5; i++) {
        document.getElementById('lives-img' + i).style.visibility = "visible";
    }
});
