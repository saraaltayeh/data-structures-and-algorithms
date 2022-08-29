const Hashmap = require('./hashtable');
module.exports = function tree_intersection(tree1, tree2) {
  const tree11 = tree1.inOrder();
  const tree22 = tree2.inOrder();

  const myhashmap = new Hashmap(70);

  tree11.forEach((element) => {
    myhashmap.set('x', element);
  });
  tree22.forEach((element) => {
    myhashmap.set('x', element);
  });
  myhashmap.map.forEach((linkedList) => {
    console.log(linkedList.values());
  });
  return myhashmap;
};
