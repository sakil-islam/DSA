class HashTable {
    constructor(size){
        this.arr = new Array(size);
        // this.arr = new Array(size).fill([]);
        this.size = size;
    }
    hashFunction(str){
        str = str + '';
        let sum = 0;
        for(let i = 0; i < str.length; i++){
            sum = sum + str.charCodeAt(i);
        }
        let index = sum % this.size;
        // console.log({str, index});
        return index;
    }
    set(value){
        let index = this.hashFunction(value);
        let indexArray = this.arr[index];
        if(indexArray === undefined){
            indexArray = [value];
        }
        else{
            indexArray.push(value);
        }
        // console.log(indexArray);
        this.arr[index] = indexArray;
    }
    get(value){
        let index = this.hashFunction(value);
        let resultArray = this.arr[index];
        // console.log(this.arr);
        // console.log(resultArray);
        for(let i = 0; i < resultArray.length; i++){
            if(resultArray[i] === value){
                return true;
            }
        }
        return false;
    }
}

let hashValue = new HashTable(5);

hashValue.set('apple');
hashValue.set('app');
hashValue.set('mango');
hashValue.set('banana');
console.log(hashValue.arr);
console.log(hashValue.get('jak'));
