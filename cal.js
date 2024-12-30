function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function clearContent(){
    const display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
}
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    }catch (error) {
        display.value = 'Error';
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'AC') {
            clearDisplay();
        } else if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === 'DEL'){
            clearContent();
        } else if (button.textContent !== 'ON') {
            appendToDisplay(button.textContent);
        }
    });
});

const onButton = document.getElementById('onButton');
const display = document.getElementById('display');

// Initially disable the ON button
display.disabled = true;

// Enable calculator functionality when ON button is clicked
onButton.addEventListener('click', () => {
    display.disabled = false; // Enable the display
    onButton.disabled = true; // Disable the ON button to prevent reactivation
});