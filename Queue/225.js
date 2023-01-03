// 225. Implement Stack using Queues

class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class MyQueue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(value) {
        let node = new Node(value)

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    dequeue() {
        if (!this.length) return undefined;
        let popAbleNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return popAbleNode.value;
    }
}

class MyStack {
    constructor() {
        this.q1 = new MyQueue();
        this.q2 = new MyQueue();
    }
    push(value) {
        this.q1.enqueue(value);
        if (!this.q1.length) {
            return;
        }
    }
    pop() {
        if (this.q1.length === 0) return -1;

        while(this.q1.length > 1){
            let x = this.q1.dequeue();
            this.q2.enqueue(x);
        }
        let poppedElement = this.q1.dequeue();
        while(this.q2.length > 0){
            let x = this.q2.dequeue();
            this.q1.enqueue(x);
        }
        return poppedElement;
    }
    top() {
        return this.q1.head.value;
    }
    empty() {
        return this.q1.length === 0;
    }
}

let myStack = new MyStack();

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.top());
console.log(myStack.empty());
