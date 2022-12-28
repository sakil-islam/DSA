var nextGreatestLetter = function(letters, target) {
   let left = 0;
   let right = letters.length - 1
   while(left <= right) {
       const mid = Math.trunc((left+right)/2)
       
       if (letters[mid] <= target) {
           left = mid + 1
       } else {
           right = mid - 1
       }
   }
   if (left > letters.length - 1) {
       return letters[0]
   }
   return letters[left]
};
console.log(nextGreatestLetter(["c", "f", "j"], "c"));

