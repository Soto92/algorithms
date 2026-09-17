class WaveletMatrix {
  constructor(values = [], maxBits = 32) {
    this.maxBits = maxBits;
    this.bitVectors = [];
    this.zeroCounts = [];
    let current = [...values];

    for (let bit = maxBits - 1; bit >= 0; bit--) {
      const zeros = [];
      const ones = [];
      const prefix = [0];

      for (const value of current) {
        const isOne = (value >> bit) & 1;
        prefix.push(prefix[prefix.length - 1] + isOne);
        if (isOne) ones.push(value);
        else zeros.push(value);
      }

      this.bitVectors.push(prefix);
      this.zeroCounts.push(zeros.length);
      current = zeros.concat(ones);
    }
  }

  rankOne(level, index) {
    return this.bitVectors[level][index];
  }

  access(index) {
    let value = 0;

    for (let level = 0; level < this.maxBits; level++) {
      const bit = this.rankOne(level, index + 1) - this.rankOne(level, index);
      if (bit) {
        value |= 1 << (this.maxBits - level - 1);
        index = this.zeroCounts[level] + this.rankOne(level, index);
      } else {
        index -= this.rankOne(level, index);
      }
    }

    return value;
  }
}

module.exports = { WaveletMatrix };
