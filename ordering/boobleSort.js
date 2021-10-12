const ArrayList = require('./base')

class Algorithm extends ArrayList {
  bubbleSort(){
    for(let i = 0; i < this.array.length - 1; i++) {
      for(let j = 0; j < this.array.length - 1; j++) {
        if(this.array[j] > this.array[j + 1]) {
          this.swap(this.array, j, j + 1)
        }
      }
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
al.bubbleSort()


console.log(al.toString())



//var start = new Date().getTime();
//var end = new Date().getTime();
//var time = end - start;
//console.log('Time ' + time, start, end);
