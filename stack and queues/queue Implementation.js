class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.rear === null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.front === null) return null; // Queue underflow
        let removedNode = this.front;
        this.front = this.front.next;
        if (this.front === null) this.rear = null; // If queue becomes empty
        this.length--;
        return removedNode.value;
    }

    peek() {
        return this.front ? this.front.value : null;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    print() {
        let current = this.front;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log("Queue:", result.join(" -> "));
    }
}

// ✅ Example Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();  // Queue: 10 -> 20 -> 30
console.log("Dequeued:", queue.dequeue());  // Dequeued: 10
queue.print();  // Queue: 20 -> 30
console.log("Peek:", queue.peek());  // Peek: 20
