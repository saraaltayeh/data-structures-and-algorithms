'use strict';

const Graph = require('./graph');

let myGraph = new Graph();

myGraph.addVertex(5);
myGraph.addVertex(10);
myGraph.addVertex(15);
myGraph.addVertex(20);
myGraph.addVertex(25);
myGraph.addVertex(30);

myGraph.addEdge(5, 10);
myGraph.addEdge(30, 15);
myGraph.addEdge(20, 25);
myGraph.addEdge(10, 15);
myGraph.addEdge(20, 25);
myGraph.addEdge(15, 5);


console.log(myGraph.breadthFirst(5));
