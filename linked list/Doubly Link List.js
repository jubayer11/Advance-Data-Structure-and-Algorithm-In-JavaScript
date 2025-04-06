class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // ✅ Push: Add value at the end
    push(value) {
        let item = new Node(value);
        if (this.head === null && this.tail === null) {
            this.head = item;
            this.tail = item;
        } else {
            this.tail.next = item;
            item.previous = this.tail;
            this.tail = item;
        }
        this.length++;
    }

    // ✅ Pop: Remove last value
    pop() {
        if (this.tail === null) return;
        if (this.tail.previous === null) {
            this.tail = null;
            this.head = null;
            this.length--;
            return;
        }
        const previous = this.tail.previous;
        previous.next = null;
        this.tail = previous;
        this.length--;
    }

    // ✅ Shift: Remove first value
    shift() {
        if (this.head === null) return;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.length--;
            return;
        }
        let next = this.head.next;
        this.head = next;
        this.length--;
    }

    // ✅ Unshift: Add value at the beginning
    unshift(value) {
        let item = new Node(value);
        if (this.head === null) {
            this.head = item;
            this.tail = item;
            this.length++;
            return;
        }
        const current = this.head;
        this.head = item;
        this.head.next = current;
        current.previous = this.head;
        this.length++;
        return current;
    }

    // ✅ Get: Retrieve node at index
    get(index) {
        let current = this.head;
        let previous = this.tail;
        let dex = 0;
        let mid = Math.floor(this.length / 2);

        if (index < 0 || index > this.length - 1) return null;

        if (index < mid) {
            while (current !== null && dex <= index) {
                if (dex === index) return current;
                current = current.next;
                dex++;
            }
        } else {
            dex = this.length - 1;
            while (previous !== null && dex >= index) {
                if (dex === index) return previous;
                previous = previous.previous;
                dex--;
            }
        }
        return null;
    }

    // ✅ Set: Update value at index
    set(index, value) {
        let current = this.head;
        let previous = this.tail;
        let dex = 0;
        let mid = Math.floor(this.length / 2);

        if (index < 0 || index > this.length - 1) return false;

        if (index < mid) {
            while (current !== null && dex <= index) {
                if (dex === index) {
                    current.value = value;
                    return true;
                }
                current = current.next;
                dex++;
            }
        } else {
            dex = this.length - 1;
            while (previous !== null && dex >= index) {
                if (dex === index) {
                    previous.value = value;
                    return true;
                }
                previous = previous.previous;
                dex--;
            }
        }
        return false;
    }

    // ✅ Insert at index
    insertAt(index, value) {
        let item = new Node(value);

        // ✅ Edge case: Insert into an empty list
        if (this.length === 0 && index === 0) {
            this.head = item;
            this.tail = item;
            this.length++;
            return item;
        }

        // ✅ Insert at the beginning
        if (index === 0) {
            this.unshift(item.value);
            return this.head;
        }

        // ✅ Insert at the last valid position before tail
        if (index === this.length - 1) {
            this.tail.previous.next = item;
            item.previous = this.tail.previous;
            item.next = this.tail;
            this.tail.previous = item;
            this.length++;
            return item;
        }

        // ✅ Find the node at the given index
        let currentItem = this.get(index);

        // ✅ If index is valid, insert before `currentItem`
        if (currentItem !== null) {
            currentItem.previous.next = item;
            item.previous = currentItem.previous;
            item.next = currentItem;
            currentItem.previous = item;
            this.length++;
            return item;
        }

        return null; // ✅ If index is out of range, return null
    }

    // ✅ Remove at index
    removeAt(index) {
        // ✅ Handle invalid indexes
        if (index < 0 || index >= this.length) return null;

        // ✅ Remove the first node (head)
        if (index === 0) return this.shift();

        // ✅ Remove the last node (tail)
        if (index === this.length - 1) return this.pop();

        // ✅ Find the node at the given index
        let currentItem = this.get(index);

        if (currentItem !== null) {
            let previousNode = currentItem.previous;
            let nextNode = currentItem.next;

            // ✅ Remove the node by connecting previous and next nodes
            previousNode.next = nextNode;
            nextNode.previous = previousNode;

            this.length--;
            return currentItem;
        }

        return null; // Should never reach here
    }

    // ✅ Print list
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// ✅ Test Cases
const list = new DoublyLinkedList();

// ✅ Insert into an empty list
console.log("✅ Insert at index 0:", list.insertAt(0, 5)); // Expected: 5
list.print();  // Output: 5

// ✅ Push and Print
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log("\n✅ List after pushing:");
list.print();  // Output: 5 -> 1 -> 2 -> 3 -> 4

// ✅ Remove at index 2
console.log("\n✅ Remove index 2:", list.removeAt(2));  // Expected: 2
list.print();  // Output: 5 -> 1 -> 3 -> 4

// ✅ Set a new value at index 1
console.log("\n✅ Set index 1 to 100:", list.set(1, 100)); // Expected: true
list.print();  // Output: 5 -> 100 -> 3 -> 4

// ✅ Get value at index 2
console.log("\n✅ Get index 2:", list.get(2)?.value); // Expected: 3

// ✅ Insert at index 2
console.log("\n✅ Insert 200 at index 2:", list.insertAt(2, 200)); // Expected: 200
list.print();  // Output: 5 -> 100 -> 200 -> 3 -> 4

// ✅ Remove the last element
console.log("\n✅ Remove last element:", list.removeAt(list.length - 1)); // Expected: 4
list.print();  // Output: 5 -> 100 -> 200 -> 3

// ✅ Remove the first element
console.log("\n✅ Remove first element:", list.removeAt(0)); // Expected: 5
list.print();  // Output: 100 -> 200 -> 3
