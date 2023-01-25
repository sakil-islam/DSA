// var sortedSquares = function (nums) {
//     let arr = []
//     for (let i = 0; i < nums.length; i++) {
//         arr.push(nums[i] * nums[i])

//     }
//     return arr.sort(function (a, b) { return a - b });
// };

//one liner approach 

// var sortedSquares = function (nums) {
//   return nums.map((item) => item * item).sort(function (a, b) { return a - b });
// };


// two pointer approach 

var sortedSquares = function (nums) {
    let left = 0
    let right = nums.length - 1
    let result = []
    let position = nums.length - 1

    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            result[position] = nums[left] ** 2
            position--
            left++
        }
        else {
            result[position] = nums[right] ** 2
            position--
            right--

        }
    }

    return result
};