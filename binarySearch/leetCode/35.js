var searchInsert = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  if (target < arr[start]) return 0;
  if (target > arr[end]) return arr.length;
  while (start <= end) {
    mid = (start+end)>>1;
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
 return start;
};

//wrong ans for [1,3] tag=2

// var searchInsert = function (arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     let mid;
//     if (target < arr[start]) return 0;
//     if (target > arr[arr.length - 1]) return arr.length;
//     while (start <= end) {
//       mid = Math.floor((start + end) / 2);
//       if (arr[mid] === target) {
//         return mid;
//       } else if (arr[mid] > target) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//     if (start > end) {
//       return mid + 1;
//     } else {
//       if (target > arr[mid]) {
//         return mid + 1;
//       } else {
//         return mid;
//       }
//     }
//   };
  
