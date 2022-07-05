'use strict';
const Node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  //root - left - right
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // left - root - right
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  //left - right - root
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  Max() {
    let max = 0;
    let traverse = (node) => {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return max;
  }
}
class BinarySearchTree extends BinaryTree {

  add(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current) {
        if (value === current.value) return undefined;
        if (value < current.value) {

          if (current.left === null) {
            current.left = newNode;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;

          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(value) {
    let found = false;
    let current = this.root;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;

      } else if (value > current.value) {
        current = current.right;

      } else {
        found = true;
      }
    }
    return found;
  }
}
module.exports = {BinaryTree, BinarySearchTree};
