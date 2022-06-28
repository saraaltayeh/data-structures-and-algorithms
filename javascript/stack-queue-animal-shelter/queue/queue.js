'use strict';

const Node = require('./node');

class animalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  isEmpty() {
    return this.front === null;
  }
  enqueue(animal) {
    if (animal === 'cat' || animal === 'dog') {
      const node = new Node(animal);
      if (this.isEmpty()) {
        this.front = node;
        this.rear = node;
        this.length++;
      } else {
        this.rear.next = node;
        this.rear = node;
        this.length++;
      }
    }
  }
  dequeue(pref) {
    if (this.isEmpty()) {
      return null;
    }
    else if (pref === 'cat' || pref === 'dog') {
      const tempNode = this.front;
      this.front = this.front.next;
      tempNode.next = null;
      this.length--;
      return tempNode.value;
    }
    return null;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }
}
module.exports = animalShelter;
