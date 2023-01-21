// JavaScript program to print all triplets in given
// array that form Arithmetic Progression

// Function to print all triplets in
// given sorted array that forms AP
function printAllAPTriplets(arr, n) {
    const s = new Set()
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            // Use hash to find if there is
            // a previous element with difference
            // equal to arr[j] - arr[i]
            let diff = arr[j] - arr[i];
            if (s.has(arr[i] - diff)) {
                if (diff == 3)
                    console.log(arr[i] - diff + " " + arr[i]
                        + " " + arr[j]);
            }
        }
        s.add(arr[i]);
    }
}

// Driver code

let arr = [0,1,4,6,7,10];
let n = arr.length;
printAllAPTriplets(arr, n);