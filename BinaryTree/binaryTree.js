class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(value){
        this.root = new Node(value);
    }

    insert(value){
        let currentNode = this.root
        while(true){
            // large --> right
            if(currentNode.value < value){
                if(!currentNode.right){
                    let newNode = new Node(value);
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
            // small --> left
            else {
                if(!currentNode.left){
                    let newNode = new Node(value);
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
        }
    }
}

let tree = new BinaryTree(20);

tree.insert(30);
tree.insert(8);
tree.insert(15);
tree.insert(25);
console.log(tree);