/* 
Algorithm:

step 1: start

step 2: declare array and left, right, mid variable

step 3: perform merge function.
    if left > right
        return
    mid= (left+right)/2
    mergesort(array, left, mid)
    mergesort(array, mid+1, right)
    merge(array, left, mid, right)

step 4: Stop

*/

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
console.log(mergeSort([30, 70, 10, 5, 1, 22]));

// DSA course Approach...

let array = [20, 10, 30, 50, 40, 30]; 
let newArray = []; 


function mergeSortFunc(array, l, r) {
    if(l < r) { 
        let mid = Math.floor((l+r) / 2); 
        mergeSortFunc(array, l, mid); // left
        mergeSortFunc(array, mid+1, r); // right

        // here sub-arrayay is already sorted

        mergeSubarray(array, l, mid, r); 
    } 
} 

function mergeSubarray(array, l, mid, r) { 
    let i = l; 
    let j = mid+1; 
    let k = i; 

    while(i <= mid && j <= r) {
        if(array[i] <= array[j]) { 
            newArray[k] = array[i]; 
            i++; 
        } 
        else {
            newArray[k] = array[j]; 
            j++; 
        } 
        k++; 
    } 

    // copy rest values
    if(i > mid) {
        while(j <= r) {
            newArray[k] = array[j]; 
            j++; 
            k++; 
        } 
    } 
    else { 
        while(i <= mid) { 
            newArray[k] = array[i]; 
            i++; 
            k++; 
        } 
    } 

    // copy to original array
    for(let z = l; z <= r; z++) {
        array[z] = newArray[z]; 
    }
} 


mergeSortFunc(array, 0, array.length-1); 
console.log(array);