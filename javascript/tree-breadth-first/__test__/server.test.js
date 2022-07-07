'use strict';
const TreeBreadth = require('../tree-breadth');
const Node = require('../node');

describe('Tree breadth', () => {
  let tree = null;
  beforeAll(() => {
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

    tree = new TreeBreadth(one);
  });
  test('tree-breadth-first', () => {
    expect(tree.breadthFirst()).toStrictEqual([1, 2, 3, 6, 4, 5, 7, 8, 9]);
  });
  test('return empty tree', () => {
    const newTree = new TreeBreadth();
    expect(newTree.breadthFirst()).toEqual('Empty tree!');
  });
});
