// 680. Valid Palindrome II

var validPalindrome = function (s) {
    let i = 0;
    let k = s.length - 1;

    while (i <= k) {
        if (s[i] != s[k]) {
            if (s[i + 1] == s[k]) {
                i++;
                k--;
            } else if (s[i] == s[k - 1]) {
                i++;
                k--;
            }
            else {
                return false;
            }
        } else {
            i++;
            k--;
        }
    }
    return true;
};

console.log(validPalindrome("aba"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
console.log(validPalindrome("aac"));
console.log(validPalindrome("acc"));