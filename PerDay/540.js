// 540. Single Element in a Sorted Array


// var singleNonDuplicate = function(nums) {
//     let count = [];
//   for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         if(nums[i] === nums[j]){
//             count.push(nums[i]);
//         }
//     }
//   }
//   const missingElements = nums.filter((element) => !count.includes(element));
//   return missingElements;
// };

// console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
// console.log(singleNonDuplicate([3,3,7,7,10,11,11]));

function singleNonDuplicate(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        } else if (mid % 2 == 0) {
            if (nums[mid] == nums[mid + 1]) {
                left = mid + 2;
            }
            else
                right = mid
        }
        else {
            if (nums[mid] == nums[mid - 1]) {
                left = mid + 1
            }
            else
                right = mid - 1
        }
    }

    return nums[left];
}

console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
