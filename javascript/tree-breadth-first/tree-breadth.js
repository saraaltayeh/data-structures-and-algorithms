'use strict';

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  breadthFirst() {
    if (this.root === null)
      return 'Empty tree!';
    let arr = [];
    let result = [];
    result.push(this.root);
    while (result.length) {
      let node = result.shift();
      arr.push(node.value);
      if (node.left) {
        result.push(node.left);
      }
      if (node.right) {
        result.push(node.right);
      }
    }
    return arr;
  }
}
module.exports = BinaryTree;
