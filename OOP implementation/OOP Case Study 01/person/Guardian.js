const Person = require('./Person');

const _profession = Symbol('profession');
const _income = Symbol('income');
const _children = Symbol('children');

class Guardian extends Person {
    constructor(id, name, profession, income){
        super(id, name);
        this[_profession] = profession;
        this[_income] = income;
        this[_children] = [];
    }
    get profession(){
        return this[_profession];
    }
    set profession(value){
        this[_profession] = value;
    }
    get income(){
        return this[_income];
    }
    set income(value){
        return this[_income] = value;
    }

    get children(){
        return this[_children];
    }

    addChild(child){
        this[_children].push(child)
    }

    toString(){
        return `${super.toString()},Profession = ${this[_profession]}, Income = ${this[_income]}`;
    }
}

module.exports = Guardian;
