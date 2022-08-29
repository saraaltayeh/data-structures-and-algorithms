const LinkedList = require('./linkedList');

class HashMap {
  constructor(size){
    this.size=size,
    this.map= new Array(size);

  }
  makeHash(key){
    const ASCi= key.split('').reduce((acc,cur)=>{
      return acc+cur.charCodeAt(0);
    },0);
    const ASCiPrime=ASCi*599;
    const Index=ASCiPrime%this.size;
    // console.log(Index)
    return Index;
  }
  set(key,value){
    const hash=this.makeHash(key);

    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    this.map[hash].append({ [key]: value });
  }

  get(key){
    if(! this.contains(key)){
      return null;
    }
    const hash= this.makeHash(key);
    let result=this.map[hash].head;

    // console.log(this.map,"ssssssssss")

    while(result){
    // console.log(Object.keys(result.value)[0],"ssssssss")
    // console.log(key,"sssaaaaa")
      if(Object.keys(result.value)[0]===key){
        return result.value[key];

      }
      result=result.next;
    }
    return 'no values at this key';
  }

  contains(key) {
    const hash = this.makeHash(key);
    if (this.map[hash]) {
      let currentNode = this.map[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        currentNode = currentNode.next;
      }
    } else {
      return false;
    }
  }


  keys(){
    let arr=[];
    this.map.forEach((element)=>{

      let result = element.head;

      while(result){
        arr.push(Object.keys(result.value));
        result=result.next;

      }
      // console.log(arr)


    });
    return arr;
  }


}

const hashMap1 = new HashMap(100);
const hashMap2 = new HashMap(100);


hashMap1.set('diligent', 'employed');
hashMap1.set('fond', 'enamored');
hashMap1.set('guide', 'usher');
hashMap1.set('outfit', 'garb');
hashMap1.set('wrath', 'anger');

////////////////////////////////
hashMap2.set('diligent', 'idle');
hashMap2.set('fond', 'averse');
hashMap2.set('guide', 'follow');
hashMap2.set('flow', 'jam');
hashMap2.set('wrath', 'delight');

// function leftJoin (hashMap1,hashMap2){
//     let output =[]

//     let value2
//     // let key1=hashMap1.keys()
//     // console.log(key1)
//     for(let i=0;i<hashMap1.map.length;i++){
// if(hashMap1.map[i]){
//     let key = Object.keys(hashMap1.map[i].head.value)[0];
//     console.log(hashMap1.map[i].head);
//     // // let key = hashMap1.map.get(key);
//     let value1 = Object.values(hashMap1.map[i].head.value)[0];
// // console.log(key)
// if (hashMap2.contains(key)) {
//     value2 = Object.values(hashMap2.map[i].head.value)[0];
//   } else {
//     value2 = null;
//   }
//   output.push([key, value1, value2]);
//     }
// }
// return output
// }

function leftJoin (hashMap1,hashMap2){
  let output =[];
  let value1;
  let value2;
  let key = hashMap1.keys();
  // console.log(key)

  for (let i = 0; i < key.length; i++){
    // console.log(key[i][0])
    value1 = hashMap1.get(key[i][0]);
    // console.log(value1)
    if(hashMap2.contains(key[i][0])){
      value2 = hashMap2.get(key[i][0]);
      // console.log(value2)

    }
    else {
      value2= null;
    }
    output.push([key[i][0], value1, value2]);
  }

  return output;
}


console.log(leftJoin(hashMap1,hashMap2));
module.exports ={HashMap , leftJoin };
