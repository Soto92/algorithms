const BITS = 5;
const SIZE = 1 << BITS;
const MASK = SIZE - 1;

class HAMTNode {
  constructor() {
    this.bitmap = 0;
    this.children = [];
  }
}

class HAMT {
  constructor() {
    this.root = new HAMTNode();
    this.count = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }

  set(key, value) {
    const hash = this.hash(key);
    this.root = this.insert(this.root, hash, key, value, 0);
  }

  insert(node, hash, key, value, level) {
    const fragment = (hash >> level) & MASK;
    const mask = 1 << fragment;

    if (!(node.bitmap & mask)) {
      node.bitmap |= mask;
      node.children.push({ key, value });
      this.count++;
    } else {
      const index = this.popcount(node.bitmap & (mask - 1));
      const child = node.children[index];
      if (child.key === key) {
        child.value = value;
      } else {
        const newNode = new HAMTNode();
        this.insert(
          newNode,
          this.hash(child.key),
          child.key,
          child.value,
          level + BITS
        );
        this.insert(newNode, hash, key, value, level + BITS);
        node.children[index] = newNode;
      }
    }
    return node;
  }

  popcount(x) {
    x -= (x >> 1) & 0x55555555;
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = (x * 0x01010101) >> 24;
    return x;
  }
}
