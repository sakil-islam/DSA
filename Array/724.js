// 724. Find Pivot Index


var pivotIndex = function (nums) {
    const cumSumLeft = [];
    const cumSumRight = [];
    let sumRight = 0;
    let sumLeft = 0;

    for (let i = 0; i < nums.length; i++) {
        sumLeft += nums[i];
        cumSumLeft.push(sumLeft);
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        sumRight += nums[i];
        cumSumRight.unshift(sumRight);
    }

    for (let i = 0; i < nums.length; i++) {
        if (cumSumLeft[i] === cumSumRight[i]) {
            return i;
        }
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));