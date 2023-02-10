// 1768. Merge Strings Alternately

let arrayA = "abcde";
let arrayB = "pqr";

var mergeAlternately = function (word1, word2) {
    let arr1 = word1.split("");
    let arr2 = word2.split("");
    let i = 0;
    let j = 0;
    let results = [];
    while (i < arr1.length && j < arr2.length) {
        results.push(arr1[i]);
        i++;
        results.push(arr2[j])
        j++
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results.join("");
}
console.log(mergeAlternately(arrayA, arrayB));
