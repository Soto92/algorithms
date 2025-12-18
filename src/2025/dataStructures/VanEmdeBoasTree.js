class VEBTree {
  constructor(u) {
    this.u = u;
    this.min = null;
    this.max = null;

    if (u > 2) {
      const upperU = Math.ceil(Math.sqrt(u));
      const lowerU = Math.floor(Math.sqrt(u));
      this.summary = new VEBTree(upperU);
      this.clusters = new Array(upperU)
        .fill(null)
        .map(() => new VEBTree(lowerU));
    }
  }

  high(x) {
    return Math.floor(x / Math.floor(Math.sqrt(this.u)));
  }

  low(x) {
    return x % Math.floor(Math.sqrt(this.u));
  }

  index(h, l) {
    return h * Math.floor(Math.sqrt(this.u)) + l;
  }

  insert(x) {
    if (this.min === null) {
      this.min = this.max = x;
      return;
    }

    if (x < this.min) [x, this.min] = [this.min, x];

    if (this.u > 2) {
      const h = this.high(x);
      const l = this.low(x);
      if (this.clusters[h].min === null) {
        this.summary.insert(h);
        this.clusters[h].min = this.clusters[h].max = l;
      } else {
        this.clusters[h].insert(l);
      }
    }

    if (x > this.max) this.max = x;
  }

  member(x) {
    if (x === this.min || x === this.max) return true;
    if (this.u <= 2) return false;
    return this.clusters[this.high(x)].member(this.low(x));
  }

  successor(x) {
    if (this.u <= 2) {
      if (x === 0 && this.max === 1) return 1;
      return null;
    }
    if (this.min !== null && x < this.min) return this.min;

    const h = this.high(x);
    const l = this.low(x);
    const maxLow = this.clusters[h].max;

    if (maxLow !== null && l < maxLow) {
      const offset = this.clusters[h].successor(l);
      return this.index(h, offset);
    } else {
      const succCluster = this.summary.successor(h);
      if (succCluster === null) return null;
      const offset = this.clusters[succCluster].min;
      return this.index(succCluster, offset);
    }
  }
}
