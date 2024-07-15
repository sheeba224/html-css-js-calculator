document.getElementById('display').readOnly = true;

function changeDisplay(val) {
    const display = document.getElementById('display');
    display.value += val;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}

