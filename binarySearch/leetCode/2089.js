const arr1 = [1,2,5,2,3];
const arr2 = [90, 85, 70, 65, 55, 50, 40, 35, 25, 20, 15, 10];
let target = 2;

function repeatingNumber(arr1, target) {
    let arr = arr1.sort((a,b) => a-b);
    let start = 0;
    let end = arr.length - 1;
    let count = [];
    let mid, asc, foundAt;

    if (arr[start] < arr[end]) {
        asc = true;
    } else {
        asc = false;
    }

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            foundAt = mid;
        }
        if (asc) {
            if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (arr[mid] < target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    if (foundAt != undefined) {
        for (let i = foundAt + 1; i <= arr.length - 1; i++) {
            if (target === arr[i]) {
                count.push(i);
            }
        }
        for (let i = foundAt; i >= 0; i--) {
            if (target === arr[i]) {
                count.push(i);
            }
            else {
                break;
            }
        }
        count = count.sort((a,b) => a-b);
        return count;
    }
    return [];
}

console.log(repeatingNumber(arr1, target));

// function arrayRankTransform(arr, target) {
//     let arr1 = arr.sort((a,b) => a-b);
//     let start = 0;
//     let end = arr1.length-1;
//     let mid, findPosition;
//     let count = 0;

//     while(start <= end){
//         mid = Math.floor((start + end) / 2);
//         if(arr1[mid] === target){
//             findPosition = mid;
//             //return findPosition;
//         }
//         else if(arr1[mid] > target){
//             end = mid - 1;
//         }
//         else {
//             start = mid + 1;
//         }
//     }
//     if (findPosition != undefined) {
//         for (let i = findPosition + 1; i <= arr1.length - 1; i++) {
//             if (target === arr1[i]) {
//                 count++;
//             }
//         }
//         for (let i = findPosition; i >= 0; i--) {
//             if (target === arr1[i]) {
//                 count++;
//             }
//             else {
//                 break;
//             }
//         }
//         return count;
//     }
//     return 'e';
// };
// console.log(arrayRankTransform([1,2,2,5,3], 2))