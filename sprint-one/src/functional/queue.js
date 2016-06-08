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
    key = 0
    for(var number in storage) {
      number = key
      key++
    }
    var temp = storage[0]
    delete storage[0]
    return temp
  };

  someInstance.size = function() {
    return key
  };

  return someInstance;
};
