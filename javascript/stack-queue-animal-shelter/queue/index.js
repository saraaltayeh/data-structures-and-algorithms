
'use strict';

const Queue = require('./lib/queue');

const newQueue = new Queue();

newQueue.enqueue('cat');
newQueue.enqueue('dog');
newQueue.enqueue('dog');
newQueue.enqueue('cat');
// console.log(newQueue.peek());
console.log(newQueue.dequeue('cat'));
// console.log(newQueue.peek());
console.log(newQueue.dequeue('dog'));
// console.log(newQueue.peek());
console.log(newQueue.dequeue('dog'));
// console.log(newQueue.peek());
console.log(newQueue.dequeue('cat'));
// console.log(newQueue.peek());
