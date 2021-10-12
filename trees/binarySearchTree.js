class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    // insert a key

    let newNode = new Node(key)

    if (this.root == null) {
      this.root = newNode
    } else {
      this.auxInsertNode(this.root, newNode)
    }
  }

  auxInsertNode(node, newNode) {
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode
      } else {
        this.auxInsertNode(node.left, newNode)
      }
    } else if (node.right === null) {
      node.right = newNode
    } else {
      this.auxInsertNode(node.right, newNode)
    }
  }

  /*
  Referencia visual
          10
      6         20
    3    8   11
   */

  search(key) {
    //searhc one key
    return this.auxSearchNode(key, this.root)
  }

  auxSearchNode(key, node) {
    if(node === null) {
      return false
    }

    if (key < node.key) {
      return this.auxSearchNode(key, node.left)
    } else if(key > node.key) {
      return this.auxSearchNode(key, node.right)
    } else {
      return true
    }
  }

  remove(key) {
    // remove one key
   this.auxRemoveNode(this.root, key)
  }

  auxRemoveNode(node, key) {
    if (this.root === null) {
      return null
    }

    if(key < node.key) {
      node.left = this.auxRemoveNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this.auxRemoveNode(node.right, key)
      return node
    } else {
      if(node.left === null && node.right === null) {
        node = null
        return node
      }

      if(node.left === null) {
        node = node.right
        return node
      } else if(node.right === null) {
        node = node.left
        return node
      }

      let aux = this.auxfindMinNode(node.right)
      node.key = aux.key
      node.right = this.auxRemoveNode(node.right, aux.key)
      return node
    }
  }
  auxfindMinNode(node) {
    while(node && node.left !== null) {
      node = node.left
    }
    return node
  }



  min() {
    // return a minimun key
    return this.auxMinNode(this.root)
  }

  auxMinNode(node) {
    if(node) {
      while(node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  max() {
    // return a maximiun key
    return this.auxMaxNode(this.root)
  }

  auxMaxNode(node) {
    if(node) {
      while(node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  inOrderTransverse(callback) {
    // visit all nodes of tree using recursion (in order)
    this.auxInOrderTransverseNode(this.root, callback)
  }


  auxInOrderTransverseNode(node, callback) {
    if (node !== null) {
      this.auxInOrderTransverseNode(node.left, callback)
      callback(node.key)
      this.auxInOrderTransverseNode(node.right, callback)
    }
  }

  
  preOrderTransverse(callback) {
    // visit all nodes, after, visit descendents
    this.auxpreOrderTransverseNode(this.root, callback)
  }
  auxpreOrderTransverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.auxpreOrderTransverseNode(node.left, callback)
      this.auxpreOrderTransverseNode(node.right, callback)
    }
  }

  
  postOrderTransverse(callback) {
    // visit all nodes of tree using recursion (in order)
    this.auxpostOrderTransverseNode(this.root, callback)
  }
  auxpostOrderTransverseNode(node, callback) {
    if (node !== null) {
      this.auxpostOrderTransverseNode(node.left, callback)
      this.auxpostOrderTransverseNode(node.right, callback)
      callback(node.key)
    }
  }
}

function printNode(value) {
  console.log(value)
}

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(20)
tree.insert(3)
tree.insert(8)
tree.insert(11)
console.log(tree.search(11))
console.log(tree.search(9))
console.log(tree.min())
console.log(tree.max())

/*
Referencia visual
        10
     6         20
   3    8   11
*/
// Do menor para o maior
//tree.inOrderTransverse(printNode) // 3, 6, 8, 10, 11, 20

// Visite os nós, depois os descentes
//tree.preOrderTransverse(printNode) // 10, 6, 3, 8, 20, 11

// Visite os descentendes, depois os nós
//tree.postOrderTransverse(printNode)

// * Método remove *//
// Removendo da ponta
console.log('-----------------------')
tree.inOrderTransverse(printNode) // 3, 6, 8, 10, 11, 20

//tree.remove(11) // Remover elemento mais abaixo
//tree.remove(20) // Remover elemento 1 descendente
tree.remove(6) // Remover elemento mais de 1 descendente
console.log('-----------------------')
tree.inOrderTransverse(printNode) // 3, 6, 8, 10, 11, 20

