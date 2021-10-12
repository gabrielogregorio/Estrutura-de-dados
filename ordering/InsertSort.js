const ArrayList = require('./base')

class Algorithm extends ArrayList {
  insertSort() {
    let j
    let temp

    for(let i = 0; i < this.array.length; i++) {
      j = i
      temp = this.array[i]
      while(j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1]
        j--
      }
      this.array[j] = temp
    }
  }
}

let al = new Algorithm()

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
al.insertSort()

console.log(al.toString())
