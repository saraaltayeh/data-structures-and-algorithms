'use strict';
const Node = require('./node');

class Queue {
  constructor(front, rear) {
    this.front = front;
    this.rear = rear;
    this.length = 0;
  }
  isEmpty() {
    if (this.front === null || this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length += 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length += 1;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'the Queue is empty';
    }
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.length -= 1;

    return temp.value;
  }
  peek() {
    if (this.isEmpty()) {
      return 'No Nodes the Queue is empty';
    }
    return this.front.value;
  }
}
module.exports = Queue;
