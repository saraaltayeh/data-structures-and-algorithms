const HashTable = require('./hashtable');

const hashTable = new HashTable(10);

hashTable.set('sara', 'javascript student');
hashTable.set('rana', 'javascript student');
hashTable.set('rand', 'javascript student');
hashTable.set('ihab', 'javascript student');
hashTable.set('layan', 'javascript student');
hashTable.set('hamza', 'javascript student');

console.log('get :', hashTable.get('sara'));
console.log('get :', hashTable.get('rana'));
console.log('get :', hashTable.get('rand'));
console.log('get :', hashTable.get('ihab'));
console.log('get :', hashTable.get('layan'));
console.log('get :', hashTable.get('hamza'));

console.log('111111111111');

console.log('contains :', hashTable.contains('sara'));
console.log('contains :', hashTable.contains('rana'));
console.log('contains :', hashTable.contains('rand'));
console.log('contains :', hashTable.contains('ihab'));
console.log('contains :', hashTable.contains('layan'));
console.log('contains :', hashTable.contains('hamza'));

console.log('22222222222222');

console.log('keys :', hashTable.keys());
