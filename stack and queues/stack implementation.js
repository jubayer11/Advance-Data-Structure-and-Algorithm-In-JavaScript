class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.top === null) return null; // Stack underflow
        let removedNode = this.top;
        this.top = this.top.next;
        this.length--;
        return removedNode.value;
    }

    peek() {
        return this.top ? this.top.value : null;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    print() {
        let current = this.top;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log("Stack:", result.join(" -> "));
    }
}

// ✅ Example Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();  // Stack: 30 -> 20 -> 10
console.log("Popped:", stack.pop());  // Popped: 30
stack.print();  // Stack: 20 -> 10
console.log("Peek:", stack.peek());  // Peek: 20
