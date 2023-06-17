const UniPerson = require('./UniPerson');

const _studentID = Symbol('studentID');
const _guardian = Symbol('guardian');
const _exams = Symbol('exams');
const _fee = Symbol('fee');

class Student extends UniPerson {
    constructor(id, name, studentID, guardian){
        super(id,name);
        this[_studentID] = studentID;
        this[_guardian] = guardian;
        this[_exams] = [];
        this[_fee] = null;
    }

    get exams(){
        return this[_exams];
    }
    set exams(value){
        this[_exams] = value;
    }
    addExam(exam){
        this[_exams].push(exam);
    }
    get guardian(){
        return this[_guardian];
    }
    get studentID(){
        return this[_studentID];
    }
    get fee(){
        return this[_fee];
    }
    set fee(value){
        this[_fee] = value;
    }

    toString(){
        return `${super.toString()},StudentID = ${this[_studentID]}`;
    }
}

module.exports = Student;