class MultiQueue {
  constructor(n) {
    this.queues = Array.from({ length: n }, () => []);
  }
  enqueue(index, item) {
    if (index >= 0 && index < this.queues.length) {
      this.queues[index].push(item);
    }
  }
  dequeue(index) {
    if (
      index >= 0 &&
      index < this.queues.length &&
      this.queues[index].length > 0
    ) {
      return this.queues[index].shift();
    }
    return null;
  }
}
