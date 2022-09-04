'use strict';
const Node = require('./node');

class Linkedlist {
  constructor() {
    this.head = null;
  }

  //append//
  append(new_data) {
    let newNode = new Node(new_data);

    if (this.head === null) {
      this.head = new Node(new_data);
      return;
    }
    newNode.next = null;

    var last = this.head;
    while (last.next !== null) last = last.next;

    last.next = newNode;
    return;
  }

  ////////insert after//////////
  insertAfter(value, newVal) {
    let current = this.head; // Initialize current
    while (current !== null) {
      if (current.value === value) {
        break;
      }
      current = current.next;
    }
    if (current) {
      let after = current.next;
      let new_node = new Node(newVal);

      current.next = new_node;
      new_node.next = after;
    } else {
      return 'no value' + value;
    }
  }
  //////////insert befor////////////
  inserBefor(value, newVal) {
    let current = this.head;
    let befor = null;

    while (current !== null) {
      if (current.value === value) {
        break;
      }

      befor = current;
      current = current.next;
    }

    let new_node = new Node(newVal);

    if (befor !== null) {
      if(befor.next !== null)
      {befor.next = new_node;
        new_node.next = current;}

    }

    else {

      new_node.next = current;
      this.head = new_node;
    }

  }
  ///////////////to string///////////////
  toString() {
    let currentNode = this.head;
    console.log({currentNode});
    let str = '';
    while (currentNode) {
      str += `{${currentNode.value}} -> `;
      if (!currentNode.next) str += 'NULL';
      currentNode = currentNode.next;
    }
    return str;
  }
}

module.exports = Linkedlist;
