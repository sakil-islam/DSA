const array = ["foo", "bar"];
let str = array.join("");

let s = "barfoothefoobarman";
let output = [];
let permutationStore = []

let permutation = (str, result) => {
    if (str.length == 0) {
        permutationStore.push(result);
        // console.log(result);
    }
    for (let i = 0; i < str.length; i++) {
        let rest = str.substring(0, i) + str.substring(i + 1);
        // console.log(rest, 'rest', str.substring(0, i) ,'= sub string =', str.substring(i + 1));
        // console.log(result + str[i], 'i =', i);
        permutation(rest, result + str[i]);
    }
}
permutation(str, '')

// console.log(permutationStore);

for (const perm of permutationStore) {
    if (s.includes(perm)) {
        let val = s.indexOf(perm);
        output.push(val);
    }
}

console.log(output);
