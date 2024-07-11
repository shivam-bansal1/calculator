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

console.log(multiply(6,4,2,2));