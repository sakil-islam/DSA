// var isPalindrome = function (x) {
//     if (x < 0) {
//         return false;
//     };
//     let number = x.toString();
//     let j = number.length - 1;
//     let i = 0;
//     while (i <= j) {
//         if (number[i] != number[j]) {
//             return false;
//         }
//         i++;
//         j--
//     }
//     return true;

// }

// without converting to string
var isPalindrome = function (number)
{
    var remainder, temp, reversedNumber = 0;
    temp = number;
    
    // our reverse logic for numbers
    while(number > 0)
    {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber*10 + remainder;
    }
    //check whether the number is palindrome
    if(reversedNumber == temp)
    {
        return true
    }
    else
    {
        return false
    }
}

console.log(isPalindrome(121));