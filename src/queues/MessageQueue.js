class MessageQueue {
  constructor() {
    this.messages = [];
  }
  send(msg) {
    this.messages.push(msg);
  }
  receive() {
    return this.messages.shift();
  }
}
