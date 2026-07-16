class LsmTree {
  constructor(memtableLimit = 4) {
    this.memtableLimit = memtableLimit;
    this.memtable = new Map();
    this.segments = [];
  }

  put(key, value) {
    this.memtable.set(key, value);
    if (this.memtable.size >= this.memtableLimit) {
      this.flush();
    }
  }

  get(key) {
    if (this.memtable.has(key)) return this.memtable.get(key);

    for (let i = this.segments.length - 1; i >= 0; i--) {
      if (this.segments[i].has(key)) return this.segments[i].get(key);
    }

    return null;
  }

  flush() {
    const segment = new Map([...this.memtable.entries()].sort(([a], [b]) => (a > b ? 1 : -1)));
    this.segments.push(segment);
    this.memtable.clear();
  }

  compact() {
    const merged = new Map();

    for (const segment of this.segments) {
      for (const [key, value] of segment) {
        merged.set(key, value);
      }
    }

    this.segments = [new Map([...merged.entries()].sort(([a], [b]) => (a > b ? 1 : -1)))];
  }
}

module.exports = { LsmTree };
