// 179. Largest Number

var largestNumber = function (nums) {
    let sorted = nums.sort((a, b) => {
        let ab = a.toString() + b.toString();
        console.log(ab)
        let ba = b.toString() + a.toString();
        console.log(ba)
        return ba - ab;
    })
    console.log(sorted)
    const joined = sorted.join('')
    if (parseInt(joined) === 0) {
        return '0';
    } else {
        return joined;
    }
};

console.log(largestNumber([3, 30, 34, 5, 9]));