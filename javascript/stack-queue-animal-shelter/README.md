# stack-queue-animal-shelter

Create a class called AnimalShelter which holds only dogs and cats.
The shelter operates using a first-in, first-out approach.

- enqueue
Arguments: animal
animal can be either a dog or a cat object.
- dequeue
Arguments: pref
pref can be either "dog" or "cat"
- Return: either a dog or a cat, based on preference.
If pref is not "dog" or "cat" then return null.

## Approach & Efficiency

I used class node and the big O --> time: O(1), space: O(n).

## Solution

If a cat or dog isn’t preferred, return whichever animal has been waiting in the shelter the longest.
