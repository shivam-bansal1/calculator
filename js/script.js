function add(...nums) {
    if(nums.length === 0)   return "No Input";
    return nums.reduce((sum, currentNum) => sum + currentNum, 0);
}

function substract(...nums) {
    if(nums.length === 0)   return "No Input";
    return nums.reduce((firstNum, secondNum) => firstNum - secondNum);
}

function multiply(...nums) {
    if(nums.length === 0)   return "No Input";
    return nums.reduce((product, currentNum) => product * currentNum, 1);
}

function divide(firstNum, secondNum) {
    if(secondNum === 0)   return "ERROR";
    return firstNum / secondNum;
}

function operate(operator, firstNumber, secondNumber) {
    let result;

    switch (operator) {
        case '+' :
            result = add(firstNumber, secondNumber);
            break;
        case '-' :
            result = substract(firstNumber, secondNumber);
            break;
        case '*' :
            result = multiply(firstNumber, secondNumber);
            break;
        case '/' :
            result = divide(firstNumber, secondNumber);
            break;
    }

    return result;
}
let firstNumber = 0;
let operator = null;
let secondNumber = null;


let displayValue = 0;
let resultDisplayContainer = document.querySelector('.result-display');
resultDisplayContainer.innerHTML = displayValue;
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (event)=> {
        let buttonClass = event.target.className;
        console.log(buttonClass);
        
        // Assign numbers and operators to variables
        if (buttonClass === 'number-btn') {
            if(operator === null){
                if(firstNumber === 0){
                    firstNumber = button.textContent;
                }
                else {
                    firstNumber += button.textContent;
                }
            }
            else {
                if(secondNumber === null)
                    secondNumber = button.textContent;
                else 
                    secondNumber += button.textContent;
            }
            console.log(`firstNumber :${firstNumber}`);
            console.log(`secondNumber :${secondNumber}`);
        }
        else if(buttonClass === 'operator-btn') {
            operator = button.textContent;
        }

        // Display equation on the display panel
        if(displayValue === 0) {
            displayValue = button.innerHTML;
        }
        else {
            displayValue += button.innerHTML;
        }
        resultDisplayContainer.innerHTML = displayValue;
    })
});

let clearButton = document.querySelector('#all-clear');
clearButton.addEventListener('click', () => {
    displayValue = 0;
    resultDisplayContainer.innerHTML = displayValue;

})