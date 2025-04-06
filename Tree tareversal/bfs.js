// Node class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// BinarySearchTree class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value, current = this.root) {
        if (!this.root) {
            this.root = new Node(value);
            return this;
        }

        if (value < current.value) {
            if (!current.left) {
                current.left = new Node(value);
            } else {
                this.insert(value, current.left);
            }
        } else {
            if (!current.right) {
                current.right = new Node(value);
            } else {
                this.insert(value, current.right);
            }
        }

        return this;
    }

    bfs() {
        let queue=[this.root];
        let results=[];


        while(true){
            if(queue.length===0){
                return results;
            }

            const current=queue.shift();
            results.push(current.value);

            if(current.left!==null){
                queue.push(current.left);
            }
            if(current.right!==null){
                queue.push(current.right);
            }
        }
    }
}

// Example usage
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// When ready, test this:
console.log("BFS Traversal:", tree.bfs());
// Expected (once implemented): [10, 6, 15, 3, 8, 20]
