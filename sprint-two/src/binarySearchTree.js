var BinarySearchTree = function(value) {

  var newBinaryTree = Object.create(binaryTreeMethods);
  newBinaryTree.value = value;
  newBinaryTree.left = []
  newBinaryTree.right = []
  return newBinaryTree;

};

var binaryTreeMethods = {


  insert: function(node) {
    var newNode = BinarySearchTree(number);
    var currentNode = this;

    while (currentNode.value !== null) {
      if (number > currentNode.value) {
        
        if (currentNode.right == null) {
          currentNode.right = newNode;  
        } else {
          currentNode = currentNode.right;
        }

      } else if (number < currentNode.value) {

        if (currentNode.left == null) {
          currentNode.left = newNode;
        } else {
          currentNode = currentNode.left;
        }
        
      }
    }
  },

  contains: function(tree) {

  },

  depthFirstLog: function(tree) {

  },

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
