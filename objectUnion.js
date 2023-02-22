function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!isEqual(val1, val2)) {
        return false;
      }
    } else if (val1 !== val2) {
      return false;
    }
  }
  return true;
}

function unionArrayOfObjectsOfObjects(arr1, arr2) {
  const union = [];
  arr1.forEach(obj1 => {
    union.push(obj1);
  });
  arr2.forEach(obj2 => {
    if (!union.some(obj1 => isEqual(obj1, obj2))) {
      union.push(obj2);
    }
  });
  return union;
}
const array1 = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}];
const array2 = [{id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}, {id: 4, name: 'Dave'}];


console.log(unionArrayOfObjectsOfObjects(array1, array2))