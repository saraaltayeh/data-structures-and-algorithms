'use strict';

class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  preOrder() {
    let arr = [];
    let reverse = (node) => {
      arr.push(node.value);

      if (node.left) reverse(node.left);
      if (node.right) reverse(node.right);
    };
    reverse(this.root);
    return arr;
  }

  inOrder() {
    let arr = [];
    let reverse = (node) => {
      if (node.left) reverse(node.left);
      arr.push(node.value);
      // console.log("bt",node.value);
      if (node.right) reverse(node.right);
    };
    reverse(this.root);
    // console.log({arr});
    return arr;
  }
  postOrder() {
    let arr = [];
    let reverse = (node) => {
      if (node.left) reverse(node.left);

      if (node.right) reverse(node.right);
      arr.push(node.value);
    };
    reverse(this.root);
    return arr;
  }
  compareFiles(tree1, tree2) {
    let count = 0;
    let count1 = 0;
    let value = '';
    let reverse = (node) => {
      if (node.left) {
        value = String(node.left.value);
        if (value.includes('.')) count++;
        reverse(node.left);
      }

      if (node.right) {
        value = String(node.left.value);
        if (value.includes('.')) count++;
        reverse(node.right);
      }
      value = String(node.value);
      if (value.includes('.')) count++;
    };
    reverse(tree1.root);
    count1 = count;
    reverse(tree2.root);
    if (count === count1) return true;
    else return false;
  }
}
module.exports = BinaryTree;
