class Person {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
	changeNamr(name){
		this.name = name;
	}
	sendEmail(msg){
		console.log('To', this.email);
		console.log('Sending Email');
		console.log('MSG', msg);
    }
}

const p1 = new Person ('sakil', 'sakil@gmail.com');
const p2 = new Person ('sakil1', 'sakil1@gmail.com');

// console.log(p1);
// console.log(p2);

p2.sendEmail('hello');
p1.sendEmail('hi');