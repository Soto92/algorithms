class BloomFilter {
  constructor(size = 100) {
    this.size = size;
    this.storage = new Array(size).fill(false);
  }

  hash1(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 1)) % this.size;
    }
    return hash;
  }

  hash2(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 2)) % this.size;
    }
    return hash;
  }

  hash3(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * (i + 3)) % this.size;
    }
    return hash;
  }

  add(item) {
    this.storage[this.hash1(item)] = true;
    this.storage[this.hash2(item)] = true;
    this.storage[this.hash3(item)] = true;
  }

  contains(item) {
    return (
      this.storage[this.hash1(item)] &&
      this.storage[this.hash2(item)] &&
      this.storage[this.hash3(item)]
    );
  }
}
