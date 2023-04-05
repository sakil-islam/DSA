// 496. Next Greater Element I

var nextGreaterElement = function (nums1, nums2) {
    // O (n + m)
    let nums1Idx = new Map(); {
        let idx = 0;
        for (const n of nums1)
            nums1Idx.set(n, idx++);
    }
    console.log(nums1Idx);
    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        res.push(-1);
        console.log(res, " res");
    }


    let stack = [];
    for (let i = 0; i < nums2.length; i++) {
        let cur = nums2[i];
        console.log(cur, res, stack, " for 1");
        // while stack is not empty and current is greater than the top of the stack
        while (stack.length > 0 && cur > stack[stack.length - 1]) {
            let val = stack.pop();
            let idx = nums1Idx.get(val);
            res[idx] = cur;
            console.log(cur, res, stack, " for 2");
        }

        if (nums1Idx.has(cur))
            stack.push(cur);
        console.log(cur, res, stack, " for 3");
    }

    return res;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));