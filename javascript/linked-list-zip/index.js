'use strict';
const LinkedList = require('./linked-list-zip');
const l1 = new LinkedList();
const l2 = new LinkedList();
const l3 = new LinkedList();

l1.append(10);
l1.append(20);
l1.append(30);

l2.append(40);
l2.append(50);
l2.append(60);

console.log(l1.tostring());
console.log(l2.tostring());

console.log((l2.zipLists(l1,l2)).tostring());

let list1 = new LinkedList();
list1.append('one');
list1.append('four');
list1.append('sex');
let list2 = new LinkedList();
list2.append('tow');
list2.append('three');
list2.append('ten');


console.log((l3.zipLists(list1,list2)).tostring());
