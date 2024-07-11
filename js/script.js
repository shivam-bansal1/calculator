function add(...nums) {
    return nums.reduce((sum, currentNum) => sum+currentNum, 0);
}

console.log(add())