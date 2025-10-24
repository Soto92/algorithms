class FenwickTree {
  constructor(size) {
    this.tree = new Array(size + 1).fill(0);
  }

  update(index, delta) {
    index++;
    while (index < this.tree.length) {
      this.tree[index] += delta;
      index += index & -index;
    }
  }

  query(index) {
    index++;
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }
    return sum;
  }

  rangeSum(start, end) {
    return this.query(end) - this.query(start - 1);
  }
}
