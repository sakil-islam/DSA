// 27. Remove Element


var removeElement = function (nums, val) {
    let i = 0; // slow pointer
    for (let j = 0; j < nums.length; j++) { // fast pointer
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}
console.log(removeElement([3, 2, 3, 2], 3));





