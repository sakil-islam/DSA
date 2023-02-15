/*

const number = 12345;
const array = number.toString().split('').map(Number);
console.log(array); // Output: [1, 2, 3, 4, 5]

*/

const number = 12345;
const array = [...number.toString()].map(Number);
console.log(array); // Output: [1, 2, 3, 4, 5]