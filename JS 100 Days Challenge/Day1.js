//For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, 
//the output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3].


// T.C - O(n)
// S.C - O(n)

const replaceElement = function (arr) {
    let arrToString = arr.join("");
    let val = arrToString.replaceAll("1", "3");
    return val.split('').map(Number);
}
console.log(replaceElement([1, 2, 1]));


// =============================================

// T.C - O(n)
// S.C - O(1)

const replaceElementInPlace = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            arr[i] = 3;
        }
    }
    return arr;
}

const originalArray = [1, 2, 1];
replaceElementInPlace(originalArray);

console.log(originalArray); // Output: [3, 2, 3]

// ===========================================

function arrayReplace(inputArray, elementToReplace, substrationElem) {
    inputArray.forEach((element, index) => {
        if (element === elementToReplace) {
            inputArray[index] = substrationElem;
        }
    });
    console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3)