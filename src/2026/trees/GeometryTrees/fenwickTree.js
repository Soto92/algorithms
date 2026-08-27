class FenwickTree {
  constructor(sizeOrValues) {
    const values = Array.isArray(sizeOrValues) ? sizeOrValues : [];
    this.size = Array.isArray(sizeOrValues) ? values.length : sizeOrValues;
    this.tree = Array(this.size + 1).fill(0);
    for (let index = 0; index < values.length; index++) this.add(index, values[index]);
  }

  add(index, delta) {
    for (let i = index + 1; i <= this.size; i += i & -i) {
      this.tree[i] += delta;
    }
  }

  prefixSum(index) {
    let sum = 0;
    for (let i = index + 1; i > 0; i -= i & -i) {
      sum += this.tree[i];
    }
    return sum;
  }

  rangeSum(left, right) {
    return this.prefixSum(right) - this.prefixSum(left - 1);
  }
}

module.exports = { FenwickTree };
