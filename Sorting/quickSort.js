// var items = [5,3,7,6,2,9];
// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left, //left pointer
//         j       = right; //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j); //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); //index returned from partition
//         if (left < index - 1) { //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray); //prints [2,3,5,6,7,9]

// DSA course approach...

function partition(arr, l, r) {
    let pivot = arr[l]; 

    // count small data
    let count = 0; 
    for(let i = l; i <= r; i++) {
        if(arr[i] < pivot) {
            count++; 
        }
    } 

    count = count+l; 

    let temp = arr[l]; 
    arr[l] = arr[count]; 
    arr[count] = temp; 

    // console.log(arr);
    // console.log(count);
    // console.log(pivot); 

    // small datas | pivot | large datas
    let i = l; 
    let j = r; 
    while(i < count || j > count) { 
        if(arr[i] >= pivot && arr[j] < pivot) {
            let temp = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp; 

            i++; 
            j--; 
        } 
        else if(arr[i] >= pivot && arr[j] >= pivot) {
            j--; 
        } 
        else {
            i++; 
        }
    } 


    return count; 
} 


function quickSort(arr, l, r) {
    if(l < r) {
        let p = partition(arr, l, r); 

        quickSort(arr, l, p-1); // left
        quickSort(arr, p+1, r); // right
    }
} 


let arr = [10, 20, 5, 20, 20, 6, 1, 20, 30, 4]
quickSort(arr, 0, arr.length-1); 
console.log(arr);