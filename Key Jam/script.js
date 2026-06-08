const soundMap = {
    'Q': 'sounds/Q.wav',
    'W': 'sounds/W.ogg',
    'E': 'sounds/E.wav',
    'R': 'sounds/R.wav',
    'A': 'sounds/A.wav',
    'S': 'sounds/S.mp3',
    'D': 'sounds/D.wav',
    'F': 'sounds/F.wav'
};

function playSound(keyLetter) {
    const soundPath = soundMap[keyLetter.toUpperCase()];
    if (soundPath) {
        const audio = new Audio(soundPath);
        audio.currentTime = 0;
        audio.play();
    }
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => {
        const letter = key.querySelector('.letter').textContent;
        playSound(letter);
        key.style.transform = 'translateY(-10px)';
        key.style.filter = 'drop-shadow(0px 0px 5px #00f3ff)';
        setTimeout(() => {
            key.style.transform = 'none';
            key.style.filter = 'none';
        }, 150);
    })
})

window.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toUpperCase();
    keys.forEach(key => {
        const letter = key.querySelector('.letter').textContent;
        if (letter === pressedKey) {
            playSound(pressedKey);
            key.style.transform = 'translateY(-10px)';
            key.style.filter = 'drop-shadow(0px 0px 5px #00f3ff)';
            setTimeout(() => {
                key.style.transform = 'none';
                key.style.filter = 'none';
            }, 150);
        };
    });
});