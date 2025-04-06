class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Insert at the end (Push)
    push(value) {
        const item = new Node(value);

        if (this.head === null) {
            this.head = item;
            this.tail = item;
        } else {
            this.tail.next = item;
            this.tail = item;
        }

        this.length++;
        return this;
    }

    // Remove last element (Pop)
    pop() {
        if (this.head === null) return null; // Empty list
        if (this.head.next === null) { // Only one node
            let removedValue = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedValue;
        }

        let temp = this.head;
        let previous = null;

        while (temp.next !== null) { // Traverse to last node
            previous = temp;
            temp = temp.next;
        }

        previous.next = null; // Remove last node
        this.tail = previous; // Update tail

        this.length--;
        return temp.value;
    }

    // Remove first element (Shift)
    shift() {
        if (this.head === null) return;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }

        this.head = this.head.next;
        this.length--;
    }

    // Insert at the beginning (Unshift)
    unShift(value) {
        const item = new Node(value);
        if (this.head === null) {
            this.head = item;
            this.tail = item;
        } else {
            item.next = this.head;
            this.head = item;
        }

        this.length++;
        return this;
    }

    // Get node at specific index
    get(index) {
        if (index < 0 || index >= this.length) return null;

        let dex = 0;
        let current = this.head;

        while (current !== null) {
            if (dex === index) return current;
            current = current.next;
            dex++;
        }

        return null;
    }

    // Insert at a specific position
    insertAt(index, value) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) {
            this.unShift(value);
            return true;
        }

        let temp = this.head;
        let dex = 0;

        while (temp !== null) {
            if (dex === index - 1) {
                const item = new Node(value);
                item.next = temp.next;
                temp.next = item;

                if (item.next === null) {
                    this.tail = item; // Update tail if inserting at the end
                }

                this.length++;
                return true;
            }
            temp = temp.next;
            dex++;
        }

        return false;
    }

    // Remove an element by value
    remove(value) {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.shift();
            return;
        }

        let temp = this.head;
        let previous = null;

        while (temp !== null) {
            if (temp.value === value) {
                if (previous !== null) {
                    previous.next = temp.next;
                    if (temp.next === null) {
                        this.tail = previous; // Update tail if last node is removed
                    }
                }
                this.length--;
                return;
            } else {
                previous = temp;
                temp = temp.next;
            }
        }
    }

    // Check if value exists in the list
    search(value) {
        let temp = this.head;

        while (temp !== null) {
            if (temp.value === value) return true;
            temp = temp.next;
        }

        return false;
    }

    // Detect cycle in the linked list
    hasCycle() {
        if (this.head === null || this.head.next === null) return false;

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) return true;
        }

        return false;
    }

    // Remove all duplicates from a sorted list
    removeAllDuplicates() {
        let current = this.head;

        while (current !== null && current.next !== null) {
            if (current.value === current.next.value) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }

    // Reverse the linked list
    reverse() {
        let current = this.head;
        let previous = null;

        this.tail = this.head; // Update tail to original head before reversing

        while (current !== null) {
            let temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }

        this.head = previous; // Update head to the last node
    }

    // Convert linked list to array
    toArray() {
        let temp = this.head;
        let arr = [];

        while (temp !== null) {
            arr.push(temp.value);
            temp = temp.next;
        }

        return arr;
    }

    // Traverse and print values
    traverse() {
        let current = this.head;
        let result = [];

        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }

        console.log(result.join(" -> "));
    }
}

// =================== TESTING ===================

const list = new SinglyLinkedList();

// Insert values
list.push(1);
list.push(1);
list.push(2);
list.push(3);
list.push(3);
list.push(4);

// Remove duplicates
list.removeAllDuplicates();
console.log("After removing duplicates:", list.toArray()); // Expected: [1, 2, 3, 4]

// Reverse the list
list.reverse();
console.log("After reversing:", list.toArray()); // Expected: [4, 3, 2, 1]

// Check cycle detection
console.log("Has cycle:", list.hasCycle()); // Expected: false

// Create a cycle for testing
list.tail.next = list.head;
console.log("Has cycle after adding one:", list.hasCycle()); // Expected: true

// Remove cycle for further tests
list.tail.next = null;

// Insert at different positions
list.insertAt(0, 10);
list.insertAt(2, 20);
list.insertAt(5, 30);
console.log("After insertAt:", list.toArray()); // Expected with added elements

// Test get()
console.log("Get index 2:", list.get(2)?.value); // Expected: 20

// Remove elements
list.remove(2);
list.remove(10);
console.log("After removing:", list.toArray());

// Traverse & print
list.traverse();
