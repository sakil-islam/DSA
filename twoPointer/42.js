// 42. Trapping Rain Water

var trap = function (height) {

    let left = 0;
    let right = height.length - 1;
    maxLeft = height[left];
    maxRight = height[right];
    let water = 0;
    while (left < right) {

        if (maxLeft < maxRight) {
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            water += maxLeft - height[left];
        } else {
            right--;
            maxRight = Math.max(maxRight, height[right]);
            water += maxRight - height[right];
        }
    }
    return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));