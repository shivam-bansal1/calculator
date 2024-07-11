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

let firstNumber ;
let operator ;
let secondNumber ;
