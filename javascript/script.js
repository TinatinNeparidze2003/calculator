const display = document.getElementById('display');
const buttons = document.querySelectorAll('input[type="button"]');

function handleInput(val) {
    if (val === 'AC') {
        display.value = '';
    } 
    else if (val === 'DE' || val === 'Backspace') {
        display.value = display.value.toString().slice(0, -1);
    } 
    else if (val === '=' || val === 'Enter') {
        try {
            if (display.value !== "") {
                display.value = eval(display.value);
            }
        } catch (e) {
            display.value = "Error";
        }
    } 
    else {
        const validChars = "0123456789+-*/.%";
        if (validChars.includes(val)) {
            display.value += val;
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => handleInput(button.value));
});

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Enter') event.preventDefault();
    if (key === 'Escape') {
        handleInput('AC');
    } else {
        handleInput(key);
    }
});