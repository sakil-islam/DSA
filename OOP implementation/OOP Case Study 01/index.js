const { Guardian, Student, Teacher } = require('./person');
const { Contact, Address } = require('./contact')
const { Department, Subject } = require('./university')

const guardian = new Guardian(1, 'sakil', 'enginner', 75000);
guardian.blood = "0+";

guardian.contact = new Contact({ id: 1, email: "sakil@gmail.com", phone: "12345" });

guardian.contact.address = new Address({ id: 1, roadNo: "6B", city: "Dhaka city", region: "Dhaka", country: "Bangladesh", postalCode: 1200 })

// console.log(guardian.toString());
// console.log(guardian.contact + '');
// console.log(guardian.contact.address.country);

/**
 * Student ID 1
 */

const student = new Student(1, 'sakil', 'ST001', guardian);
student.blood = "A+";
student.contact = new Contact({
    id: 2, email: "sakilstudent@gmail.com", phone: "01487569833", alternativePhone: student.guardian.contact.phone, address: student.guardian.contact.address,
})

/**
 * Department ID 1
 */

const department = new Department({ id: 1, name: 'CSE' });
student.department = department;

department.subjects = [
    new Subject(1, 'Computer Fundamental', 3),
    new Subject(2, 'Introduction to C', 4),
    new Subject(3, 'Computer Lab', 2),
];

// console.log(student);
// console.log(student.department.toString());
// console.log(student.contact.toString());

const credit = student.department.subjects.reduce((a, b) => {
    a += b.credit;
    return a;
}, 0);

// console.log('Total Credit', credit);

/**
 * Teachers
 */

const dean = new Teacher(1, 'xyz', department.subjects[0], 'EMP007');
dean.department = dean;
dean.blood = 'AB+';
dean.salary = 102000;
dean.contact = new Contact({
    id: 3, email: "sfdf@gmail.com", phone: "0148754833",address: new Address({
        id: 2, roadNo: "432 6B", city: "Dhaka city", region: "Dhaka", country: "Bangladesh", postalCode: 1212
    }),
});

const teacher1 = new Teacher(1, 'z', department.subjects[1], 'EMP003');
teacher1.department = department;
teacher1.blood = 'AB+';
teacher1.salary = 50000;
teacher1.contact = new Contact({
    id: 4, email: "sfdf@gmail.com", phone: "0148754833",address: new Address({
        id: 3, roadNo: "432 6B", city: "Dhaka city", region: "Dhaka", country: "Bangladesh", postalCode: 1212
    }),
});
const teacher12 = new Teacher(1, 'yz', department.subjects[2], 'EMP002');
teacher12.department = department;
teacher12.blood = 'AB+';
teacher12.salary = 102000;
teacher12.contact = new Contact({
    id: 5, email: "sfdf@gmail.com", phone: "0148754833",address: new Address({
        id: 4, roadNo: "432 6B", city: "Dhaka city", region: "Dhaka", country: "Bangladesh", postalCode: 1212
    }),
});

department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher12);

// console.log(student.department);

student.department.teachers.forEach((teacher, index) => {
    console.log(`${index + 1}. ${teacher.name} (${teacher.subject.name})`);
});

// console.log(dean.department);

guardian.addChild(student);

const teachersSalary = guardian.children[0].department.teachers.reduce((acc,cur) => {
    acc += cur.salary;
    return acc;
}, 0);

// console.log(teachersSalary);

// how many people contain o+ blood in this university

let count = 0;
if(student.blood === "AB+") count++;
if(student.guardian.blood === "AB+") count++;
student.department.teachers.forEach((teacher) => {
    if(teacher.blood === "AB+") count++;
});

console.log(count);