// Reverse array using back tracking.

arr = [5, 4, 9, 2, 1, 0, 12, 7];
let arrayReverse = function (arr) {
    let len = arr.length - 1;
    let reverseArray = [];
    for (let i = len; i >= 0; i--) {
        reverseArray.push(arr[i])
    }
    return reverseArray;
}

console.log(arrayReverse(arr));

// Reverse array using swap method.

let reverseArray = function (arr) {
    start = 0
    end = arr.length - 1
    while (start < end) {
        // swap arr[start] and arr[end]
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start = start + 1
        end = end - 1
        console.log(arr);
    }
    return arr;
}

console.log(reverseArray(arr));

// Reverse sub array 

let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


for (let i = array.length - 1; i >= 0; i--) {
    for (let j = array[i].length - 1; j >= 0; j--) {
        console.log(array[i][j]);
    }
}

// nested array element print.
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        console.log(`Sub-array ${i}: ${arr[i]}`);
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);