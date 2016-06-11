var BinarySearchTree = function(value) {

  var newBinaryTree = Object.create(binaryTreeMethods);
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;
  return newBinaryTree;

};

var binaryTreeMethods = {

  insert: function(number) {

    if (number < this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(number);
      } else {
        this.left.insert(number);
      }
    } else {
      if (this.right === null) {
        this.right = BinarySearchTree(number);
      } else {
        this.right.insert(number);
      }
    }
  },

  contains: function(number) {

    if (this.value === number) {
      return true;
    } else if (number > this.value) {
      return !!(this.right && this.right.contains(number));
    } else if (number < this.value) {
      return !!(this.right && this.left.contains(number));
    }

  },

  depthFirstLog: function(callback) {

    callback(this.value);

    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }

  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
