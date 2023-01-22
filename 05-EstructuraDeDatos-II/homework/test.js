/*let arr = [[{1: 2}, {3: 3}, {5: 5}, {2: 4}]]

let find = function(key){
    if(arr[0].find(element => element.hasOwnProperty(key))) return true
    else return false
}*/

function HashTable(buckets) {
    this.numBuckets = buckets||35;
    this.arr = new Array(this.numBuckets); 
}
  
HashTable.prototype.hash = function(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++){
      sum += key.charCodeAt(i);
    
    }
    return sum % this.numBuckets;
}
  
HashTable.prototype.set = function(key, value) {
    if(typeof key !== "string") {
      throw TypeError("Keys must be strings")
    }
    if(!this.arr[this.hash(key)]){
      this.arr[this.hash(key)] = []
    }
    this.arr[this.hash(key)].push({[key]: value})
}
  
HashTable.prototype.get = function(key) {
    return Object.values(this.arr[this.hash(key)].find(element => element.hasOwnProperty(key))).join("")
}
  
HashTable.prototype.hasKey = function (key) {
    if (this.arr[this.hash(key)].find(element => element.hasOwnProperty(key))) return true 
    return false
}

let mesa = new HashTable()
mesa.set ("foobar", "fluf cats")
console.log(mesa)
console.log(mesa.get("foobar"))

