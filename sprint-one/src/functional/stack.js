var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0
  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value
    key++
  };

  someInstance.pop = function() {
    var temp = storage[key - 1]
    delete storage[key]
    key = Math.max(key-1, 0)
    return temp
  };

  someInstance.size = function() {
    return key
  };

  return someInstance;
};
