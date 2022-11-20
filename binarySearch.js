let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90, 100];
let target = 78;

function binarySearch(arr, target) {
  while (start <= end) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return "Data found at " + mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

console.log(binarySearch(arr, target));
console.log(binarySearch(['apple', 'banana', 'orange', 'mango'], 'mango'));
