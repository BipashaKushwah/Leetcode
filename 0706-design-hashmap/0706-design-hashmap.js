
var MyHashMap = function() {
  this.map = {}; // store key-value pairs
};

MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value; // add or update key
};

MyHashMap.prototype.get = function(key) {
  return this.map.hasOwnProperty(key) ? this.map[key] : -1;
};

MyHashMap.prototype.remove = function(key) {
  delete this.map[key];
};
