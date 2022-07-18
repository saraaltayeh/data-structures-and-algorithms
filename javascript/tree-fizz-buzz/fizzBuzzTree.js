'use strict';
function fizzBuzzTree(KTree) {
  let arr = [];
  arr.push(KTree.root);
  while (arr.length) {
    let item = arr.pop();
    if (item.value % 5 === 0 && item.value % 3 === 0) {
      item.value = 'FizzBuzz';
    } else if (item.value % 3 === 0) {
      item.value = 'Fizz';
    } else if (item.value % 5 === 0) {
      item.value = 'Buzz';
    } else {
      item.value = item.value.toString();
    }

    for (const x of item.child) {
      arr.push(x);
    }
  }
  return KTree.root;
}
exports.fizzBuzzTree = fizzBuzzTree;
