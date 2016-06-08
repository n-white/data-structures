var stackMethods = {

  push: function(value){
    this.storage[this.key] = value;
    this.key++
    console.log("push: " + this.storage)
  },

  pop: function() {
    var temp = this.storage[this.key-1];
    delete this.storage[this.key];
    console.log("key: " + this.key + "pop: " + temp)
    this.key = Math.max(this.key-1, 0);
    console.log("after popping, key is now at: " + this.key)
    return temp;  
  },

  size: function() {
    return this.key
  }


};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    storage: {},
    key: 0,
  };

  _.extend(someInstance, stackMethods)  

  console.log(someInstance)

  return someInstance;

};




