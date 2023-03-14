const setDifferenceArrayOfObjectsOfObjects = (arrayA, arrayB) => {
    const difference = arrayA.filter(objA => !arrayB.some(objB => objA.property === objB.property));
    return difference;
}

const arrayA = [{ property: 'a', value: 1 }, { property: 'b', value: 2 }, { property: 'c', value: 3 }];
const arrayB = [{ property: 'a', value: 4 }, { property: 'c', value: 5 }];
const difference = setDifferenceArrayOfObjectsOfObjects(arrayA, arrayB);
console.log(difference); // [{ property: 'b', value: 2 }]