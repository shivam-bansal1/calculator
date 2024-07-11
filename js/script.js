function add(...nums) {
    return nums.reduce((sum, currentNum) => sum + currentNum, 0);
}

function substract(firstNum, secondNum) {
    return firstNum - secondNum;
}
console.log(substract(6,4));