var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {}
  this.key = 0


};

Stack.prototype = {

  push: function(value){
    this.storage[this.key] = value;
    this.key++;
    console.log("push: " + this.storage);
  },

  pop: function() {
    var temp = this.storage[this.key-1];
    delete this.storage[this.key];
    console.log("key: " + this.key + "pop: " + temp);
    this.key = Math.max(this.key-1, 0);
    console.log("after popping, key is now at: " + this.key);
    return temp;  
  },

  size: function() {
    return this.key;
  },

  constructor: Stack

};


// Stack.prototype.push = function(value){
//     this.storage[this.key] = value;
//     this.key++;
//     console.log("push: " + this.storage);
//   }

// Stack.prototype.pop = function() {
//     var temp = this.storage[this.key-1];
//     delete this.storage[this.key];
//     console.log("key: " + this.key + "pop: " + temp);
//     this.key = Math.max(this.key-1, 0);
//     console.log("after popping, key is now at: " + this.key);
//     return temp;  
//   }

// Stack.prototype.size = function() {
//     return this.key;
//   }

