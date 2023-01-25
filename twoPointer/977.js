// run perfectly but not accepted

let array = [-4, -1, 0, 3, 10];
let newArray = [];

array = array.map(number => number ** 2);
console.log(array);

function mergeSortFunc(array, l, r) {
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        mergeSortFunc(array, l, mid); // left
        mergeSortFunc(array, mid + 1, r); // right

        // here sub-arrayay is already sorted

        mergeSubarray(array, l, mid, r);
    }
}

function mergeSubarray(array, l, mid, r) {
    let i = l;
    let j = mid + 1;
    let k = i;

    while (i <= mid && j <= r) {
        if (array[i] <= array[j]) {
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
    if (i > mid) {
        while (j <= r) {
            newArray[k] = array[j];
            j++;
            k++;
        }
    }
    else {
        while (i <= mid) {
            newArray[k] = array[i];
            i++;
            k++;
        }
    }

    // copy to original array
    for (let z = l; z <= r; z++) {
        array[z] = newArray[z];
    }
}


mergeSortFunc(array, 0, array.length - 1);
console.log(array);

