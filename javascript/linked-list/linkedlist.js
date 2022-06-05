'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail= null;
    this.length = 0;
  }
  AddToHead(value){
    this.head = new Node(value, this.head);
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  includes(value) {
    let newInclude = this.head;

    while (newInclude) {
      if (newInclude.value === value) {
        return true;
      }
      return false;
    }
  }

  toString() {
    let result = '';
    let newInclude = this.head;

    while (newInclude) {
      result = result + newInclude.value +' -> ';
      newInclude = newInclude.next;
    }
    return result;
  }
  print(){
    let newInclude = this.head;
    while (newInclude){
      console.log(newInclude.value);
      newInclude= newInclude.next;
    }
  }
}
let newLinkedList = new LinkedList();
newLinkedList.print();

module.exports = LinkedList;
