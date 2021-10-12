export default class ArrayClass{
  list: string[]

  constructor(list) {
    this.list = list
  }

  // Adicionar no final
  push(item: string): ArrayClass {
    console.log(item, this.list)
    this.list.push(item)
    return new ArrayClass(this.list)
  }

  // Adicionar no inicio
  unshift(item: string): ArrayClass {
    this.list.unshift(item)
    return new ArrayClass(this.list)
  }
  
  // Remover do final
  pop(): ArrayClass {
    this.list.pop()
    return new ArrayClass(this.list)
  }

  // Remover do inicio
  shift(): ArrayClass {
    this.list.shift()
    return new ArrayClass(this.list)
  }

  // Retorna tudo
  getAll(): string[] {
    return this.list
  }
}
