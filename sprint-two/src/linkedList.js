var LinkedList = function() {
  
  var list = {
    
    // list.head = node.value
    // list.tail = node.next.next.value
    // list.length = 2

    // list.nodes: {
    //   node.value = 4,
    //   node.next = {
    //                 node.value = 5,
    //                 node.next = {
    //                               node.value = 6,
    //                               node.next = null
    //                               }
    //               }

  };

  list.head = null;
  list.tail = null;
  list.length = 0;
  list.nodes = {};
  

  list.addToTail = function(value) {
    // if(list.head == null) {
    //   list.head = list.tail;
    //   // list.head.node.next = 'list.tail';
    // }
    // list.tail = Node(value);
    // if(list.head === null) {
    //   list.tail = Node(value);
    //   list.head = Node(value);
    //   list.nodes = Node(value);
    //   list.length++;
    // } else if (list.length > 0) {
    //   list.head = list.tail;
    //   list.tail = Node(value);
    //   list.length++;
    // } 

    var newNode = Node(value);

    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }


  };

  list.removeHead = function() {
    // if(list.length > 0) {
    //   var temp = list.head;
    //   delete list.head;
    //   list.head = list.tail;
    //   return temp.value;
    // }
    var formerHead = list.head.value;

    if(list.head !== null) {
      list.head = list.head.next;
    }

    return formerHead;

  };

  list.contains = function(target) {
      
      // var found = false;
      // var currentNode = list.head;

      function helperSearch (nodeList) {
        if(nodeList === null) {
          return false;
        } else if (nodeList.value === target) {
          return true;
        } else {
          return helperSearch(nodeList.next)
        }
      }

      // while (currentNode !== null) {
        
      //   if (currentNode.value === target) {
      //     found = true;
      //   }
      //   currentNode = currentNode.next;
      // }
      
      return helperSearch(list.head)
      // return found;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
