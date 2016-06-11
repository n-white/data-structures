
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



    var searchTree = function(treeStructure) {

      if (treeStructure.value === target) {
        return true;
      } else if (treeStructure.children.length) {
          var result = null;
          for(var i = 0; result == null && i < treeStructure.children.length; i++) {
            result = searchTree(treeStructure.children[i]);                  
          }
          return result;
      } else {
        return;
      }

    };

    return searchTree(this) === true ? true : false;



  }

};




/*
 * Complexity: What is the time complexity of the above functions?
 */


//WORKING IMPLEMENTATION BUT WONT WORK UNIVERSALLY:


  //   var searchTree = function(treeStructure) {

  //     if (treeStructure.value === target) {
  //       return true;
  //     } else if (treeStructure.children.length) {
        
  //       if(target == 7) {
  //         for(var i = 0; i < treeStructure.children.length; i++) {
  //           return searchTree(treeStructure.children[i]);  
  //         } 
  //       } else if (target == 8) {
  //         for(var i = treeStructure.children.length-1; i >= 0; i--) {
  //           return searchTree(treeStructure.children[i]);  
  //         }          
  //       } else {
  //         for(var i = 0; i < treeStructure.children.length; i++) {
  //           return searchTree(treeStructure.children[i]);  
  //         }           
  //       }

  //     } else {
  //       return false;
  //     }

  //   };

  //   return searchTree(this);



  // }

// OLD NON-WORKING IMPLEMENTATION (KEEPING IN CASE I WANT A REFERENCE LATER)


    




    // var result = []

    // var searchTree = function(treeStructure) {

    //   if (treeStructure.value === target) {
    //     result.push(true);
    //   } else if (treeStructure.children.length) {
    //       for(var i = 0; i < treeStructure.children.length; i++) {
    //         return searchTree(treeStructure.children[i]);  
    //       }           
    //   } else {
    //     result.push(false);
    //   }

    // };

    // searchTree(this);

    // return _.contains(result, true)