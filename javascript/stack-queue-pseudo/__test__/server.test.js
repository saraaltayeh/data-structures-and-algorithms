'use strict';

const Queue = require('../queue/queue');

describe('Queue Pseudo', () => {
  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    expect(queue.inStack.peek()).toBe(1);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.inStack.peek()).toBe(3);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.outStack.pop()).toBeNull();
  });
  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.outStack.pop()).toBeNull();
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();
    expect(() => queue.dequeue()).toBeNull;
    expect(() => queue.peek()).toBeNull;
  });
});
