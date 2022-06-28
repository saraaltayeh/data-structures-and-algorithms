'use strict';

const Queue = require('./queue');
const newQueue = new Queue();

newQueue.enqueue('cat');
newQueue.enqueue('dog');
newQueue.enqueue('dog');
newQueue.enqueue('cat');

console.log(newQueue.dequeue('cat'));
console.log(newQueue.dequeue('dog'));
console.log(newQueue.dequeue('dog'));
console.log(newQueue.dequeue('cat'));
