const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.innerText;

        if (value === '=') {
            // Do math
            display.innerText = eval(display.innerText);
        } else if (value === 'AC') {
            // Clear everything
            display.innerText = "";
        } else {
            // Just add the number/symbol to the screen
            display.innerText += value;
        }
    });
});