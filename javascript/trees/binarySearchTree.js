'use strict';

const BinaryTree = require('./binary-tree');
const Node = require('./node');
class BinarySearchTree extends BinaryTree {

  // add(value){
  //   var newNode = new Node(value);
  //   // root is null then node wil be added and made it root

  //     if(this.root === null)
  //        {
  //         return this.root = newNode;
  //     }

  //     let current = this.root;
  //     const nLoop = true;
  //     while (nLoop) {
  //       if (value === current.value) return undefined;
  //       if (value < current.value) {
  //         if (!current.left) {
  //           current.left = newNode;
  //           return this;
  //         }
  //         current = current.left;
  //       } else {
  //         if (!current.right) {
  //           current.right = newNode;
  //           return this;
  //         }
  //         current = current.right;
  //       }
  //     }
  //   }

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

    //  there is a node to search
    while (!found && current) {
      // if the value is less than the current value go left
      if (value < current.value) {
        current = current.left;

        // if the value is greater than the current value go right
      } else if (value > current.value) {
        current = current.right;

        // eslint-disable-next-line no-irregular-whitespace
        // value ​​is equal, found it
      } else {
        found = true;
      }
    }
    return found;
  }
}

module.exports = BinarySearchTree;
