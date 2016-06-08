var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  var storage = {};
  var key = 0;

  someInstance.push = function(value){
    storage[key] = value;
    key++;
    console.log("push: " + storage)
  }

  someInstance.pop = function() {
    var temp = storage[key];
    delete storage[key];
    key = Math.max(key--, 0);
    console.log("pop: " + temp)
    return temp;
  }

  someInstance.size = function() {
    return key;
  }

  return someInstance;

};

var stackMethods = {};


