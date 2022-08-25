const BinaryTree = require('./binarytree');
const Node = require('./node');
// const Hashmap = require('./hashtable');
const tree_intersection = require('./tree_intersection');
let one = new Node(30);
let two = new Node(21);
let three = new Node(40);
let four = new Node(49);
let five = new Node(51);


one.left = two;
one.right = three;
two.left = four;
two.right = five;
let tree1 = new BinaryTree(one);
let tree2 = new BinaryTree(one);

tree_intersection(tree1, tree2);
