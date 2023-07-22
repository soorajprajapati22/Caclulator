let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(expression);
        expression = result.toString();
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}
