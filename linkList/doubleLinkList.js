// insert, update, delete

class Node {
    constructor(value, next = null, prev = null) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class linkList {
    constructor(value) {
        let node = new Node(value)
        this.head = node;
        this.tail = node;
        this.length = 1;
    }
    // append holo pore 
    append(value) {
        let node = new Node(value)
        this.tail.next = node
        node.prev = this.tail;
        this.tail = node; 
        this.length++
    }

    //prepend holo pore
    prepend(value) {
        let node = new Node(value)
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++
    }

    print() {
        let value = this.head;
        while (value) {
            console.log(value.value);
            value = value.next;
        }
    }
    // insert data in link list
    appendAt(value, position){
        if(position === 1){
            this.prepend(value);
        }
        else if(position === this.length + 1){
            this.append(value);
        }
        else {
            let newNode = new Node(value);
            let preNode = this.findNode(position - 1)
            let nextNode = this.findNode(position)
            console.log({preNode: preNode.value});
            console.log({nextNode: nextNode.value});
            newNode.next = nextNode;
            nextNode.prev = newNode;
            preNode.next = newNode;
            newNode.prev = preNode;

            this.length++
        }
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

    // Update Node data
    updateNode(value, position){
        let node = this.findNode(position);
        node.value = value;
    }

    //Delete Node data
    deleteNode(position){
        let node = this.findNode(position);
        let previousNode = this.findNode(position - 1);
        previousNode.next = node.next;
        node.next = previousNode.next;
    }
}

let list = new linkList(100);
list.append(500);
list.append(600);
list.append(700);
list.append(800);
list.prepend(50);

list.appendAt(-25, 1);
list.appendAt(1000, 8);
list.appendAt(80, 3);

list.updateNode(250,2);

list.deleteNode(3);

list.print();

// console.log(list);

// console.log(list.head);
// console.log(list.tail);