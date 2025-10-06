
var MyHashSet = function() {
    
};

/** 
 * @param {number} key
 * @return {void}
 */
var MyHashSet = function() {
    this.set = {}; // internal storage
};

MyHashSet.prototype.add = function(key) {
    this.set[key] = true;
};

MyHashSet.prototype.remove = function(key) {
    delete this.set[key];
};

MyHashSet.prototype.contains = function(key) {
    return this.set.hasOwnProperty(key);
};




