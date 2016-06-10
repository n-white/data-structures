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
    console.log(this);
  },

  contains: function(target) {
    
    var searchTree = function(treeStructure) {
      
      if (treeStructure.value === target) {
        return true;
      } else if (treeStructure.children.length) {
        return searchTree(treeStructure.children[0]);
      } else {
        return false;
      };

    };

    return searchTree(this);

  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
