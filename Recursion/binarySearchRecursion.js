let arr = [10, 15, 20, 30, 40, 50, 60, 90];

function binarySearchRecursion(arr, key, l = 0, r = arr.length - 1) {
    let mid = Math.floor((l + r) / 2);
    if (r < l || arr.length === 0) {
        return -1;
    }

    if (arr[mid] === key) {
        return {
            status: true,
            mid
        }
    }
    else if (arr[mid] > key) {
        return binarySearchRecursion(arr, key, l, mid - 1);
    }
    return binarySearchRecursion(arr, key, mid + 1, r);
}

console.log(binarySearchRecursion(arr, 20));


// const binary_Search = (arr, searchValue, low = 0, high = arr.length - 1) => {
//     // base case
//     if (high < low || arr.length === 0) return -1
//     const mid = low + Math.floor((high - low) / 2)
//     // If the element is present at the middle
//     if (arr[mid] === searchValue) {
//         return mid
//     }
//     // If element is smaller than mid, then
//     // it can only be present in left subarray
//     if (arr[mid] > searchValue) {
//         return binary_Search(arr, searchValue, low, mid - 1)
//     }
//     // Else the element can only be present in right subarray
//     return binary_Search(arr, searchValue, mid + 1, high)
// }
// const myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
// console.log(binary_Search(myArray, 6));
// console.log(binary_Search(myArray, 16));

