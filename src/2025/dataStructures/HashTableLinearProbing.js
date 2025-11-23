class HashTableLinearProbing {
  constructor(size = 50) {
    this.buckets = new Array(size).fill(null);
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
    let index = this.hash(key);
    while (this.buckets[index] !== null && this.buckets[index].key !== key) {
      index = (index + 1) % this.size;
    }
    this.buckets[index] = { key, value };
  }

  get(key) {
    let index = this.hash(key);
    while (this.buckets[index] !== null) {
      if (this.buckets[index].key === key) {
        return this.buckets[index].value;
      }
      index = (index + 1) % this.size;
    }
    return undefined;
  }

  delete(key) {
    let index = this.hash(key);
    while (this.buckets[index] !== null) {
      if (this.buckets[index].key === key) {
        this.buckets[index] = null;
        return true;
      }
      index = (index + 1) % this.size;
    }
    return false;
  }
}
