var missingNumber = function (nums) {
    let arr = nums.sort((a, b) => a - b)
    let n = arr.length;
    for (let i = 0; i <= n; i++) {
        if (arr[i] != i) {
            return i;
        }
    }
};

console.log(missingNumber([0,1]));