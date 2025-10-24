class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket) {
      return bucket.find((item) => item[0] === key)?.[1];
    }
    return undefined;
  }
}
