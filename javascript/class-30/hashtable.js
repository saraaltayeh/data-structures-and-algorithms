const LinkedList = require('./linkedLIst');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    const hashKey = key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);
    const multiPrime = hashKey * 599;
    const hashedKey = multiPrime % this.size;
    return hashedKey;
  }
  set(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }
    this.table[index].append({ [key]: value });
  }
  get(key) {
    let index = this.hash(key);
    if (!this.table[index]) {
      return null;
    }
    return this.table[index].values();
  }
  contains(key) {
    let index = this.hash(key);
    if (!this.table[index]) {
      return false;
    }
    return true;
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        keys.push(this.table[i].keys());
      }
    }
    return keys;
  }
}

module.exports = HashTable;
