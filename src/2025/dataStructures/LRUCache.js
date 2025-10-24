class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      this.remove(node);
      this.add(node);
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.remove(this.map.get(key));
    }
    const newNode = { key, value };
    this.map.set(key, newNode);
    this.add(newNode);

    if (this.map.size > this.capacity) {
      const nodeToDelete = this.head.next;
      this.remove(nodeToDelete);
      this.map.delete(nodeToDelete.key);
    }
  }

  add(node) {
    const prev = this.tail.prev;
    prev.next = node;
    this.tail.prev = node;
    node.prev = prev;
    node.next = this.tail;
  }

  remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }
}
