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
    preOrder(node){

        console.log(node.value);
        
        if(node.left){
            this.preOrder(node.left)
        }

        if(node.right){
            this.preOrder(node.right)
        }
    }
}

let dfs = new BinaryTree(4);

dfs.insert(2);
dfs.insert(7);
dfs.insert(1);
dfs.insert(3);
dfs.insert(6);
dfs.insert(9);

console.log(dfs.preOrder(dfs.root));


// 226. Invert Binary Tree
function invertTree(root) {
  if (!root) {
    return null;
  }
  // recursively invert the left and right subtrees
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  // swap the left and right subtrees
  root.left = right;
  root.right = left;
  return root;
}