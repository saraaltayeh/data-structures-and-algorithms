'use strict';

const Queue = require('../queue/lib/queue');

describe('Animal Shelter Test', () => {
  it('Can successfully enqueue a cat', () => {
    let shelter = new Queue();
    shelter.enqueue('cat');
    expect(shelter.peek()).toBe('cat');
  });
  it('Can successfully enqueue a dog', () => {
    let shelter = new Queue();
    shelter.enqueue('dog');
    expect(shelter.peek()).toBe('dog');
  });
  it('Can successfully enqueue a cat and a dog', () => {
    let shelter = new Queue();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    expect(shelter.peek()).toBe('cat');
  });
  it('Can successfully dequeue a cat or a dog', () => {
    let shelter = new Queue();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.dequeue('cat');
    expect(shelter.peek()).toBe('dog');
  });
  it('Can return null if no animal is in the shelter', () => {
    let shelter = new Queue();
    expect(shelter.peek()).toBeNull();
  });
  it('Can successfully dequeue a cat and a dog', () => {
    let shelter = new Queue();
    shelter.enqueue('cat');
    shelter.enqueue('dog');
    shelter.dequeue('cat');
    shelter.dequeue('dog');
    expect(shelter.peek()).toBeNull();
  });
});
