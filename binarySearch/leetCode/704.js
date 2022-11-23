function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
  }
  return -1;
}


