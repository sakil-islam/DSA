class Node{
    constructor(value, next=null){
        this.value = value
        this.next = next
    }
}

class linkList{
    constructor(value){
        let node = new Node(value)
        this.head = node
        this.tail = node
    }
    append(value){
        let node = new Node(value)
        this.tail.next = node
        this.tail = node
    }
}

let list = new linkList(200);
list.append(500);
list.append(700);
list.append(300);


console.log(list);