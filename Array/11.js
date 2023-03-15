// 11. Container With Most Water

// brute force approach------
var maxArea1 = function (height) {
    let temp;
    let area = [];
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            if (height[i] > height[j]) {
                temp = height[j] * (j - i);
                console.log(height[i], height[j], (j - i), temp, " if");
                area.push(temp);
            } else {
                temp = height[i] * (j - i);
                console.log(height[i], height[j], (j - i), temp, " else");
                area.push(temp);
            }
        }
    }
    return Math.max(...area);
};

// console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// console.log(maxArea1([1, 1]))

// Leet code solve approach....

var maxArea = function (height) {
    let temp;
    let area = [];
    let i = 0, j = height.length - 1;
    while (i < j) {
        if (height[i] > height[j]) {
            temp = height[j] * (j - i);
            console.log(height[i], height[j], (j - i), temp, " if");
            area.push(temp);
        } else {
            temp = height[i] * (j - i);
            console.log(height[i], height[j], (j - i), temp, " else");
            area.push(temp);
        }
        if (height[i] > height[j]) {
            j--;
        }
        else {
            i++;
        }
    }

    return Math.max(...area);
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))