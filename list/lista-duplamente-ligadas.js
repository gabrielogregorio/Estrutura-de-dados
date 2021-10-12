class Node {
  constructor(element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class LikedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null // final da lista
  }

  append(element) {
    // add element in end list
    let node = new Node(element)
    let current;

    if(this.head == null) {
      this.head = node
      this.tail = node
    } else {
      current = this.head

      while(current.next) {
        current = current.next
      }

      current.next = node
      this.tail = node
    }
    this.length ++
  }

  insert(position, element) {
    //insert in specific position
    if(position >= 0 && position <= this.length) {
      let node = new Node(element)
      let current = this.head
      let previus
      let index = 0

      if(position === 0) {
        if(!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if(position === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        while (index++ < position) {
          previus = current;
          current = current.next;
        }

        node.next = current
        previus.next = node
        current.prev = node
        node.prev = previus
      }
      this.length++
      return true
    } else {
      return false
    }
  }

  removeAt(position) {
    // Remova in specific position
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previus;
      let index = 0;

      if(position === 0) {
        this.head = current.next

        if(this.length === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (position === this.length - 1)  {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        while(index++ < position) {
          previus = current
          current = current.next
        }
        previus.next = current.next
        current.next.prev = previus
      } 
      this.length--
      return current.element
    } else {
      return null
    }
  }

  remove(element) {
    // remove a element
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    // return position a element
    let current = this.head;
    let index = 0;

    while(current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1
  }

  isEmpty() {
    // list is empty?
    return this.length == 0
  }

  size() {
    // retorn size of instance
    return this.length
  }

  getHead(){
    // Return a head (first element of list)
    return this.head.element
  }

  toString() {
    // convert list in string
    let current = this.head
    let string = '| '

    while(current) {
      string += current.element + ' | '
      current = current.next
    }

    return string
  }

  print() {
    // show likedlist
    console.log(this.toString())
  }
}

let ll = new LikedList()
ll.append('TOP1')
ll.append('TOP3')
ll.append('TOP4')
ll.append('TOP5')
ll.append('TOP6')
ll.print()
ll.removeAt(3)
ll.print()
ll.insert(1, 'TOP2 -- new')
ll.print()
ll.remove('TOP6')
ll.print()
console.log(ll.isEmpty())
console.log(ll.size())
console.log(ll.getHead())
console.log(ll.indexOf('TOP3'))

