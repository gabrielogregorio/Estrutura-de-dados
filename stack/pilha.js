class Stack {
  constructor() {
    this.items = [];
  }

  Push(element) {
    // Inserir elemento
    this.items.push(element);
  }

  Pop() {
    // Remover o item do topo
    return this.items.pop()
  }

  Peek() {
    // Retorna o elemento que está no topo
    return this.items[this.items.length-1]
  }

  IsEmpty() {
    // Informa se está vazia
    return this.items.length === 0 ? true : false
  }

  Clear() {
    // limpa a pilha
    this.items = []
  }

  Size() {
    // Informa o tamnho
    return this.items.length
  }

  Print() {
    // Imprime a pilha
    console.log(this.items.toString())
  }
}

function test(){
  let stack = new Stack()
  stack.Push(1)
  stack.Push(2)
  stack.Push(3)
  stack.Push(4)
  stack.Push(5)
  stack.Push('A')
  stack.Print()
  console.log(`Topo: ${stack.Peek()}`)
  console.log(`Size: ${stack.Size()}`)
  console.log(`Empty: ${stack.IsEmpty()}`)
  stack.Pop()
  console.log('------------')
  stack.Clear()
  stack.Print()
  console.log(`Empty: ${stack.IsEmpty()}`)  
}

test()
