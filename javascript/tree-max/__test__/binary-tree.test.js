'use strict';
const {BinaryTree, BinarySearchTree} = require('../binary-tree');
const Node = require('../node');

let tree = null;

describe('Binary Tree', () => {
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

    tree = new BinaryTree(one);
  });

  test('constructor', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });
  test('preOrder', () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });
  test('inOrder', () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOutput);
  });
  test('postOrder', () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder= tree.postOrder();
    expect(postOrder).toEqual(expectedOutput);
  });
  test('Binary Search', () => {
    const BTS = new BinarySearchTree();
    BTS.add(10);
    BTS.add(11);
    BTS.add(5);
    BTS.add(13);
    BTS.add(13);
    BTS.add(6);
    BTS.add(15);
    expect(BTS.contains(6)).toBeTruthy();
    expect(BTS.contains(15)).toBeTruthy();
    expect(BTS.contains(20)).toBeFalsy();
  });
  test('max value in a tree', () => {
    const BTS = new BinarySearchTree();
    BTS.add(10);
    BTS.add(11);
    BTS.add(5);
    BTS.add(12);
    BTS.add(13);
    BTS.add(6);
    BTS.add(15);
    // eslint-disable-next-line new-cap
    expect(BTS.Max()).toEqual(15);
  });
});
