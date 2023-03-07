class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyCircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Insert a new node at the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.head.prev = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // Insert a new node at the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    // Remove the first node with the given data from the list
    remove(data) {
        if (!this.head) {
            return;
        }

        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
            if (current === this.head) {
                // We have looped through the entire list
                current = null;
                break;
            }
        }

        if (!current) {
            return;
        }

        if (current === this.head) {
            this.head = current.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        } else if (current === this.tail) {
            this.tail = current.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        this.length--;
    }

    // Print the list
    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        let output = "";
        do {
            output += `${current.data} <-> `;
            current = current.next;
        } while (current !== this.head);
        console.log(output.slice(0, -5)); // Remove the trailing "<->"
    }
}

const list = new DoublyCircularLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.remove(2);
list.print();