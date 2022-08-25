const Hashmap = require('./hashtable');
module.exports = function tree_intersection(tree1, tree2) {
  const tree11 = tree1.inOrder();
  const tree22 = tree2.inOrder();

  const myhashmap = new Hashmap(20);

  tree11.forEach((element) => {
    myhashmap.set('x', element);
  });
  tree22.forEach((element) => {
    myhashmap.set('x', element);
  });
  myhashmap.map.forEach((ll) => {
    console.log(ll.values());
  });
  return myhashmap;
};
