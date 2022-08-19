# Hash Table Implementation

A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array in which an element will be inserted or searched. By using a good hash function, hashing can work well.

## Challenge

any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorith.

Why do we use them?

1. Hold unique values
2. Dictionary
3. Library


## Approach & Efficiency

- Big O for space: O(n)
- Big O for time: O(1)

## API

Implement a Hashtable Class with the following methods:

- set
Arguments: key, value
Returns: nothing

- get
Arguments: key
Returns: Value associated with that key in the table

- contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.

- keys
Returns: Collection of keys

- hash
Arguments: key
Returns: Index in the collection for that key
