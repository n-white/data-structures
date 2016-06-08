var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value
    key++
  };

  someInstance.dequeue = function() {
    var temp = storage[0]
    delete storage[0]
    key = 0
    var newStorage = {}
    for(var number in storage) {
      newStorage[key] = storage[number]
      key++
    }
    storage = newStorage
    return temp
  };

  someInstance.size = function() {
    return key
  };

  return someInstance;
};
