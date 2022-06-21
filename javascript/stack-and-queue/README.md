# Stacks and Queues

- A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.

- Stacks follow these concepts:

- FILO (First In Last Out) This means that the first item added in the stack will be the last item popped out of the stack.

- LIFO (Last In First Out)
This means that the last item added to the stack will be the first item popped out of the stack.

- Common terminology for a queue is

- Queues follow these concepts:

- FIFO (First In First Out) This means that the first item in the queue will be the first item out of the queue.

- LILO (Last In Last Out) This means that the last item in the queue will be the last item out of the queue.

## Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Approach & Efficiency

I used class node and the big O --> time: O(1), space: O(1).

## API

### stack

- isEmpty()
- push(value)
- pop()
- peek()

### queue

- enqueue
- dequeue
- peek
- isEmpty
