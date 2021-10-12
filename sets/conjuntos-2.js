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

  /* Operações com conjuntos */
  union(otherSet) {
    let unionSet = new Set()
    let valuesSetA = this.values()

    valuesSetA.forEach(valueSetA => {
      unionSet.add(valueSetA)
    })

    let valuesSetB = otherSet.values()

    valuesSetB.forEach(valueSetB => {
      unionSet.add(valueSetB)
    })
    return unionSet
  }

  intersection(otherSet) {
    let intersectionSet = new Set()
    let valuesSetA = this.values()

    valuesSetA.forEach(valueSetA => {
      if(otherSet.has(valueSetA)) {
        intersectionSet.add(valueSetA)
      }
    })
    return intersectionSet
  }

  difference(otherSet) {
    // exist in A, but not exists in b
    // setA.difference(setB)
    let differenceSet = new Set()
    let values = this.values()

    values.forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  isSubSet(otherSet) {
    if(this.size() > otherSet.size()) {
      return false
    } else {
      let values = this.values()

      // Não contem algum elemento
      for (let i = 0; i < values.length; i++) {
        if(!otherSet.has(values[i])) {
          return false
        }
      }

      return true
    }
  }
}

let setA = new Set()
setA.add(1)
setA.add(2)

let setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)

console.log(setA.union(setB).values())
console.log(setA.intersection(setB).values())
console.log(setA.difference(setB).values())
console.log(setB.difference(setA).values())

/*----------------------------------*/

let sA = new Set()
sA.add(1)
sA.add(2)

let sB = new Set()
sB.add(1)
sB.add(2)
sB.add(3)
sB.add(4)


console.log(sA.isSubSet(sB))
