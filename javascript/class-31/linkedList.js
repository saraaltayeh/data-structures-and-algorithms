`use strict`;

const Node = require('./node');

class linkedList {
  constructor() {
    this.head = null;
    this.length = 1;
  }
  append(value) {
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

      this.length++;
      return this;
    }
  }
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  insert(value){
    const newNode=new Node (value);
    newNode.next=this.head;
    this.head=newNode;
    this.length++;

  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value)
        return true;
      current = current.next;
    }
    return false;
  }
  toString() {
    let result = '';
    let currentNode = this.head;
    while (currentNode) {
      result = `${result}${currentNode.value} =>`;
      currentNode = currentNode.next;
    }
    console.log(`${result} NULL`);
  }

}

module.exports = linkedList;
