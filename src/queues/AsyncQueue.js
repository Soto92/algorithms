class AsyncQueue {
  constructor() {
    this.items = [];
    this.resolvers = [];
  }
  enqueue(item) {
    if (this.resolvers.length > 0) {
      const resolve = this.resolvers.shift();
      resolve(item);
    } else {
      this.items.push(item);
    }
  }
  dequeue() {
    if (this.items.length > 0) {
      return Promise.resolve(this.items.shift());
    }
    return new Promise((resolve) => this.resolvers.push(resolve));
  }
}
