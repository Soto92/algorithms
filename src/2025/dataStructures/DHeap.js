class DHeap {
  constructor(d) {
    this.d = d;
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / this.d);
  }

  child(i, k) {
    return this.d * i + k;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return min;
  }

  heapify(i) {
    let smallest = i;
    for (let k = 1; k <= this.d; k++) {
      const c = this.child(i, k);
      if (c < this.heap.length && this.heap[c] < this.heap[smallest]) {
        smallest = c;
      }
    }

    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapify(smallest);
    }
  }
}
