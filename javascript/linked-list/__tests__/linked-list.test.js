'use strict';
const LinkedList = require('../linkedlist');

describe('linked list tests', ()=> {
  test ('Successfully instantiate an empty linked list',() =>{
    let emptyList = new LinkedList();
    expect(emptyList.head).toBeNull;
  });
  test ('Insert into the linked list',()=>{
    let list = new LinkedList();
    list.insert('sara');
    expect(list.head.value).toBe('sara');
  });
  test ('Head point to the first node in the linked list',()=>{
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    expect(list.head.value).toBe('a');
  });
  it ('Insert multiple nodes into the linked list',()=>{
    let list = new LinkedList();
    list.insert('a');
    list.insert('b');
    list.insert('c');
    expect(list.length > 1).toBe(true);
  });
  //finding a value within the linked list that exists
  test ('Finding a value within the linked list that exists',()=>{
    let list = new LinkedList();
    list.insert(10);
    expect(list.includes(10)).toBe(true);
  });
  it ('Searching for a value in the linked list that does not exists',()=>{
    let list = new LinkedList();
    list.insert(10);
    expect(list.includes(1)).toEqual(false);
  });
  it ('A collection of all the values that exist in the linked list',()=>{
    let List= new LinkedList();
    List.insert('a');
    List.insert('b');
    List.insert('c');
    expect(List.toString()).toEqual('a -> b -> c -> ');
  });
});
