// Max Binary Heap class
class MaxBinaryHeap {
    constructor() {
        this.values = []; // Store heap as array
    }

    // Insert method (you implement this)
    insert(value) {
        this.values.push(value); // 🛠️ Important: must push first

        let currentIndex = this.values.length - 1;

        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.values[parentIndex] < this.values[currentIndex]) {
                this.swap(parentIndex, currentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }

        return this.values; // Optional, nice to have
    }

    extractMax(){
        if(this.values.length===0){
            return null;
        }
        if(this.values.length===1){
            return this.values.pop();
        }
        let max=this.values[0];
        let currentValue=this.values.pop();
        this.values[0]=currentValue;


        let parentIndex=0;



        while(parentIndex<this.values.length){

            let leftChildIndex= (2*parentIndex)+1;
            let rightChildIndex=(2*parentIndex)+2;

            let leftChild=this.values[leftChildIndex];
            let rightChild=this.values[rightChildIndex];
            let currentParent=this.values[parentIndex];

            let selectedIndex;


            if(leftChildIndex<this.values.length && rightChildIndex<this.values.length){
                if(leftChild>rightChild){
                    selectedIndex=leftChildIndex;
                }else{
                    selectedIndex=rightChildIndex;
                }
            }else if(leftChildIndex<this.values.length){
                selectedIndex=leftChildIndex;
            }else if(rightChildIndex<this.values.length){
                selectedIndex=rightChildIndex;
            }else{
                break;
            }

            if(currentParent<this.values[selectedIndex]){
                this.swap(parentIndex,selectedIndex);
                parentIndex=selectedIndex;
            }else{
                break;
            }
        }
        return max;


    }




    // Optional helper method to swap values
    swap(i, j) {
        [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
    }
}

// Example usage:
const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(50);
heap.insert(35);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap.values); // should reflect valid max-heap structure