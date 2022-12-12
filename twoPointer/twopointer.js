let numbers = [10, 20, 30, 40, 50];

let size = b=numbers.length - 1;

let temp;

console.log({before : numbers});

for(let i=0, j=size; i<=j; i++,j--){
	temp = numbers[i];
	numbers[i]=numbers[j];
	numbers[j]=temp;
}

console.log({after : numbers});