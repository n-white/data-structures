var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.key = 0;
  someInstance.storage = {};

  return someInstance;

};

var queueMethods = {

  enqueue: function(value) {
  this.storage[this.key] = value;
  this.key++;
  console.log("push: " + this.storage);
  },

  dequeue: function() {
    var temp = this.storage[0];
    delete this.storage[0];
    
    this.key = 0;
    var tempStorage = {};
    for(number in this.storage) {
      tempStorage[this.key] = this.storage[number];
      this.key++;
    }
    this.storage = tempStorage;

    // this.storage = _.reduce(this.storage, function(accumulator, item, index) {
    //   accumulator[this.key] = item;
    //   this.key++;
    //   return accumulator;
    // }, {});

    return temp;  
  },

  size: function() {
    return this.key;
  }


};

