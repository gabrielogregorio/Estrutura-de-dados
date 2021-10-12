const Queue = require('./filas');

function HotPotato(nameList, number) {
  let queue = new Queue()
  nameList.forEach(name => {
    queue.Enqueue(name)
  })
  while(queue.Size() > 1) {
    for(let i = 0; i < number; i++) {
      queue.Enqueue(queue.Dequeue())
    }
    eliminated = queue.Dequeue()
    console.log(`Eliminated => ${eliminated}`)   
  }
  return queue.Dequeue()  
}

let winner = HotPotato(['gabriel', 'julia', 'luana'], 1)
console.log(winner)