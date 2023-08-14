function getPermutations(arr) {
    if (arr.length === 1) {
        return [arr];
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const remainingElements = arr.slice(0, i).concat(arr.slice(i + 1));
        const permutationsOfRest = getPermutations(remainingElements);

        for (const perm of permutationsOfRest) {
            result.push([currentElement].concat(perm));
        }
    }

    return result.map(perm => perm.join(""));
}

const array = ["foo","bar"];
const permutations = getPermutations(array);

console.log(permutations);

// Filter out duplicates
const uniquePermutations = permutations.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniquePermutations);
