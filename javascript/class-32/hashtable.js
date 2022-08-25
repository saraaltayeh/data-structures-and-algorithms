'use strict';

const LinkedList = require('./linked-list');
class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  ////////////get/////////////
  get(key) {
    const index = this.makeHash(key);

    let value =null;
    if(this.map[index].head){

      let currentNode = this.map[index].head;

      while (currentNode ) {
        if(currentNode.value[key])
          value = currentNode.value[key];
        currentNode = currentNode.next;
      }
    }
    return value;
  }
  ///////////////contain////////////////
  contain(key) {
    const index = this.makeHash(key);
    let isHere = false;

    if (this.map[index]) {
      let currentNode = this.map[index].head;

      while (currentNode) {
        if (Object.keys(currentNode.value) === key) isHere = true;
        currentNode = currentNode.next;
      }
    }
    return isHere;
  }
  ////////////keys//////////////
  keys(){
    let keys=[];
    this.map.forEach((element)=>{
      let currentNode = element.head;
      while (currentNode) {

        keys.push(Object.keys(currentNode.value));
        currentNode=currentNode.next;
      }
    });


    return keys;
  }

  makeHash(key) {
    const asciicodeSum = key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);
    const multiPrime = asciicodeSum * 599;
    const theIndex = multiPrime % this.size;
    // console.log(theIndex)
    return theIndex;
  }
  set(key, value) {
    const hash = this.makeHash(key);
    // 11 >>> [{'esam', '401d15 student'}>{}]
    // 11
    // 3 >> [{}>{}]
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    this.map[hash].append({ [key]: value });
  }
}


const myhashmap = new Hashmap(10);
myhashmap.set('ayman', '01');
myhashmap.set('samah', '02');
myhashmap.set('sarah', '03');
myhashmap.set('yara', '04');
myhashmap.set('elyan', '05');
myhashmap.set('tamara', '06');
myhashmap.set('ayman', '01');
// myhashmap.map.forEach((ll) => {
//   console.log(ll.values());
// })


// console.log(myhashmap.get("elyan"));
// console.log(myhashmap.contain("samah"));
// console.log(myhashmap.keys());

module.exports = Hashmap;
