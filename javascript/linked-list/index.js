'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    // length
    // tail
  }
  insert(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      return this;
    }
  }

  includes(value) {

    if (!this.head) {
      return false;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;

  }

  toString() {
    let result = '';
    let currentNode = this.head;

    while (currentNode.next) {
      result = result + '{ ' + currentNode.value + ' } -> ';
      currentNode = currentNode.next;
    }

    result = result + ' NULL';

    return result;

  }

}

module.exports = LinkedList;

// const test = new LinkedList();

// test.insert('a');
// test.insert('b');

// console.log('d ->', test.includes('d'));
// console.log('b ->', test.includes('b'));

// console.log('toString ->', test.toString());
