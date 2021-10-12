// Maneira mais rápida de acessar os itens
// Ele cria valores vazios, tipo, se o position for 100, existirão 99 posições vazias anteriores
// Tratamento de colisões será feito com uma linkedllist
const {LikedList, Node} = require('../lista/lista-ligada');


function LoseHashCode(key) {
  // Gera um hash -> Chaves diferentes podem ter o mesmo hash
  let hash = 0;
  for(let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i) // Gera um hash
  }
  return hash % 37
}

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[${this.key} - ${this.value}]`
  }
}

class HashTable {
  constructor() {
    this.table = []
  }

  put(key, value) {
    // add element

    // Gera um hash
    let position = LoseHashCode(key)

    // Se a posição não possuir nenhum objeto liked list
    if (this.table[position] === undefined)  {
      this.table[position] = new LikedList()
    }

    // Adiciona o item no objeto LikendList
    this.table[position].append(new ValuePair(key, value))
  }

  remove(key) {
    // Remove element
    let position = LoseHashCode(key)

    // Se a posição tiver uma instancia de likedlist
    if(this.table[position] !== undefined) {

      // Cabeça da likedlist
      let current = this.table[position].getHead()

      // Enquanto tiver proximo item
      while (current.next) {

        // Encontrou o elemento
        if(current.element.key === key) {

          // Remove o elemento
          this.table[position].remove(current.element)

          // Se a posição ficou vazia
          if(this.table[position].isEmpty()) {

            // Remove o objeto likedlist
            this.table[position] = undefined
          }

          return true
        }
        // Proximo elemento
        current = current.next
      }

      // Se tiver somente um item, não tem o next
      // e cai nessa condição
      if(current.element.key === key) {

        // Remove o objeto likedlist
        this.table[position].remove(current.element)

        // Se a posição ficou vazia
        if(this.table[position].isEmpty()) {

          // Remove o objeto likedlist
          this.table[position] = undefined
        }
        return true
      }
    }
    return false
  }

  get(key) {
    // get element
    // Gerar o hash
    let position = LoseHashCode(key)

    if(this.table[position !== undefined]) {
      let current = this.table[position].getHead()

      // enquanto tiver proximo elemento
      while(current.next) {

        // Se encontrou o elemento
        if(current.element.key === key) {

          // retorne-o
          return current.element.value
        }
        current = current.next
      }

      if(current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

  size() {
    return this.table.length
  }

  print() {
    for(var i = 0; i < this.table.length; i++) {
      if(this.table[i] !== undefined) {
          console.log(i + ' : ' + this.table[i])
      }
    }
  }
}

let hash = new HashTable()
console.log('\n\nAdição de itens, colidindo os hashs de julia e cristina')
hash.put('ilara','ILARA')
hash.put('julia','JULIA') // hash de cristina colide com julia
hash.put('Cristina','CRISTINA') // hash de cristina colide com julia
hash.print()

console.log('\nRemoção de Iara')
hash.remove('ilara')
hash.print()

console.log('\nRemoção de cristina')
hash.remove('Cristina')
hash.print()
