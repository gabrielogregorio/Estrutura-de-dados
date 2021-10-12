const ArrayList = require('./base')

class Algorithm extends ArrayList{
  quickSort() {
    this.quick(this.array, 0, this.array.length-1)
  }
  quick(array, left, right) {
    let index;

    if(array.length > 1) {
      index = this.partition(array, left, right)
      if(left < index - 1) {
        this.quick(array, left, index - 1)
      }
      if(index < right) {
        this.quick(array, index, right)
      }
    }
  }

  partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)]
    let i = left
    let j = right

    while(i <= j) {
      while(array[i] < pivot) {
        i++
      }

      while(array[j] > pivot) {
        j--
      }
      if(i <= j) {
        this.swap(array, i, j)
        i++
        j--
      }
    }
    return i
  }
}

qs = new Algorithm()
qs.insert(1)
qs.insert(10)
qs.insert(9)
qs.insert(8)
qs.insert(7)
qs.insert(6)
qs.insert(5)
qs.quickSort()
console.log(qs.toString())