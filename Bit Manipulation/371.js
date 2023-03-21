// 371. Sum of Two Integers

function add(a, b) {
    while (b != 0) {
        let carry = a & b;
        console.log(carry);
        console.log(a ^ b, "before");
        a = a ^ b;
        console.log(a ^ b, "after");
        console.log(a);
        b = carry << 1;
        console.log(b);
    }
    return a;
}

// let a = 1;
// let b = 2;
// console.log(add(a, b));
console.log("-------------");
// console.log(add(2, 3));
console.log(add(2, -1));

// var getSum = function (a, b) {
//     let sum = [];
//     for (let i = 0; i < a; i++) {
//         sum.push(i)
//     }
//     for (let i = 0; i < b; i++) {
//         sum.push(i)
//     }
//     return sum.length;
// };