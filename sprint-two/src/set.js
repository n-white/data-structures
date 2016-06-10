var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {
  add: function(item) {
    this._storage[item] = true;
  },

  contains: function(item) {
    return this._storage.hasOwnProperty(item);
  },

  remove: function(item) {
    if(this._storage[item] === true) {
      delete this._storage[item];
    }
  },

};




/*
 * Complexity: What is the time complexity of the above functions?
 */


// var setPrototype = {
//   add: function(item) {
//     this._storage.push(item)
//   },

//   contains: function(item) {
//     for(var i = 0; i < this._storage.length; i++) {
//       if(this._storage[i] === item) {
//         return true;
//       }
//     }
//     return false;
//   },

//   remove: function(item) {
//     debugger
//     for(var i = 0; i < this._storage.length; i++) {
//       if(this._storage[i] === item) {
//         this._storage[i].splice(i, 1);
//       }
//     }
//   },

// };