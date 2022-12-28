var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    };
    let number = x.toString();
    let j = number.length - 1;
    let i = 0;
    while (i <= j) {
        if (number[i] != number[j]) {
            return false;
        }
        i++;
        j--
    }
    return true;

}

console.log(isPalindrome(121));