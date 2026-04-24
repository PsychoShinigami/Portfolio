const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        const value = btn.innerText;
        if (value === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch (e) {
                display.innerText = "Error";
            }
        } else if (value === 'AC') {
            display.innerText = "";
        } else if (value === 'C') {
            display.innerText = display.innerText.slice(0, -1);
        } else {
            display.innerText += value;
        }
    });
});