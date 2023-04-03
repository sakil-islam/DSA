// 238. Product of Array Except Self

var productExceptSelf = function (nums) {
    // let result = [];
    // let right = [];
    // let left = [];
    // let prefix = 1;
    // let postfix = 1;

    // for (let i = 0; i < nums.length; i++) {
    //     left[i] = prefix;
    //     prefix *= nums[i];
    // }
    // console.log(left);
    // for (let i = nums.length - 2; i >= 0; i--) {
    //     postfix *= nums[i + 1];
    //     right[i] = postfix;
    // }
    // right[nums.length - 1] = 1;
    // console.log(right);

    // for (let i = 0; i < nums.length; i++) {
    //     result.push(Math.abs(right[i] * left[i]))
    // }
    const result = [];
    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        result[i] = Math.abs(result[i] * postfix);
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));