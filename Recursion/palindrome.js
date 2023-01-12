let str = 'madam';
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

var lastCharacter = function(str) {
    return str.slice(-1);
};

var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function (str) {
    if (str.length < 2) {
        return true;
    }
    if (firstCharacter(str) == lastCharacter(str)) {
        return isPalindrome(middleCharacters(str));
    }

    return false;
};

console.log(isPalindrome(str));