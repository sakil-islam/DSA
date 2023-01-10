class HashMap {
    constructor(){
        this.map = {};
    }
    put(key, value){
        this.map[key] = value;
    }
    get(key){
        return this.map[key] || -1;
    }
}

let hashMap = new HashMap();
hashMap.put('name', 'sakil');

console.log(hashMap.get('age'));
console.log(hashMap.get('name'));