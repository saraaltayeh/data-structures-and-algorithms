'use strict';
const { fizzBuzzTree } = require('./fizzBuzzTree');
const { Node, KaryTree} = require('./K-ary-tree');

let Tree = null;

let three = new Node(3);
let two = new Node(2);
let four = new Node(4);
let five = new Node(5);
let fifteen = new Node (15);
let nine=new Node (9);
let six= new Node(6);

three.child=[two,fifteen,four,five];
two.child=[nine,six];
Tree = new KaryTree(three);

console.log(Tree.root);

console.log(fizzBuzzTree(Tree));
module.exports = fizzBuzzTree;

