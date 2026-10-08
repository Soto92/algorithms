class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    const max = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return max;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.values[parent] >= this.values[index]) break;
      [this.values[parent], this.values[index]] = [this.values[index], this.values[parent]];
      index = parent;
    }
  }

  sinkDown(index) {
    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let largest = index;

      if (left < this.values.length && this.values[left] > this.values[largest]) largest = left;
      if (right < this.values.length && this.values[right] > this.values[largest]) largest = right;
      if (largest === index) break;

      [this.values[index], this.values[largest]] = [this.values[largest], this.values[index]];
      index = largest;
    }
  }
}

module.exports = { MaxHeap };
