const ArrayList = require('./base')

class Algorithm extends ArrayList {
  // Presupoe que o primeiro item já esteja ordenado
  selectionSort() {
    let indexMin;

    for(var i = 1; i < this.array.length - 1; i++) {
      indexMin = i
      for (let j = i; j < this.array.length; j++) {
        if (this.array[indexMin] > this.array[j]) {
          indexMin = j
        }
      }
      if (i !== indexMin) {
        this.swap(this.array, i, indexMin)
      }
    }
  }
}

let al = new Algorithm()

al.insert(1)
al.insert(12)
al.insert(11)
al.insert(10)
al.insert(9)
al.insert(8)
al.insert(7)
al.insert(13)
al.insert(14)
al.insert(15)
al.insert(16)
al.insert(17)
al.insert(18)
al.selectionSort()
console.log(al.toString())
