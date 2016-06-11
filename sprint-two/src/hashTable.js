

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {

    var temp = this._storage.get(index);
    var inserted = false;

    for (var i = 0; i < temp.length; i ++) {
      if (temp[i][0] === k) {
        temp[i][1] = v;
        inserted = true;
      }
    }
    if (!inserted) {
      temp.push([k, v]);      
    }

    this._storage.set(index, temp);      
    
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempArray = this._storage.get(index);

  for (var i = 0; i < tempArray.length; i++) {
    if(tempArray[i][0] === k) {
      return tempArray[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempArray = this._storage.get(index);

  for (var i = 0; i < tempArray.length; i++) {
    if(tempArray[i][0] === k) {
      tempArray[i][1] = undefined;
    }
  }

  this._storage.set(index, tempArray);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


