const _id = Symbol('id');
const _name = Symbol('name');
const _subjects = Symbol('subjects');
const _dean = Symbol('dean');
const _teachers = Symbol('teachers');

class Department {
    constructor({id, name, subjects, dean, teachers}){
        this[_id] = id;
        this[_name] = name;
        this[_subjects] = subjects || [];
        this[_dean] = dean || "";
        this[_teachers] = teachers || [];
    }
    get id(){
        return this[_id];
    }

    get name(){
        return this[_name];
    }
    set name(value){
        this[_name] = value;
    }
    get subjects(){
        return this[_subjects];
    }
    set subjects(value){
        this[_subjects] = value;
    }
    get dean(){
        return this[_dean];
    }
    set dean(value){
        this[_dean] = value;
    }
    get teachers(){
        return this[_teachers];
    }
    // set teachers(value){
    //     this[_teachers] = value;
    // }

    addTeacher(teacher){
        this[_teachers].push(teacher);
    }

    toString(){
        return `
        ID = ${this[_id]},
        Name = ${this[_name]},
        Subjects: ${this[_subjects]},
        `;
    }
}

module.exports = Department;