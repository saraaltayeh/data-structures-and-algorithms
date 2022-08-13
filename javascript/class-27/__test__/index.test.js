'use strict';

const mergeSort = require('../index');

describe('All mergeSort array test ', () => {
  test('return Merge Sort for Randomly sorted or Reverse sorted', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let create = mergeSort(arr);
    expect(create).toEqual[4, 8, 15, 16, 23, 42];
  });
});
