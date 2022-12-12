let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90, 100];
let target = 78;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let asc;
  if (arr[start] < arr[end]) {
    asc = true;
  } else {
    asc = false;
  }
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (asc) {
      if (arr[mid] === target) {
        return "Data found at " + mid;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] === target) {
        return "Data found at " + mid;
      } else if (arr[mid] > target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}

console.log(binarySearch(arr, target));
// Order Agnostic Binary Search
console.log(binarySearch([25, 20, 15, 12, 10, 5, 0, -3], 10));
// console.log(binarySearch(["apple", "banana", "orange", "mango"], "mango"));


