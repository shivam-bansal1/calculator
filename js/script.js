import {add, substract, multiply, divide, percentage, operate} from "./util.js" 

let equationDisplayContent = null;
let resultDisplayContent = "";
let operator = null;

let resultContainer = document.querySelector('.result-display');
let equationContainer = document.querySelector('.equation-display');
resultContainer.textContent = resultDisplayContent;

let numberButtons = document.querySelectorAll('.number-btn');
let operationButtons = document.querySelectorAll('.operator-btn');

function allClear() {
    equationDisplayContent = "";
    resultDisplayContent = "";
    operator = null;
    equationContainer.textContent = ""
    resultContainer.textContent = "";
}

numberButtons.forEach((button)=> {
    button.addEventListener('click', (event) => {
        let buttonId = event.target.id;
        if (buttonId === 'decimal') {
            if(resultDisplayContent.split(".").length <= 1) {
                resultDisplayContent += button.textContent;
            }
        }
        else {
            resultDisplayContent += button.textContent;
        }
        resultContainer.textContent = resultDisplayContent;
    });
});

operationButtons.forEach((button)=> {
    button.addEventListener('click', (event) => {
        let buttonId = event.target.id;
        
        if (buttonId === 'equal'){
            equationDisplayContent += operator + resultDisplayContent;
            equationContainer.textContent = equationDisplayContent + "=";
            
            const firstNumber = equationDisplayContent.split(operator)[0];
            const secondNumber = equationDisplayContent.split(operator)[1];

            resultDisplayContent = operate(operator, firstNumber, secondNumber);
            resultContainer.textContent = resultDisplayContent;
            operator = null;
        }
        else if(buttonId === 'all-clear') {
            allClear();
        }
        else if(buttonId === 'undo' || buttonId === 'undo-icon') {
            resultDisplayContent = resultDisplayContent.slice(0, -1);
            resultContainer.textContent = resultDisplayContent;
        }
        else {
            if(operator) {
                const firstNumber = equationDisplayContent;
                const secondNumber = resultDisplayContent;
                
                resultDisplayContent = operate(operator, firstNumber, secondNumber);
                resultContainer.textContent = resultDisplayContent;
                equationDisplayContent = resultDisplayContent;
                equationContainer.textContent = equationDisplayContent + operator;
            }
            else {
                equationDisplayContent = resultDisplayContent;
                equationContainer.textContent = equationDisplayContent + button.textContent;
            }
            resultDisplayContent = "";
            operator = button.textContent;
        }
    });
});