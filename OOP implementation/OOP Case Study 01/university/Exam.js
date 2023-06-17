const _id = Symbol('id');
const _name = Symbol('name');
const _passMark = Symbol('passMark');
const _subject = Symbol('subject');

class Exam {
    constructor({id, name, passMark, subject}){
        this[_id] = id;
        this[_name] = name;
        this[_subject] = subject;
        this[_passMark] = passMark || 33;
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
    get passMark(){
        return this[_passMark];
    }
    set passMark(value){
        this[_passMark] = value;
    }
    get subject(){
        return this[_subject];
    }
    set subject(value){
        this[_subject] = value;
    }

    toString(){
        return `
        ID = ${this[_id]},
        name = ${this[_name]},
        subject = ${this[_subject]},
        passMark = ${this[_passMark]},
        `;
    }
}

module.exports = Exam;