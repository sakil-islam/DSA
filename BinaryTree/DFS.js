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

    inOrder(node){
        if(node.left){
            this.inOrder(node.left)
        }

        console.log(node.value);

        if(node.right){
            this.inOrder(node.right)
        }
    }
    preOrder(node){

        console.log(node.value);
        
        if(node.left){
            this.preOrder(node.left)
        }

        if(node.right){
            this.preOrder(node.right)
        }
    }
    postOrder(node){
        if(node.left){
            this.postOrder(node.left)
        }

        if(node.right){
            this.postOrder(node.right)
        }

        console.log(node.value);
    }
}

let dfs = new BinaryTree(10);

dfs.insert(20);
dfs.insert(8);
dfs.insert(9);
dfs.insert(90);
dfs.insert(15);

// console.log(dfs.inOrder(dfs.root));
// console.log(dfs.preOrder(dfs.root));
console.log(dfs.postOrder(dfs.root));