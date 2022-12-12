class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class linkList {
    constructor(value) {
        let node = new Node(value)
        this.head = node
        this.tail = node
        this.length = 1
    }
    // append holo pore 
    append(value) {
        let node = new Node(value)
        this.tail.next = node
        this.tail = node
        this.length++
    }

    //prepend holo pore

    prepend(value) {
        let node = new Node(value)
        node.next = this.head;
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
    // insert data in linklist
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
            console.log({preNode: preNode.value});
            newNode.next = preNode.next;
            preNode.next = newNode;

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