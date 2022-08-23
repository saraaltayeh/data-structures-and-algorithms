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
    return Index;
  }
  set(key,value){
    const hash = this.makeHash(key);
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

    while(result){
      if(Object.keys(result.value)[0]===key){
        return result.value[key];

      }
      result=result.next;
    }
    return 'no values at this key';

  }
  contains(key){
    const hash=this.makeHash(key);
    if(this.map[hash]){
      return true;
    }
    else{
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

    });
    return arr;
  }
}

function repeatedWord (str) {
  if (!str) {
    return 'Not string';
  }
  const hashMap = new HashMap(120);
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (hashMap.contains(words[i])) {
      return words[i];
    } else {
      hashMap.set(words[i], words[i]);
    }
  }
  return 'No Repetition';
}

console.log(repeatedWord('Once upon a time, there was a brave princess who...'));
console.log(repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'));
console.log(repeatedWord('It was a queer, summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'));
console.log(repeatedWord('Once upon a time'));


module.exports ={HashMap,repeatedWord};
