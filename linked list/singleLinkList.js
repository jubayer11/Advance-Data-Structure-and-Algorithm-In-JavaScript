class Node {
    value = null;
    next = null;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkList {

    constructor() {
        this.head = null;
    }

    insert(item) {
        //check head is null or not
        //if null then add head.next=value;
        //if not then   value.next=head.next and head.next is value;
        if (this.head === null) {
            this.head = item;

        } else {
            item.next = this.head;
            this.head = item;

        }
    }

    remove(item) {
        // assign head to temp
        // have a variable name previous
        //loop will go untill teamp reaches item
        //inside loop temp will have previous will have temp value
        //temp will have temp.next

        if (this.head === null) {
            return;
        }
        if (this.head.value === item.value) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        let previous = null;
        while (temp !== null) {
            if (temp.value === item.value) {
                previous.next = temp.next;
                return;
            } else {
                previous = temp;
                temp = temp.next;
            }

        }


    }

    search(item) {

        //check if head null then return false
        //else if head.value===value return true
        //on else take a temp variable
        //temp shol
        if (this.head === null) {
            return false;
        }

        let temp = this.head;

        while (temp !== null) {
            if (temp.value === item) {
                return true;
            } else {
                temp = temp.next;
            }
        }
        return false;


    }
}

const p = new Node(4);
console.log(p);