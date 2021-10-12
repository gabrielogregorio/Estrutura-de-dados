class ArrayList {
  constructor() {
    this.array = []
  }

  insert(item) {
    this.array.push(item)
  }

  toString() {
    return this.array.join()
  }

  swap(array, index1, index2) {
    let aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
  }
}

module.exports = ArrayList