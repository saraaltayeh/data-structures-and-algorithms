/* eslint-disable eol-last */
'use strict';

const Stack = require('../stack/stack');

class pseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }
  enqueue(value) {
    this.inStack.push(value);
    return this.inStack.peek();
  }
  dequeue() {
    if (this.outStack.length === 0) {
      if (this.inStack.length === 0) {
        return 'Cannot dequeue because queue is empty';
      }
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }
}

module.exports = pseudoQueue;
