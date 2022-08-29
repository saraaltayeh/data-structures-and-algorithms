'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
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
  tostring() {
    let currentNode = this.head;
    let str = '';
    while (currentNode) {
      str += `{${currentNode.value}}->`;
      currentNode = currentNode.next;
    }
    return str + 'NULL';
  }

  deleteMiddle() {
    let mid = Math.floor(this.length / 2);
    let current = this.head;
    let count = 0;
    while (current) {
      if (mid === count) {
        current.value = current.next.value;
        current.next = current.next.next;
      }
      count++;
      current = current.next;
    }
    return this;
  }
  middleNode() {
    let current = this.head;
    let mid = Math.floor(this.length / 2);
    let count = 0;
    while (current) {
      if (count === mid) {
        return current.value;
      }
      count++;
      current = current.next;
    }
  }
  removeDuplicate() {
    if (this.head) {
      let current = this.head;
      while (current.next !== null) {
        if (current.value === current.next.value)
          current.next = current.next.next;

        else
          current = current.next;
      }
    }
    return this;
  }
  // reverse(arr){
  //   let result =[];
  //   while(arr.length){
  //   result.push(arr.pop())
  //   }
  //   return result;
  // }
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }

  isplindrome() {
    let curr = this.head;
    let stack = [];
    while (curr) {
      stack.push(curr.value);
      curr = curr.next;
    }
    curr = this.head;

    while (curr) {
      const t = stack.pop();
      if (t !== curr.value) {
        return false;
      }
      curr = curr.next;
    }
    return true;

  }
  zipll(list1, list2){
    let current1 = list1.head;

    while(current1.next !== null){
      current1 = current1.next;

    }

    current1.next = list2.head;

    return list1;
  }
  findlist(num){
    let current = this.head;
    while(current){
      if(current.value === num){
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
// module.exports = LinkedList;

const l1 = new LinkedList();
// const l2 = new LinkedList();
l1.append(1);
l1.append(2);
l1.append(2);
l1.append(1);
// l1.append(4);
// l1.append(6);


// console.log((l1.deleteMiddle()).tostring());
// l1.deleteMiddle()
// console.log(l1.middleNode());
// l1.middleNode()
// console.log(l1.reverse());

console.log((l1.reverse(l1)).tostring());
// console.log(l1.removeDuplicate().tostring());

console.log('is Palindrom: ', (l1.isplindrome()));
