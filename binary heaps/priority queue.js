// Priority Queue using Min Binary Heap
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = []; // Store Node instances
    }

    // Enqueue a new element with a priority
    enqueue(value, priority) {
        let current=new Node(value,priority);
        this.values.push(current);

        let childIndex=this.values.length-1;

        while(childIndex>0){
            let parentIndex=Math.floor((childIndex-1)/2);

            if(this.values[parentIndex].priority>this.values[childIndex].priority){
                this.swap(parentIndex,childIndex);
                childIndex=parentIndex;
            }
            else{
                break;
            }
        }

        return this.values;

    }

    // Dequeue the element with the highest priority (lowest number)
    dequeue() {


        if(this.values.length===0){
            return null;
        }
        if(this.values.length===1){
            return this.values.pop();
        }
        let min=this.values[0];

        let current=this.values.pop();
        this.values[0]=current;

        let parentIndex=0;

        while(parentIndex<this.values.length){
            let leftChildIndex= (2*parentIndex)+1;
            let rightChildIndex=(2*parentIndex)+2;
            let leftChild=this.values[leftChildIndex]?.priority;
            let rightChild=this.values[rightChildIndex]?.priority;

            let selectedIndex;

            if(leftChild!==undefined && rightChild!==undefined){
                if(leftChild<rightChild){
                    selectedIndex=leftChildIndex;
                }else{
                    selectedIndex=rightChildIndex;
                }
            }else if(leftChild!==undefined){
                selectedIndex=leftChildIndex;
            }else if(rightChild!==undefined){
                selectedIndex=rightChildIndex;
            }else{
                break;
            }

            if(this.values[selectedIndex].priority<this.values[parentIndex].priority){
                this.swap(selectedIndex,parentIndex);
                parentIndex=selectedIndex;
            }else{
                break;
            }


        }
        return min;




    }

    // Swap helper
    swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue("wash dishes", 3);
pq.enqueue("do homework", 1);
pq.enqueue("eat lunch", 2);

console.log(pq.dequeue()); // Should return the task with priority 1
console.log(pq.values); // Should reflect heap after dequeue