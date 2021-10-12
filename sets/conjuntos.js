class Set {
  constructor() {
    this.items = {}
  }

  add(value) {
    // add new item of set
    if(!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }

  delete(value) {
    //delete one item of set
    if(this.has(value)) {
      delete this.items[value]
      return true
    }
    return false
  }

  has(value) {
    //set contain item?
    return this.items.hasOwnProperty(value)
  }

  clear() {
    //clear set
    this.items = {}
  }

  size() {
    //return length of set
    return Object.keys(this.items).length
  }

  values() {
    // Return array of all elements
    let values = []
    let keys = Object.keys(this.items)
    keys.forEach(key => {
       values.push(this.items[key])
     })
     return values
  }

}

let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(3)
set.add(3)
set.add(3)
set.add(4)
set.add(5)

console.log(set.size())
console.log(set.values())
set.delete(3)
console.log(set.values())
console.log(`Has 2 => ${set.has(2)}`)
console.log(`Has 10 => ${set.has(10)}`)
set.clear()
console.log(set.values())

