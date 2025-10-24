class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  insert(node) {
    this.heap.push(node);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    while (
      currentIndex > 0 &&
      this.heap[currentIndex].priority < this.heap[parentIndex].priority
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;
    let leftChildIndex = this.getLeftChildIndex(currentIndex);
    let rightChildIndex = this.getRightChildIndex(currentIndex);
    while (this.heap[leftChildIndex]) {
      let smallestChildIndex = leftChildIndex;
      if (
        this.heap[rightChildIndex] &&
        this.heap[rightChildIndex].priority < this.heap[leftChildIndex].priority
      ) {
        smallestChildIndex = rightChildIndex;
      }
      if (
        this.heap[currentIndex].priority >
        this.heap[smallestChildIndex].priority
      ) {
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
        leftChildIndex = this.getLeftChildIndex(currentIndex);
        rightChildIndex = this.getRightChildIndex(currentIndex);
      } else {
        break;
      }
    }
    return min;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = new MinHeap();
  }
  enqueue(item, priority) {
    this.heap.insert({ item, priority });
  }
  dequeue() {
    const min = this.heap.extractMin();
    return min ? min.item : null;
  }
  isEmpty() {
    return this.heap.heap.length === 0;
  }
}
