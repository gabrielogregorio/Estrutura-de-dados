class Queue {
  constructor() {
    this.items = []
  }

  Enqueue(element) {
    // add item
    this.items.push(element)
  }

  Dequeue() {
    // remove item
    return this.items.shift()
  }

  Front() {
    // return fist element queue
    return this.items[0]
  }

  IsEmpty() {
    // queue is empty
    return this.items.length === 0
  }

  Size() {
    // return size of queue
    return this.items.length
  }

  Print() {
    // print queue
    console.log(this.items.toString())
  }
}

function test() {
  queue = new Queue()
  queue.Enqueue('Amanda')
  queue.Enqueue('Beatriz')
  queue.Enqueue('Carlos')
  queue.Enqueue('Diego')
  queue.Enqueue('Enloque')
  queue.Enqueue('Fabio')
  queue.Enqueue('Gabriela')
  queue.Enqueue('Hugo')
  queue.Enqueue('Iara')
  queue.Enqueue('Joana')
  queue.Enqueue('Ketlin')
  queue.Enqueue('Liliane')
  
  queue.Print()
  queue.Dequeue()
  queue.Print()
  
  console.log(queue.IsEmpty())
  console.log(queue.Size())
  console.log(queue.Front())  
}

//test()
module.exports = {Queue};