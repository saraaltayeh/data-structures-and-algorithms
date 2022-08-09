'use strict';

const BinaryTree = require('./tree-breadth');
const Node = require('./node');

let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);

// function breadthFirst(Tree) {
//   if (Tree.root === null)
//     return 'Empty tree!';
//   let arr = [];
//   let result = [];
//   result.push(Tree.root);
//   while (result.length) {
//     let node = result.shift();
//     arr.push(node.value);
//     if (node.left) {
//       result.push(node.left);
//     }
//     if (node.right) {
//       result.push(node.right);
//     }
//   }
//   return arr;
// }

// console.log(breadthFirst(tree));

function sumOfAllOdd(BT) {
  if (BT.root){
    return 'empty BT';
  }

  function _sumOdd(node, sum = 0) {
    if (node === null) {
      return 0;
    } else {
      if (node.value % 2 !== 0) {
        sum += node.value;
      }
    }
    return sum + _sumOdd(node.left) + _sumOdd(node.right);
  }
  return _sumOdd(BT.root);
}

console.log(sumOfAllOdd(tree));
