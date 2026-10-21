class FingerTree {
  constructor(values = []) {
    this.values = values;
  }

  prepend(value) {
    return new FingerTree([value, ...this.values]);
  }

  append(value) {
    return new FingerTree([...this.values, value]);
  }

  concat(other) {
    return new FingerTree([...this.values, ...other.values]);
  }

  get(index) {
    return this.values[index] ?? null;
  }
}

module.exports = { FingerTree };
