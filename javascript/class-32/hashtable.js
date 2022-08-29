'use strict';

const LinkedList = require('./linked-list');
class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

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
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    this.map[hash].append({ [key]: value });
  }
}

const myhashmap = new Hashmap(10);
myhashmap.set('sara', '01');
myhashmap.set('rana', '02');
myhashmap.set('hamza', '03');
myhashmap.set('khalil', '04');
myhashmap.set('layan', '05');
myhashmap.set('ihab', '06');
myhashmap.set('sanad', '07');
// myhashmap.map.forEach((ll) => {
//   console.log(ll.values());
// })

// console.log(myhashmap.get("sara"));
// console.log(myhashmap.contain("ihab"));
// console.log(myhashmap.keys());

module.exports = Hashmap;
