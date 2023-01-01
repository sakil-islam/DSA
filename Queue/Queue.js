class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class Queue {
    constructor(value) {
        let node = new Node(value)
        this.head = node
        this.tail = node
        this.length = 1
    }
    // append holo pore 
    Enqueue(value) {
        let node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.length++
    }

    Dequeue(){
        let popAbleNode = this.head;
        this.head = this.head.next;
        return popAbleNode.value;
    }

    print() {
        let value = this.head;
        while (value) {
            console.log(value.value);
            value = value.next;
        }
    }
}

let myQueue = new Queue(10);
myQueue.Enqueue(20);
myQueue.Enqueue(30);
myQueue.Enqueue(40);
myQueue.Enqueue(50);

myQueue.print();
console.log(myQueue.Dequeue() + 'Dequeue element');
myQueue.print();

