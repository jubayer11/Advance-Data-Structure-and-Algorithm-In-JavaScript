// Min Binary Heap class
class MinBinaryHeap {
  constructor() {
    this.values = []; // Store heap as array
  }

  insert(value) {
    this.values.push(value);
    let currentIndex = this.values.length - 1;

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.values[parentIndex] > this.values[currentIndex]) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }

    return this.values;
  }

  extractMin() {
    if (this.values.length === 0) {
      return null;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }

    let min = this.values[0];
    let currentValue = this.values.pop();
    this.values[0] = currentValue;

    let parentIndex = 0;

    while (parentIndex < this.values.length) {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;

      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];
      let currentParent = this.values[parentIndex];

      let selectedIndex;

      if (
          leftChildIndex < this.values.length &&
          rightChildIndex < this.values.length
      ) {
        if (leftChild < rightChild) {
          selectedIndex = leftChildIndex;
        } else {
          selectedIndex = rightChildIndex;
        }
      } else if (leftChildIndex < this.values.length) {
        selectedIndex = leftChildIndex;
      } else if (rightChildIndex < this.values.length) {
        selectedIndex = rightChildIndex;
      } else {
        break;
      }

      if (currentParent > this.values[selectedIndex]) {
        this.swap(parentIndex, selectedIndex);
        parentIndex = selectedIndex;
      } else {
        break;
      }
    }

    return min;
  }

  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }
}

// Example usage:
const minHeap = new MinBinaryHeap();
minHeap.insert(41);
minHeap.insert(39);
minHeap.insert(33);
minHeap.insert(18);
minHeap.insert(27);
minHeap.insert(12);
minHeap.insert(5);
minHeap.insert(35);

console.log(minHeap.extractMin());
console.log(minHeap.extractMin());
console.log(minHeap.extractMin());
console.log(minHeap.values);