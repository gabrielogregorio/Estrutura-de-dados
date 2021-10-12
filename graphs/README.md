```text
          A \
        /   \  \
      /      \    \
    /          \     \
  B             C------D
  |
  |
  E
```

AB => Vértices Adjacentes
AE => Vértices não-Adjacentes => mas é um caminho
ACD => Ciclico - ciclo
ABE => Aciclico, não volta para o primeiro elemento, não fecha

/// Podem ter direções indicadas por setas (--->)///
* Uma direção, fracamente direcionados 
* Multiplas direções, fortemente direcionados/conectados

//                  10
// Cada aresta (--------->) pode ter um peso!

## Matriz de adjacencia
```text
          A \
        /   \  \
      /      \    \
    /          \     \
  B             C------D
  |
  |
  E
```
### Matriz de adjacências
Vazios === 0
Matriz de adjancencias não é boa para buscas, otimização é complicada pois precisa buscar todas as possiblidades
|   | A | B | C | D  | E |
|---|---|---|---|----|---|
| A |   | 1 | 1 | 1  |   |
| B | 1 |   |   |    | 1 |
| C | 1 |   |   | 1  |   |
| D | 1 |   | 1 |    |   |

## Lista de adjacencias
A | B C D
B | A E
C | A D
D | A C
E | B

## Grau
Quanto mais conexões de um ponto, maior é a conexão. 3 conexões = grau 3

## Matriz de incidência.
...

## Busca em Largura (BFS)
```text
          A \
        /   \  \
      /      \    \
    /          \     \
  B             C------D
  |
  |
  E
```
A B C D E


## Busca em profundidade (DFS)
```text
          A \
        /   \  \
      /      \    \
    /          \     \
  B             C------D
  |
  |
  E
```
A B E C D