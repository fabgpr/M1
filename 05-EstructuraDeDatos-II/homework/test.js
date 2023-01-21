function HashTable() {
    this.numBuckets = 35;
    this.buckets = []
}
  
HashTable.prototype.hash = function(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++){
      sum += key.charCodeAt(i);
    }
    return sum % this.numBuckets;
}
  
HashTable.prototype.set = function(clave, valor) {
    let obj = {[clave]: valor}  
    this.buckets[this.hash(clave)] = obj
}
  
HashTable.prototype.get = function() {
  
}
  
HashTable.prototype.hasKey = function (key) {
    if (this.buckets[key]) return true
    else return false
}

let t = new HashTable()
console.log(t.set("nombre", "fabian"))
console.log(t)