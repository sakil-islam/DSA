// 917. Reverse Only Letters

var reverseOnlyLetters = function (s) {
    let partation = s.split('')
    let size = partation.length - 1;
    for (let i = 0, j = size; i <= j;) {
        if ((/^[a-zA-Z]*$/.test(partation[i])) && (/^[a-zA-Z]*$/.test(partation[j]))) {
            temp = partation[i];
            partation[i] = partation[j];
            partation[j] = temp;
            i++;
            j--;
        }
        else if (!(/^[a-zA-Z]*$/.test(partation[i]))) {
            i++;
        }
        else if (!(/^[a-zA-Z]*$/.test(partation[j]))) {
            j--;
        }
    }
    return partation.join('');
};

console.log(reverseOnlyLetters("abCdEfghIj"));
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));

// var str = "abcdef-g";
// if(/^[a-zA-Z]*$/.test(str)){
//   console.log("The string contains only characters.");
// } else {
//   console.log("The string contains other types of characters.");
// }
