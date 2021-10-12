const { Dictionaty } = require('../dictsAndHash/dictionary')
const { Queue } = require('../filas/filas');

class Graph {
  constructor() {
    this.vertices = []
    this.adjlist = new Dictionaty()
  }
  addVertex(v) {
    this.vertices.push(v)
    this.adjlist.set(v, [])
  }

  addEdge(v, w) {
    this.adjlist.get(v).push(w)
    this.adjlist.get(w).push(v)
  }

  // Busca em largura
  initializeColor() {
    let color = []
    for(let i = 0; i < this.vertices.length; i++) {
      // Elements dont's visited and not discovered
      color[this.vertices[i]] = 'unknown'
    }
    return color
  }

  bfs(v, callback) {
    let color = this.initializeColor()
    let queue = new Queue()
    queue.Enqueue(v)
    while(!queue.IsEmpty()) {
      let u = queue.Dequeue()
      let neighbors = this.adjlist.get(u)
      color[u] = 'discovered'
      for (let i = 0;  i < neighbors.length; i++) {
        let w = neighbors[i]

        if(color[w] === 'unknown') {
          color[w] = 'discovered'
          queue.Enqueue(w)
        }
      }
      color[u] = 'visited'
      callback(u)
    }
  }


  dfs(callback) {
    let color = this.initializeColor()
    for(let i = 0; i < this.vertices.length; i++) {
      if(color[this.vertices[i]] == 'unknown') {
        this.dfsVisit(this.vertices[i], color, callback)
      }
    }
  }

  dfsVisit(u, color, callback) {
    color[u] = 'discovered';
    callback(u)

    let neighbors = this.adjlist.get(u)
    for(let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i]
      if(color[w] === 'unknown') {
        this.dfsVisit(w, color, callback)
      }
    }
    color[u] = 'visited'
  }



  toString() {
    let s = ''
    this.vertices.forEach(vertice => {
      s += `#===== ${vertice} -> `
      let neighbors = this.adjlist.get(vertice)

      neighbors.forEach(neighbor => {
        s += neighbor + ' '
      })
      s += '\n'
    })
    return s
  }
}

function printNode(value) {
  console.log(`vertex visited ${value}`)
}

let graph = new Graph()
let vertices = ['A', 'B', 'C', 'D', 'E']

vertices.forEach(vert => {
  graph.addVertex(vert)
})

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('B', 'E')
graph.addEdge('C', 'D')


console.log('#===== LISTA DE ADJACÊNCIAS =====#')
console.log(graph.toString())
//graph.bfs(vertices[0], printNode)
graph.dfs(printNode)