class PersonForm {
    constructor(name, dob, age){
        this.name = name,
        this.dob = dob,
        this.age = age
    }
    UpdateName(name){
        this.name = name;
    }
}

let rakib = new PersonForm('rakib', '1997-07-14', 26);

console.log(rakib);
rakib.UpdateName('sakib');
console.log(rakib);