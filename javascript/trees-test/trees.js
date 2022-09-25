class Node {
  data= null;
  left= null;
  right= null;
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  isLeaf() {
    return !this.left && !this.right;
  }
  insertLeft(newNode) {
    if(!this.left){
      this.left = newNode;
    } else {
      const temp = this.left;
      this.left = newNode;
      newNode.left = temp;
    }
  }

  insertRight(newNode){
    if(!this.right){
      this.right = newNode;
    }
    else{
      const temp = this.right;
      this.right = newNode;
      newNode.right= temp
    }
  }
  insertRootR(newNode){
   if(!this.right){
      this.right = newNode;
    }
    else{
      let temp = this.right;
      this.right= newNode;
      newNode.right = temp
    }
  }
  }

//  let sum = 0;
// function sumleftLeafs(node){
//   let data= node.data

// if (node === null) return null

// if(!node.right && !node.left){
//   sum+= data
// }
// // if(node.right){
// //   sumleftLeafs(node.right)
// // }
// if(node.left){
//   sumleftLeafs(node.left)
// }
// return sum
// }

// function isBST(root){
//   if(!root ) return null
// let result = false


//   if (node.right > node && node.right !== null){
//     result = true
//     }
//   if (node.left > root && node.right < root){
//     result = true
//     }
//         if(node.right){
//     isBST(node.right)
//   }
//   if(node.left){
//     isBST(node.left)

// }
//   return result
//   traverse(root)
// }
// isBST(node)


function isBST (node, min =Number.MIN_SAFE_INTEGER, max= Number.MAX_SAFE_INTEGER) {

  if (!node) return true; // A

  if (node.data <= min || node.data >= max) { // B
    return false; // C
  }
  return isBST(node.left, min, node.data) &&  isBST(node.right, node.data, max);  //D
};



  let max =0;
function findMax(node){

  if(node === null){
    return null
  }
  if (node.data > max) {
   max = node.data
  }
  if(node.left){
  findMax(node.left)
  }
   if(node.right){
  findMax(node.right)
   }
  return max
}

  let result =Number.MAX_SAFE_INTEGER;
function findMax(node){

  if(node === null){
    return null
  }
  if (node.data < result) {
   result = node.data
  }
  if(node.left){
  findMax(node.left)
  }
   if(node.right){
  findMax(node.right)
   }
  return result
}

function mergeTree(t1,t2){
  if( t1 === null || t2 === null) return null;
  //console.log({t1}, '777');
  //  console.log({t2}, '888')

  let root = new Node((t1? t1.data: 0 )+ (t2 ? t2.data : 0))
  root.left = mergeTree(t1? t1.left : null, t2? t2.left : null)
  root.right= mergeTree(t1? t1.right : null, t2 ? t2.right : null)
  return root

}
   let sum = 0
function summation(node){
  if(!node) return null
   sum += node.data
   if(node.right){
    summation(node.right)
   }
   if(node.left){
    summation(node.left)
   }
  return sum
}



function sumPath(node, sum){ //A
  let res = [] // B
  helper(node, sum, [], res) //C
  return res //D

  function helper(node, sum, now, res){ // E
    if (!node) return null //F
    now.push(node.data) //G

    if(node.data === sum && !node.right && !node.left) res.push(now) //H
    helper(node.right , sum - node.data , Array.from(now), res) // I
    helper(node.left , sum - node.data , Array.from(now), res) // J
  }
}



// function isSametree(p,q){
//   if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
//   if (p && q) return isSametree(p.left, q.left) && isSametree(p.right, q.right);
//   return true;
// }

//  root1 = new Node(1);
//     root1.left = new Node(2);
//     root1.right = new Node(3);
//     root1.left.left = new Node(4);
//     root1.left.right = new Node(5);

//     root2 = new Node(1);
//     root2.left = new Node(8);
//     root2.right = new Node(3);
//     root2.left.left = new Node(4);
//     root2.left.right = new Node(5);

const node = new Node(20);

const node1= new Node(15);
node.left = node1;

const node2 = new Node(25);
node.right = node2;

const node3 = new Node(19);
node1.right = node3;

const node4 = new Node(10);
node1.left = node4;

const Tnode = new Node(20);

const Tnode1= new Node(15);
Tnode.left = Tnode1;

const Tnode2 = new Node(25);
Tnode.right = Tnode2;

const Tnode3 = new Node(19);
Tnode1.right = Tnode3;

const Tnode4 = new Node(10);
Tnode1.left = Tnode4;
// const node5 = new Node(17);
// node1.right = node5;

// const node6 = new Node(12);
// node1.left = node6;

// console.log(JSON.stringify(mergeTree(node, Tnode)));
// console.log(summation(node));
console.log(sumPath(node,45));
