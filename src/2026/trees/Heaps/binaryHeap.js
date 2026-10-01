class BinaryHeap {
  constructor(compare = (a, b) => a - b) {
    this.values = [];
    this.compare = compare;
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  peek() {
    return this.values[0] ?? null;
  }

  extract() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();
    const root = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return root;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.compare(this.values[index], this.values[parent]) >= 0) break;
      [this.values[index], this.values[parent]] = [this.values[parent], this.values[index]];
      index = parent;
    }
  }

  sinkDown(index) {
    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let best = index;

      if (left < this.values.length && this.compare(this.values[left], this.values[best]) < 0) best = left;
      if (right < this.values.length && this.compare(this.values[right], this.values[best]) < 0) best = right;
      if (best === index) break;

      [this.values[index], this.values[best]] = [this.values[best], this.values[index]];
      index = best;
    }
  }
}

module.exports = { BinaryHeap };
