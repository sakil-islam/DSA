// 2574. Left and Right Sum Differences

var leftRigthDifference = function (nums) {
    let leftSumArray = [0];
    let leftSum = 0;
    let rightSumArray = [0];
    let rightSum = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        leftSum = leftSum + nums[i];
        leftSumArray.push(leftSum);
    }
    for (let i = nums.length - 1; i > 0; i--) {
        rightSum = rightSum + nums[i];
        rightSumArray.unshift(rightSum);
    }
    let k = 0, answer = [];
    while (k < leftSumArray.length && k < rightSumArray.length) {
        let temp = Math.abs(leftSumArray[k] - rightSumArray[k]);
        answer.push(temp);
        k++;
    }
    return answer;
};

console.log(leftRigthDifference([10, 4, 8, 3]));
console.log(leftRigthDifference([1]));