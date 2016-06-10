

// Instantiate a new graph
var Graph = function() {

  this.nodeList = [];
  this.edgeList = [];

};

var graphNode = function(value) {
  // this.edgeList = [];
  this.value = value;
}

// Node.prototype.addEdge = function(edge) {
//   this.edgeList.push(edge)
// }

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList.push(new graphNode(node))
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var i = 0; i < this.nodeList.length; i++) {
    if(this.nodeList[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i = 0; i < this.nodeList.length; i++) {
    if(this.nodeList[i].value === node) {
      this.nodeList.splice(i,1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(var i = 0; i < this.edgeList.length; i++) {
    if((this.edgeList[i][0] == fromNode && this.edgeList[i][1] == toNode) || (this.edgeList[i][1] == fromNode && this.edgeList[i][0] == toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edgeList.push([fromNode, toNode]);
  console.log(this.edgeList);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var i = 0; i < this.edgeList.length; i++) {
    if((this.edgeList[i][0] == fromNode && this.edgeList[i][1] == toNode) || (this.edgeList[i][1] == fromNode && this.edgeList[i][0] == toNode)) {
      this.edgeList.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var i = 0; i < this.nodeList.length; i++) {
    cb(this.nodeList[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


