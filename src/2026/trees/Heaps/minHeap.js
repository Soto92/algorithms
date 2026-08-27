class MinHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  extractMin() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    const min = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.values[parent] <= this.values[index]) break;
      [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
      index = parent;
    }
  }

  sinkDown(index) {
    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let smallest = index;

      if (left < this.values.length && this.values[left] < this.values[smallest]) smallest = left;
      if (right < this.values.length && this.values[right] < this.values[smallest]) smallest = right;
      if (smallest === index) break;

      [this.values[index], this.values[smallest]] = [this.values[smallest], this.values[index]];
      index = smallest;
    }
  }
}

module.exports = { MinHeap };
