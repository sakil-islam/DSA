// 345. Reverse Vowels of a String

var reverseVowels = function (s) {
    let vowel = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true
    };
    let checkStr = s.split('');
    console.log(checkStr);
    let i = 0, j = checkStr.length - 1;
    while (i < j || i === 0) {
        if (vowel[checkStr[i]] && vowel[checkStr[j]]) {
            let temp = checkStr[i];
            checkStr[i] = checkStr[j];
            checkStr[j] = temp;
            i++;
            j--;
        }
        else {
            if (vowel[checkStr[i]]) {
                j--;
            } else if (vowel[checkStr[j]]) {
                i++;
            } else {
                i++;
                j--;
            }
        }
    }
    return checkStr.join('');
};
console.log(reverseVowels("race a car"));