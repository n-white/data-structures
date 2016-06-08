var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  debugger;
  var someInstance = {};

  var storage = {};
  var key = 0;

  someInstance.push = function(value){
    storage[key] = value;
    key++;
    console.log(storage)
  }

  someInstance.pop = function() {
    var temp = storage[key];
    delete storage[key];
    key = Math.max(key--, 0);
    console.log(temp)
    return temp;
  }

  someInstance.size = function() {
    return key;
  }

  return someInstance;

};

var stackMethods = {};


