const Vertex = require('./vartex');
const Edge = require('./edge');
const Linkedlist = require('./linked-list');
const Queue = require('./queue');

class Graph {
  constructor() {
    this.adjecentList = new Map();
  }
  add(value) {
    this.adjecentList.set(value, []);
  }
  addEdge(start, end) {
    let arr = this.adjecentList.get(start);
    let edge = new Edge(end);
    arr.push(edge);
  }

  breadthFirst(node) {
    // console.log({node});
    let nodes = new Linkedlist();
    let breadth = new Queue();
    let visited = new Set();
    breadth.enqueue(node);
    visited.add(node);
    console.log(node.value);
    while (!breadth.isEmpty()) {
      let front = breadth.dequeue();
      nodes.append(front);
      let arr = this.adjecentList.get(front);
      arr.forEach((element) => {
        if (!visited.has(element.vertex)) {
          console.log(element.vertex.value);
          visited.add(element.vertex);
          breadth.enqueue(element.vertex);
        }
      });
    }
    return nodes;
  }
}
let graph = new Graph();
let one = new Vertex(1);
let two = new Vertex(2);
let three = new Vertex(3);
let four = new Vertex(4);

graph.add(one);
graph.add(two);
graph.add(three);

graph.add(four);
graph.addEdge(one, one);
graph.addEdge(one, two);
graph.addEdge(two, three);
graph.breadthFirst(one);
