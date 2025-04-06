class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value, current = this.root) {
        if (!this.root) {
            const newNode = new Node(value);
            this.root = newNode;
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

    inOrderTraversal(current = this.root, result = []) {
        if (!current) return result;

        if (current.left) this.inOrderTraversal(current.left, result);
        result.push(current.value);
        if (current.right) this.inOrderTraversal(current.right, result);

        return result;
    }

    remove(value) {
        let nodes = this.removeHelper(value);
        if (nodes === null) return false;

        let currentNode = nodes[0];
        let parentNode = nodes[1];
        let side = nodes[2];

        if (currentNode === null) return false;

        // No children
        if (currentNode.left === null && currentNode.right === null) {
            if (side === 'root') this.root = null;
            else parentNode[side] = null;
            return true;
        }

        // Only right child
        if (currentNode.left === null) {
            if (side === 'root') this.root = currentNode.right;
            else parentNode[side] = currentNode.right;
            return true;
        }

        // Only left child
        if (currentNode.right === null) {
            if (side === 'root') this.root = currentNode.left;
            else parentNode[side] = currentNode.left;
            return true;
        }

        // Two children
        // Inside remove(), when handling two children:
        let successor = currentNode.right;
        let successorParent = currentNode;

        while (successor.left !== null) {
            successorParent = successor;
            successor = successor.left;
        }

        currentNode.value = successor.value;

// Delete the successor (now duplicate)
        if (successorParent === currentNode) {
            // Happens when successor is currentNode.right (no left children)
            successorParent.right = successor.right;
        } else {
            // Normal case (successor is a left child somewhere)
            successorParent.left = successor.right;
        }

        return true;
    }

    removeHelper(value, current = this.root, parentNode = null, side = 'root') {
        if (this.root === null) return null;

        if (value === current.value) return [current, parentNode, side];

        if (value < current.value && current.left !== null) {
            return this.removeHelper(value, current.left, current, 'left');
        }

        if (value > current.value && current.right !== null) {
            return this.removeHelper(value, current.right, current, 'right');
        }

        return null;
    }

    find(value, current = this.root) {
        if (this.root === null) return null;

        if (value === current.value) return current;

        if (value < current.value && current.left !== null) {
            return this.find(value, current.left);
        }

        if (value > current.value && current.right !== null) {
            return this.find(value, current.right);
        }

        return null;
    }
}

// ✅ Create tree and test all methods
const tree = new BinarySearchTree();
tree.insert(110);
tree.insert(120);
tree.insert(150);
tree.insert(10);
tree.insert(5);
tree.insert(610);
tree.insert(60);
tree.insert(61);
tree.insert(6310);

console.log("In-order before removal:", tree.inOrderTraversal());

console.log("Removing 110 (root with two children):", tree.remove(110));

console.log("In-order after removal:", tree.inOrderTraversal());

console.log("Find 150:", tree.find(150));  // Should return the Node object
console.log("Find 110 (should be gone):", tree.find(110));  // Should return null
