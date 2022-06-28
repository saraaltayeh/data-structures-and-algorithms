# stack-queue-animal-shelter

Create a class called AnimalShelter which holds only dogs and cats.
The shelter operates using a first-in, first-out approach.
If a cat or dog isn’t preferred, return whichever animal has been waiting in the shelter the longest.

## Approach & Efficiency

I used class node and the big O --> time: O(1), space: O(n).

## Solution

class animalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  isEmpty() {
    return this.front === null;
  }
  enqueue(animal) {
    if (animal === 'cat' || animal === 'dog') {
      const node = new Node(animal);
      if (this.isEmpty()) {
        this.front = node;
        this.rear = node;
        this.length++;
      } else {
        this.rear.next = node;
        this.rear = node;
        this.length++;
      }
    }
  }
  dequeue(pref) {
    if (this.isEmpty()) {
      return null;
    }
    else if (pref === 'cat' || pref === 'dog') {
      const tempNode = this.front;
      this.front = this.front.next;
      tempNode.next = null;
      this.length--;
      return tempNode.value;
    }
    return null;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }
}
