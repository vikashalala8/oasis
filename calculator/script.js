const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === '=') {
            calculate();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            previousNumber = currentNumber;
            currentNumber = '';
        } else {
            currentNumber += value;
        }

        display.value = currentNumber;
    });
});

function calculate() {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 0;
    }

    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
}