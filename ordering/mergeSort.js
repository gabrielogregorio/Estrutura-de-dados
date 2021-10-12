const ArrayList = require('./base');

class Algorithm extends ArrayList {
  mergeSort() {
    this.array = this.mergeSortRec(this.array)
  }

  mergeSortRec(array) {
    let length = array.length
    if(length === 1) {
      return array
    }

    // Dividindo o array em 2
    let mid = Math.floor(length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid, length)
    return this.merge(this.mergeSortRec(left), this.mergeSortRec(right))
  } 

  merge(left, rigth) {
    let result = []
    let il = 0
    let ir = 0

    while(il < left.length && ir < rigth.length) {
      if(left[il] < rigth[ir]) {
        result.push(left[il++])
      } else {
        result.push(rigth[ir++])
      }
    }

    while (il < left.length) {
      result.push(left[il++])
    }

    while(ir < rigth.length) {
      result.push(rigth[ir++])
    }

    return result
  }
}

let al = new Algorithm()
al.insert(9)
al.insert(7)
al.insert(5)
al.insert(3)
al.insert(4)
al.insert(8)
al.insert(10)
al.insert(1)
al.mergeSort()
console.log(al.toString())
