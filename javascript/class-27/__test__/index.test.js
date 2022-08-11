'use strict';

const mergeSort = require('../index');

describe('Merge Sort Test', () => {
  it('should sort Sample Array', () => {
    expect(mergeSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('should sort Reverse-sorted', () => {
    expect(mergeSort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('should sort Few uniques', () => {
    expect(mergeSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('should sort Nearly-sorted', () => {
    expect(mergeSort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
