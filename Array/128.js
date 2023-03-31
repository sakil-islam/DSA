// 128. Longest Consecutive Sequence

/**
 * Brute Force
 * Greedy - Max Score
 * Time O (N^3) | Space O(1)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = (nums, maxScore = 0) => {
//     for (const num of nums) {/* Time O(N) */
//         console.log(num);
//         let [currNum, score] = [num, 1];

//         while (isStreak(nums, (currNum + 1))) {/* Time O(N * N) */
//             currNum++;
//             score++;
//         }

//         maxScore = Math.max(maxScore, score);
//     }

//     return maxScore;
// }

// const isStreak = (nums, num) => {
//     for (let i = 0; i < nums.length; i++) {/* Time O(N) */
//         const isEqual = nums[i] === num
//         if (isEqual) return true;
//     }

//     return false;
// }

/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
 * Greedy - Max Score
 * Time O (N * log(N)) | Space O(1)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = (nums) => {
    if (!nums.length) return 0;

    nums.sort((a, b) => a - b);/* Time O(N * log(N)) | Space O(1 || log(N)) */

    return search(nums);       /* Time O(N) */
}

const search = (nums) => {
    let [maxScore, score] = [1, 1];

    for (let i = 1; i < nums.length; i++) {/* Time O(N) */
        const isPrevDuplicate = nums[i - 1] === nums[i]
        if (isPrevDuplicate) continue
        console.log("ss100", nums[i - 1], nums[i],);

        const isStreak = nums[i] === ((nums[i - 1]) + 1)
        console.log("ss110", ((nums[i - 1]) + 1), nums[i],);
        if (isStreak) {
            score++;
            console.log(score);
            continue;
        }

        maxScore = Math.max(maxScore, score);
        console.log("ss111", maxScore, score);
        score = 1;
    }

    return Math.max(maxScore, score);
}

/**
 * Hash Set - Intelligent Sequence
 * Greedy - Max Score
 * Time O (N) | Space O(N)
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = (nums, maxScore = 0) => {
//     const numSet = new Set(nums);         /* Time O(N) | Space O(N) */

//     for (const num of [...numSet]) {    /* Time O(N) */
//         const prevNum = num - 1;
//         console.log("ss100", num);


//         if (numSet.has(prevNum)) continue;/* Time O(N) */

//         let [currNum, score] = [num, 1];
//         console.log("ss100  12");

//         const isStreak = () => numSet.has(currNum + 1)
//         console.log(currNum, isStreak());
//         while (isStreak()) {              /* Time O(N) */
//             currNum++;
//             score++;
//             console.log("ss100  11", currNum);
//         }

//         maxScore = Math.max(maxScore, score);
//     }

//     return maxScore;
// }

console.log(longestConsecutive([100, 4, 200, 1, 2, 3]));