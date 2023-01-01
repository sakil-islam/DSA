class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class Stack {
    constructor(value) {
        let node = new Node(value)
        this.head = node
        this.tail = node
        this.length = 1
    }
    // append holo pore 
    push(value) {
        let node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.length++
    }

    pop(){
        let prevNode = this.findNode(this.length - 1);
        let popAbleNode = prevNode.next;
        prevNode.next = null;
        return popAbleNode;
    }

    findNode(n){
        let count = 1;
        let value = this.head;
        while (value) {
            if(count == n) break;
            count ++
            value = value.next;
        }
        return value;
    }

    print() {
        let value = this.head;
        while (value) {
            console.log(value.value);
            value = value.next;
        }
    }
}

let myStack = new Stack('CI/CD Pipeline');
myStack.push('Youtube - Mount Stack');
myStack.push('Google Drive');

myStack.print();
console.log(myStack.pop());
