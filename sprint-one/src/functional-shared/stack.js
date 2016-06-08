var stackMethods = {

  push: function(value){
    storage[key] = value;
    key++
    console.log("push: " + storage)
  },

  pop: function() {
    var temp = storage[key-1];
    delete storage[key];
    console.log("key: " + key + "pop: " + temp)
    key = Math.max(key-1, 0);
    console.log("after popping, key is now at: " + key)
    return temp;  
  },

  size: function() {
    return key
  }


};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  var storage = {};
  var key = 0;

  _.extend(someInstance, stackMethods)  

  console.log(someInstance)

  return someInstance;

};




