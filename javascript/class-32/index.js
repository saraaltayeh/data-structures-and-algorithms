const BinaryTree = require('./binarytree');
const Node = require('./node');

const tree_intersection = require('./tree_intersection');
let one = new Node(35);
let two = new Node(71);
let three = new Node(50);
let four = new Node(29);
let five = new Node(61);


one.left = two;
one.right = three;
two.left = four;
two.right = five;
let tree1 = new BinaryTree(one);
let tree2 = new BinaryTree(one);

tree_intersection(tree1, tree2);
