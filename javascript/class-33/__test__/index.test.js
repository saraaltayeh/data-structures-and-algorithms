const {HashMap, leftJoin}=require('../index');

describe('hashTable test cases ', () => {
  const hashMap1 = new HashMap(100);
  const hashMap2 = new HashMap(100);
  const hashMap3 = new HashMap(100);


  hashMap1.set('diligent', 'employed');
  hashMap1.set('fond', 'enamored');
  hashMap1.set('guide', 'usher');
  hashMap1.set('outfit', 'garb');
  hashMap1.set('wrath', 'anger');


  hashMap2.set('diligent', 'idle');
  hashMap2.set('fond', 'averse');
  hashMap2.set('guide', 'follow');
  hashMap2.set('flow', 'jam');
  hashMap2.set('wrath', 'delight');

  let result =[
    [ 'outfit', 'garb', null ],
    [ 'wrath', 'anger', 'delight' ],
    [ 'diligent', 'employed', 'idle' ],
    [ 'guide', 'usher', 'follow' ],
    [ 'fond', 'enamored', 'averse' ]
  ];
  it('return the correct value for left join for both hash table ', () => {
    expect(leftJoin(hashMap1,hashMap2)).toEqual(result);
  });
  it('if the first hash table is empty should return empty array', () => {

    expect(leftJoin(hashMap3,hashMap2)).toEqual([]);


  });


});
