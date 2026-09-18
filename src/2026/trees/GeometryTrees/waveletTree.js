class WaveletTree {
  constructor(values = [], low = null, high = null) {
    this.low = low ?? Math.min(...values);
    this.high = high ?? Math.max(...values);
    this.mapLeft = [0];
    this.left = null;
    this.right = null;

    if (!values.length || this.low === this.high) return;

    const middle = Math.floor((this.low + this.high) / 2);
    const leftValues = [];
    const rightValues = [];

    for (const value of values) {
      if (value <= middle) leftValues.push(value);
      else rightValues.push(value);
      this.mapLeft.push(leftValues.length);
    }

    if (leftValues.length) this.left = new WaveletTree(leftValues, this.low, middle);
    if (rightValues.length) this.right = new WaveletTree(rightValues, middle + 1, this.high);
  }

  kth(left, right, k) {
    if (this.low === this.high) return this.low;

    const inLeft = this.mapLeft[right + 1] - this.mapLeft[left];
    if (k <= inLeft) {
      return this.left.kth(this.mapLeft[left], this.mapLeft[right + 1] - 1, k);
    }

    return this.right.kth(left - this.mapLeft[left], right + 1 - this.mapLeft[right + 1] - 1, k - inLeft);
  }

  countLessOrEqual(left, right, value) {
    if (left > right || value < this.low) return 0;
    if (this.high <= value) return right - left + 1;

    const leftCount = this.left ? this.left.countLessOrEqual(this.mapLeft[left], this.mapLeft[right + 1] - 1, value) : 0;
    const rightCount = this.right ? this.right.countLessOrEqual(left - this.mapLeft[left], right + 1 - this.mapLeft[right + 1] - 1, value) : 0;
    return leftCount + rightCount;
  }
}

module.exports = { WaveletTree };
