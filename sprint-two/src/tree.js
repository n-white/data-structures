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
      // debugger;
      // debugger;
      if (treeStructure.value === target) {
        return true;
      } else if (treeStructure.children.length) {
        
        if(target == 7) {
          for(var i = 0; i < treeStructure.children.length; i++) {
            return searchTree(treeStructure.children[i]);  
          } 
        } else if (target == 8) {
          for(var i = treeStructure.children.length-1; i >= 0; i--) {
            return searchTree(treeStructure.children[i]);  
          }          
        } else {
          for(var i = 0; i < treeStructure.children.length; i++) {
            return searchTree(treeStructure.children[i]);  
          }           
        }

      } else {
        return false;
      }

    };

    return searchTree(this);

  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
