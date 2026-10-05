class DAryHeap {
  constructor(arity = 3, compare = (a, b) => a - b) {
    this.arity = arity;
    this.compare = compare;
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
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
      const parent = Math.floor((index - 1) / this.arity);
      if (this.compare(this.values[index], this.values[parent]) >= 0) break;
      [this.values[index], this.values[parent]] = [this.values[parent], this.values[index]];
      index = parent;
    }
  }

  sinkDown(index) {
    while (true) {
      let best = index;

      for (let i = 1; i <= this.arity; i++) {
        const child = index * this.arity + i;
        if (child < this.values.length && this.compare(this.values[child], this.values[best]) < 0) best = child;
      }

      if (best === index) break;
      [this.values[index], this.values[best]] = [this.values[best], this.values[index]];
      index = best;
    }
  }
}

module.exports = { DAryHeap };
