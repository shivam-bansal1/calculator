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
let firstNumber ;
let operator ;
let secondNumber ;
