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
  list.currentNode = list.head;

  list.addToTail = function(value) {
    // if(list.head == null) {
    //   list.head = list.tail;
    //   // list.head.node.next = 'list.tail';
    // }
    // list.tail = Node(value);
    if(list.head === null) {
      list.tail = Node(value);
      list.head = Node(value);
      list.nodes = Node(value);
      list.length++;
    } else if (list.length > 0) {
      list.head = list.tail;
      list.tail = Node(value);
      list.length++;
    } 


  };

  list.removeHead = function() {
    if(list.length > 0) {
      var temp = list.head;
      delete list.head;
      list.head = list.tail;
      return temp.value;
    }
  };

  list.contains = function(target) {

      // while(list.currentNode.value != target && list.currentNode.next)) {
      //   list.currentNode = list.nodes.next  
      // }
      
      // list.currentNode.next = list
      
      if(list.head.value === target || list.tail.value === target) {
        return true;
      } else {
        return false;
      }

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
