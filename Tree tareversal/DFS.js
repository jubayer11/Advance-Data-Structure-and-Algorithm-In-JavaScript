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

    /**
     * Breadth-First Search (BFS)
     * Traverses the tree level by level from top to bottom, left to right.
     *
     * Time Complexity:
     * - Best: O(n)
     * - Worst: O(n) → every node is visited once
     *
     * Space Complexity:
     * - O(n) due to the queue holding nodes
     */
    bfs() {
        let queue = [this.root];
        let results = [];

        while (queue.length !== 0) {
            const current = queue.shift();
            results.push(current.value);

            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
        return results;
    }

    /**
     * Depth-First Search (Pre-order, Iterative)
     * Visits root, then left, then right
     *
     * Time Complexity: O(n)
     * Space Complexity: O(h) — h = height of tree (stack usage)
     */
    preOrderDFS() {
        let results = [];
        let stacks = [this.root];

        while (stacks.length !== 0) {
            const current = stacks.pop();
            results.push(current.value);

            if (current.right !== null) {
                stacks.push(current.right);
            }
            if (current.left !== null) {
                stacks.push(current.left);
            }
        }
        return results;
    }

    /**
     * Depth-First Search (In-order, Iterative)
     * Visits left, then root, then right
     *
     * Time Complexity: O(n)
     * Space Complexity: O(h)
     *
     * For Binary Search Trees, this returns a sorted array
     */
    inOrderDFS() {
        let results = [];
        let stacks = [];
        let current = this.root;

        while (current || stacks.length) {
            while (current) {
                stacks.push(current);
                current = current.left;
            }
            current = stacks.pop();
            results.push(current.value);
            current = current.right;
        }
        return results;
    }

    /**
     * DFS Pre-order (Recursive)
     * Visit node → left → right
     */
    preOrderDFSRecursion(current = this.root, result = []) {
        if (!current) return result;
        result.push(current.value);
        if (current.left) {
            this.preOrderDFSRecursion(current.left, result);
        }
        if (current.right) {
            this.preOrderDFSRecursion(current.right, result);
        }
        return result;
    }

    /**
     * DFS Post-order (Iterative with two stacks)
     * Visit left → right → node
     */
    postOrderDFS() {
        let results = [];
        let stacks1 = [this.root];
        let stacks2 = [];

        while (stacks1.length !== 0) {
            const current = stacks1.pop();
            stacks2.push(current.value);
            if (current.left !== null) {
                stacks1.push(current.left);
            }
            if (current.right !== null) {
                stacks1.push(current.right);
            }
        }

        let n = stacks2.length;
        for (let i = 0; i < n; i++) {
            results.push(stacks2.pop());
        }
        return results;
    }

    /**
     * DFS Post-order (Recursive)
     * Visit left → right → node
     */
    postOrderDFSRecursion(current = this.root, result = []) {
        if (!current) return result;
        if (current.left) {
            this.postOrderDFSRecursion(current.left, result);
        }
        if (current.right) {
            this.postOrderDFSRecursion(current.right, result);
        }
        result.push(current.value);
        return result;
    }

    /**
     * DFS In-order (Recursive)
     * Visit left → node → right
     */
    inOrderDFSRecursions(current = this.root, result = []) {
        if (!current) return result;
        if (current.left) {
            this.inOrderDFSRecursions(current.left, result);
        }
        result.push(current.value);
        if (current.right) {
            this.inOrderDFSRecursions(current.right, result);
        }
        return result;
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
}

// Example usage
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log("In-order Traversal:", tree.inOrderDFS());