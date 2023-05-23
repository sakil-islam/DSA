// Simple approach without using Kadane’s Algorithm

const INT_MIN = -1e9;
function maximumSubarraySum(arr, n) {
let maxSum = INT_MIN;
 let i=0;
 for(; i <= n - 1; i++) {
   let currSum = 0;
   let j=i;
   for (; j <= n - 1; j++) {
    console.log(currSum , "current sum")
     currSum += arr[j];
     if (currSum > maxSum) {
       maxSum = currSum;
    console.log(maxSum , "max sum")

     }
   }
 }
 
 return maxSum;
 
}
   // Your code goes here
   let a = [1, 3, 8, -2, 6, -8, 5];
   console.log(maximumSubarraySum(a, 7));
