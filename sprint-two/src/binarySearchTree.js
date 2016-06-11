var BinarySearchTree = function(value) {

  var newBinaryTree = Object.create(binaryTreeMethods);
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  return newBinaryTree;

};

var binaryTreeMethods = {

  insert: function(number) {

    var biTree = BinarySearchTree(number);
    var currentNode = this;

    while (currentNode.value !== biTree.value) {
      // check if value of new node is greater than value of current node
      if (biTree.value > currentNode.value) {
      // if greater, check if value of right node of current node is null
        if (currentNode.right === null) {
        // if null, assign value of new node to right property
          currentNode.right = biTree;
        } else {
        // if not null, reassign value of current node to equal right node (while loop will repeat) 
          currentNode = currentNode.right;          
        }

      } else {
      // assume value of new node is less than value of current node
      // if less than, check if value of left node is null
        if (currentNode.left === null) {
        // if null, assign value of new node to the left property
          currentNode.left = biTree;          
        } else {
        // if not null, reassign value of current node to equal left node (while loop will repeat)
          currentNode = currentNode.left;          
        }
      }
    }
  },

  contains: function(number) {
    var found = false;
    var currentNode = this;

    while (currentNode !== null && found === false) {
      // check if value of current node is equal to number
      if (currentNode.value === number) {
        // if equal, change value of found to be true
        found = true;
      // check if value of number is greater than value of current node
      } else if (number > currentNode.value) {
        // if greater, check if value of right node of current node is null
        if (currentNode.right === null) {
          // if null, reassign current node to equal null
          currentNode = null;
        } else {
          // if not null, reassign value of current node to equal value of right property        
          currentNode = currentNode.right;
        }
      // if its not greater, we assume it's less than with an else statement
      } else {
        // check if value of left node of current node is null
          if (currentNode.left === null) {
            // if null, reassign current node to equal null
            currentNode = null;
          } else {
            // if not null, reassign value of current node to equal value of left property
            currentNode = currentNode.left;
          }
      }
    }
    return found;
  },

  depthFirstLog: function(callback) {

    var tempTree = this;


    var searchTree = function(tree) {
      
    };

    return searchTree(tempTree);

  },

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
