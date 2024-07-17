export function add(...nums) {
    if(nums.length === 0)   return "No Input";
    return nums.reduce((sum, currentNum) => sum + currentNum, 0);
}

export function substract(...nums) {
    if(nums.length === 0)   return "No Input";
    return nums.reduce((firstNum, secondNum) => firstNum - secondNum);
}

export function multiply(...nums) {
    if(nums.length === 0)   return "No Input";
    return nums.reduce((product, currentNum) => product * currentNum, 1);
}

export function divide(firstNum, secondNum) {
    if(secondNum === 0)   return "ERROR";
    return firstNum / secondNum;
}

export function percentage(firstNum, secondNum) {
    if(firstNum ===0 || secondNum === 0)   return 0;
    return Math.round((firstNum * (secondNum/100)) *100)/100;
}


export function operate(operator, firstNumber, secondNumber) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    let result;

    switch (operator) {
        case '+' :
            result = add(firstNumber, secondNumber);
            break;
        case '-' :
            result = substract(firstNumber, secondNumber);
            break;
        case '*' :
        case 'x' :
            result = multiply(firstNumber, secondNumber);
            break;
        case '/' :
            result = divide(firstNumber, secondNumber);
            break;
        case '%' :
            result = percentage(firstNumber, secondNumber);
            break;
    }

    return result;
}


