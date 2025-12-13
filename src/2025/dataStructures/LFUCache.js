class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.minFreq = 0;
    this.cache = new Map();
    this.freqMap = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this.update(node);
    return node.value;
  }

  put(key, value) {
    if (this.capacity === 0) return;

    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.update(node);
    } else {
      if (this.size === this.capacity) {
        const minFreqList = this.freqMap.get(this.minFreq);
        const nodeToRemove = minFreqList.pop();
        this.cache.delete(nodeToRemove.key);
        this.size--;
      }

      const newNode = { key, value, freq: 1 };
      this.cache.set(key, newNode);

      if (!this.freqMap.has(1)) {
        this.freqMap.set(1, []);
      }
      this.freqMap.get(1).unshift(newNode);
      this.minFreq = 1;
      this.size++;
    }
  }

  update(node) {
    const freq = node.freq;
    const freqList = this.freqMap.get(freq);
    const index = freqList.indexOf(node);
    freqList.splice(index, 1);

    if (freqList.length === 0 && this.minFreq === freq) {
      this.minFreq++;
    }

    node.freq++;
    const newFreq = node.freq;
    if (!this.freqMap.has(newFreq)) {
      this.freqMap.set(newFreq, []);
    }
    this.freqMap.get(newFreq).unshift(node);
  }
}
