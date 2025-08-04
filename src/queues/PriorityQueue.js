class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(item, priority) {
    let node = { item, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, node);
        added = true;
        break;
      }
    }
    if (!added) this.items.push(node);
  }
  dequeue() {
    return this.items.shift().item;
  }
}
