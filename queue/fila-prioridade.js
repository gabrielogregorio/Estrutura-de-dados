/*
  Neste modelo, 1 tem maior prioridade que 2
*/
class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;  
  }
}


class PriorityQueue {
  constructor() {
    this.items = []
  }

  Enqueue(element, priority) {
    // add item
    let add = false;
    let queueElement = new QueueElement(element, priority)
    for (let i = 0; i < this.items.length; i++) {
      if(queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement)
        add = true;
        break
      }
    }
    if (!add) {
      this.items.push(queueElement)
    }
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
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${this.items[i].element} - ${this.items[i].priority}`)
    }
  }
}

let priorityQueue = new PriorityQueue()
priorityQueue.Enqueue('Amanda', 10)
priorityQueue.Enqueue('Beatriz', 9)
priorityQueue.Enqueue('Daniel', 15)
priorityQueue.Print()
priorityQueue.Dequeue()
priorityQueue.Print()
