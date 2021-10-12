class Dictionaty {
  constructor() {
    this.items = {}
  }

  set(key, value) {
    // add item of dictionary
    this.items[key] = value
  }

  delete(key) {
    // remove value of dictionary using a key
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }

  has(key) {
    // return if key exists in dictionary
    return this.items.hasOwnProperty(key)
  }

  get(key) {
    // return specific value using a key
    return this.has(key) ? this.items[key] : undefined
  }

  clear() {
    // clear dictionary
    this.items = {}
  }

  size() {
    // return length dictionary
    return Object.keys(this.items).length
  }

  keys() {
    //return array with all keys of dictionary
    return Object.keys(this.items)
  }

  values() {
    // return all values of dictionary
    return Object.values(this.items)
  }

  getItems() {
    return this.items
  }
}

function test() {
  let dict = new Dictionaty()
  dict.set('chave1', 'valor1')
  dict.set('chave2', 'valor2')
  dict.set('chave3', 'valor3')
  
  console.log(dict.keys())
  console.log(dict.values())
  console.log(dict.has('chave3'))
  console.log(dict.has('chave300'))
  console.log(dict.getItems())
  dict.delete('chave1')
  console.log(dict.getItems())
  dict.clear()
  console.log(dict.getItems())  
}

module.exports = {Dictionaty}