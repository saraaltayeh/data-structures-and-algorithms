const HashTable = require('../hashTable');

const hashTable = new HashTable(10);

describe('test for HashTable', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    hashTable.set('hello', 'world');
    expect(hashTable.get('hello')).toEqual([{ hello: 'world' }]);
  });
  it('Retrieving based on a key returns the value stored', () => {
    hashTable.set('sara', 'javascript student');
    expect(hashTable.get('sara')).toEqual([{ sara: 'javascript student' }]);
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashTable.get('leen')).toEqual(null);
  });
  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    hashTable.set('yafa', 'javascript student');
    hashTable.set('bana', 'javascript student');
    console.log('keys :', hashTable.keys());
    expect(hashTable.keys()).toStrictEqual([[['yafa']], [['sara']], [['hello'], ['bana']]]);
  });
  it('Successfully handle a collision within the hashtable', () => {
    hashTable.set('sara', 'javascript student');
    hashTable.set('ihab', 'javascript student');
    expect(hashTable.get('sara')).toBe([{ sara: 'javascript student' }, { ihab: 'javascript student' }]);
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    hashTable.set('rana', 'javascript student');
    hashTable.set('sara', 'javascript student');
    hashTable.set('layan', 'javascript student');
    hashTable.set('rand', 'javascript student');
    expect(hashTable.get('rana')).toEqual([{ rana: 'javascript student' }, { layan: 'javascript student' }]);
  });
  it('Successfully hash a key to an in-range value', () => {
    hashTable.set('hello', 'world');
    expect(hashTable.hash('hello')).toBeLessThan(10);
  });

});
