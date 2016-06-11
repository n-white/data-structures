
var Tree = function(value) {

  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  return newTree;
};


var treeMethods = {

  addChild: function(value) {
    this.children.push(Tree(value));
  },

  contains: function(target) {

    if (this.value === target) {
      return true;
    }

    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }

    return false;

  }

};




/*
 * Complexity: What is the time complexity of the above functions?
 */





// var treeSumReduce = function(node) {

//   return _.reduce(node.children, function(accumulator, item) {

//     return accumulator + treeSumReduce(node)

//   }, node.value)

// }