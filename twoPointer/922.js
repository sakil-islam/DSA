// 922. Sort Array By Parity II

function sortArrayByParityII(nums) {
    let even = nums.filter(num => num % 2 === 0);
    console.log(even);
    let odd = nums.filter(num => num % 2 === 1);
    console.log(odd);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            result.push(even.shift());
            console.log(result + 'even');
        } else {
            result.push(odd.shift());
            console.log(result + 'odd');
        }
    }
    return result;
}

console.log(sortArrayByParityII([5, 4, 7, 2]));